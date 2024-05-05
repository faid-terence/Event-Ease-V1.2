import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserOrders } from "../features/Redux/orders/orderSlice";
import { payOrder } from "../features/Redux/orders/orderSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import visaCardImage from "../assets/images/cards.jpg";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

function getUser() {
  const token = localStorage.getItem("token");
  const defaultImage =
    "http://res.cloudinary.com/faid-terence/image/upload/v1711803562/aiswa8jcv6rzztbnnly3.jpg";
  if (token) {
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const userName = decodedToken.name;
      const email = decodedToken.email;

      return { userName, email };
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
}

const MyOrdersPage = () => {
  const [user, setUser] = useState(getUser());
  const [selectedCurrency, setSelectedCurrency] = useState("RWF");

  const name = user?.userName;
  const email = user?.email;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders, loading, error } = useSelector((state) => state.order);
  const [selectedOrder, setSelectedOrder] = useState(null);
  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);
  console.log(orders);
  const flutterwavePublicKey = import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY;

  const createFlutterwaveConfig = (order) => {
    return {
      public_key: flutterwavePublicKey,
      tx_ref: Date.now(),
      amount: order.totalPrice * 100,
      currency: selectedCurrency,
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email,
        phone_number: "250788634357",
        name,
      },
      customizations: {
        description: "Your ultimate solution to online ticketing",
        logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      },
      callback: (response) => {
        console.log(response);
        closePaymentModal();
      },
      onClose: () => {},
      text: "Pay with Flutterwave!",
    };
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  console.log(orders);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center">{error}</div>;
  if (!orders.length)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            No Orders Found
          </h1>
          <p className="text-gray-600 text-center">
            It looks like you haven't placed any orders yet. Please check back
            later or try purchasing some tickets.
          </p>
        </div>
      </div>
    );

  const handlePaymentWithStripe = async (orderId) => {
    try {
      const result = await dispatch(payOrder(orderId));
      const paymentUrl = result.payload.paymentUrl;
      window.location.href = paymentUrl;
    } catch (error) {
      toast.error("Error occurred while paying for order #" + orderId);
    }
  };

  const handleChoosePaymentMethod = (order) => {
    setSelectedOrder(order);
  };

  const handlePaymentConfirmation = (paymentMethod) => {
    if (selectedOrder) {
      if (paymentMethod === "PayPal") {
        handlePaymentWithStripe(selectedOrder.id);
      }
    }
  };
  const handlePay = async (orderId) => {
    try {
      const result = await dispatch(payOrder(orderId));
      const paymentUrl = result.payload.paymentUrl;

      window.location.href = paymentUrl;
    } catch (error) {
      toast.error("Error occurred while paying for order #" + orderId);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Orders</h1>
      <div className="mb-8 flex justify-end">
        <div className="w-64">
          <label
            htmlFor="currency"
            className="block font-semibold mb-1 text-gray-700"
          >
            Choose Currency:
          </label>
          <select
            id="currency"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="RWF">Rwandan Franc (RWF)</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Order #{order.id}
                </h2>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {order.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Order Date:</span>{" "}
                {order.orderDate}
              </p>
              <div>
                {order.tickets.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between mb-2"
                  >
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        {item.category}
                      </p>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                    <span className="text-gray-600">{order.quantity}x</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  Total: ${order.totalPrice.toFixed(2)}
                </h2>
                {!order.isPaid && (
                  <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300">
                    <FlutterWaveButton {...createFlutterwaveConfig(order)} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrdersPage;
