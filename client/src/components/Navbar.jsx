import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useCart();

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-purple-500 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Left: Logo */}
        <Link to="/" className="text-xl font-bold hover:underline">
          BookBazaar
        </Link>

        {/* Right: Navigation Links */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/books" className="hover:underline">Books</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:underline relative">
              Cart
              {totalQuantity > 0 && (
                <span className="ml-1 bg-red-500 text-white rounded-full px-2 text-sm">
                  {totalQuantity}
                </span>
              )}
            </Link> 
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
