import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import { Toaster } from 'react-hot-toast';
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";



function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />

      </Routes>
    </>
  );
}

export default App;
