import React from "react";

const MyOrdersPage = () => {
  // Sample data for orders
  const orders = [
    {
      id: 1,
      date: "2024-03-06",
      status: "Pending",
      totalPrice: 97.97,
      items: [
        {
          id: 1,
          name: "Product 1",
          price: 25.99,
          quantity: 2,
        },
        {
          id: 2,
          name: "Product 2",
          price: 35.99,
          quantity: 1,
        },
      ],
    },
    {
      id: 2,
      date: "2024-03-05",
      status: "Completed",
      totalPrice: 45.99,
      items: [
        {
          id: 3,
          name: "Product 3",
          price: 45.99,
          quantity: 1,
        },
      ],
    },
  ];

  const handlePay = (orderId) => {
    // Perform payment action for the order with the provided orderId
    console.log("Payment initiated for order #" + orderId);
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
                <p className="text-gray-600">{order.date}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  Total: ${order.totalPrice.toFixed(2)}
                </h2>
                <p className="text-gray-600">Status: {order.status}</p>
              </div>
            </div>
            <div>
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center mb-2">
                  <div className="flex-grow">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <div className="text-gray-600">{item.quantity}x</div>
                </div>
              ))}
            </div>
            {order.status === "Pending" && (
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
