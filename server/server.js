// server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Test endpoint
app.get("/", (req, res) => {
  res.send("API is running");
});

// ✅ Checkout endpoint that receives full order info
app.post("/api/checkout", async (req, res) => {
  try {
    const { name, email, address, paymentMethod, cartItems, totalAmount } = req.body;

    console.log("🛒 New Order Received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Address:", address);
    console.log("Payment Method:", paymentMethod);
    console.log("Cart Items:", cartItems);
    console.log("Total Amount:", totalAmount);

    // 👉 Optional: Save this data to database / file

    res.status(200).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("❌ Checkout Error:", error);
    res.status(500).json({ message: "Something went wrong during checkout." });
  }
});

// Dummy books route
app.get("/api/books", (req, res) => {
  const books = [ {
    id: 1,
    title: "Think Like a Monk",
    author: "Jay Shetty",
    image: "https://images-na.ssl-images-amazon.com/images/I/81s6DUyQCZL.jpg",
    price: 350
  },
  {
  id: 2,
  title: "It Start With US",
  author: "Colleen Hoover",
  image: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL.jpg",
  price: 410
},
  
  {
    id: 3,
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    image: "https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg",
    price: 270,
  },
  {
    id: 4,
    title: "It Ends With Us",
    author: "Colleen Hoover",
    image: "https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML.jpg",
    price: 280
  }// ✅ Changed ID from 1 to 4
  ];
  res.json(books);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
