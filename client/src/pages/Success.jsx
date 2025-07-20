import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="bg-white p-8 rounded shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Order Successful!</h1>
        <p className="text-gray-700 mb-6">Thank you for your purchase. Your order has been placed successfully!</p>
        <Link
          to="/"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
