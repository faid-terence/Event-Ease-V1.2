import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserOrders } from "../features/Redux/orders/orderSlice";
import { payOrder } from "../features/Redux/orders/orderSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyOrdersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders, loading, error } = useSelector((state) => state.order);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="bg-white shadow-md rounded-lg mb-8">
          <div className="p-6">
            <div className="flex justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">Order #{order.id}</h2>
                <p className="text-gray-600">{order.orderDate}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  Total: ${order.totalPrice.toFixed(2)}
                </h2>
                <p className="text-gray-600">Status: {order.status}</p>
              </div>
            </div>
            <div>
              {order.tickets.map((item) => (
                <div key={item.id} className="flex items-center mb-2">
                  <div className="flex-grow">
                    <p className="text-lg font-semibold">{item.category}</p>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <div className="text-gray-600">{order.quantity}x</div>
                </div>
              ))}
            </div>
            {!order.isPaid && (
              <div>
                <button
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 transition duration-300 ease-in-out"
                  onClick={() => handleChoosePaymentMethod(order)}
                >
                  Pay Now
                </button>
                {selectedOrder === order && (
                  <div className="mt-4">
                    <p className="text-lg font-semibold mb-2">
                      Choose Payment Method:
                    </p>
                    <div className="relative">
                      <select
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                        onChange={(e) =>
                          handlePaymentConfirmation(e.target.value)
                        }
                      >
                        <option value="">Select Payment Method</option>
                        <option value="PayPal">PayPal</option>
                        <option value="MTN">MTN</option>
                        <option value="M-Pesa">M-Pesa</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 fill-current text-gray-500"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrdersPage;
