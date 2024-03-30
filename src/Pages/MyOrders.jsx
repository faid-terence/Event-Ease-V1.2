import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserOrders } from "../features/Redux/orders/orderSlice";
import { payOrder } from "../features/Redux/orders/orderSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyOrdersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
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
  }

  const handlePay = async (orderId) => {
    try {
      const result = await dispatch(payOrder(orderId));
      const paymentUrl = result.payload.paymentUrl;

      window.location.href = paymentUrl;
    } catch (error) {
      toast.error("Error occurred while paying for order #" + orderId);
    }
  };

  if (error) return <div>{error}</div>;
  if (!orders.length) return <div className="text-center">No orders found</div>;

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
              <button className="btn mt-4" onClick={() => handlePay(order.id)}>
                Pay Now
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrdersPage;
