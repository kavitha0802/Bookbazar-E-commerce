import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="border p-4 rounded shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p>Price: ₹{item.price}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className={`px-2 py-1 rounded ${
                        item.quantity === 1
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-purple-500 hover:bg-purple-600 text-white"
                      }`}
                      disabled={item.quantity === 1}
                    >
                      –
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 rounded bg-purple-500 hover:bg-purple-600 text-white"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="text-right font-semibold text-lg mb-4">
            Total: ₹{total}
          </div>

          <div className="flex justify-between">
            <Link to="/checkout">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                Proceed to Checkout
              </button>
            </Link>

            <button
              onClick={clearCart}
              className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
