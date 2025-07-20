import React from "react";
import { Link } from "react-router-dom";
import readingBook from "../assets/reading-book.svg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-purple-200 flex flex-col md:flex-row items-center justify-between p-8">
      {/* Text Section */}
      <div className="max-w-xl mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-800">
          Welcome to Book Haven
        </h1>
        <p className="text-lg md:text-xl text-purple-700 mb-6">
          Discover your next favorite book at unbeatable prices!
        </p>
        <Link
          to="/books"
          className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition duration-300"
        >
          Explore Now
        </Link>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={readingBook}
          alt="Reading book"
          className="w-full max-w-md md:max-w-lg"
        />
      </div>
    </div>
  );
};

export default Home;
