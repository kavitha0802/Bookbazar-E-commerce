// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    if (!name || !email || !address || !paymentMethod) {
      alert("Please fill all fields and select a payment method.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          address,
          paymentMethod,
          cartItems,
          totalAmount,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || "Order placed successfully!");
        clearCart();
        navigate("/");
      } else {
        alert(result.message || "Failed to place order.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg mt-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {/* 🧾 Billing Summary */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Billing Summary:</h3>
            <ul className="space-y-2">
              {cartItems.map((item, index) => (
                <li
                  key={`${item.id}-${index}`}
                  className="flex justify-between border-b pb-2"
                >
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="text-right mt-4 font-bold">
              Total: ₹{totalAmount}
            </div>
          </div>

          {/* 👤 Customer Info */}
          <div className="mb-6 space-y-4">
            <h3 className="text-lg font-semibold mb-2">Customer Information:</h3>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />

            <textarea
              placeholder="Full Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded"
              rows={3}
              required
            ></textarea>
          </div>

          {/* 💳 Payment Method */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Payment Method:</h3>
            <div className="space-y-2">
              {["UPI", "Cash on Delivery", "Card Payment"].map((method) => (
                <label key={method} className="block">
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  {method}
                </label>
              ))}
            </div>
          </div>

          {/* ✅ Place Order */}
          <button
            onClick={handlePlaceOrder}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded w-full"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
