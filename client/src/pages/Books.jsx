import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 299,
    image: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 450,
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
  },
  {
    id: 3,
    title: "Ikigai",
    author: "Francesc Miralles",
    price: 399,
    image: "https://m.media-amazon.com/images/I/71tbalAHYCL.jpg"
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    price: 320,
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"
  },
{
  id: 5,
  title: "The Subtle Art of Not Giving a F*ck",
  author: "Mark Manson",
  image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
  price: 349,
  year: 2016
},
  {
    id: 7,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 349,
    image: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg"
  }
];

const Books = () => {
  const { addToCart } = useCart();
  const [fetchedBooks, setFetchedBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/books");
        setFetchedBooks(response.data);
      } catch (error) {
        console.error("❌ Failed to fetch books from backend:", error.message);
      }
    };

    fetchBooks();
  }, []);

  const allBooks = [...books, ...fetchedBooks];

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-700">Book Store</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {allBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden p-4 flex flex-col items-center hover:shadow-xl transition-shadow"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-40 h-60 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-center">{book.title}</h2>
            <p className="text-gray-600 mb-1 text-sm">{book.author}</p>
            <p className="text-purple-700 font-bold text-lg">₹{book.price}</p>
            <button
              onClick={() => addToCart(book)}
              className="mt-3 bg-purple-500 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
