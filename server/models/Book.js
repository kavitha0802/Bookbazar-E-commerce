import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
  price: Number,
  description: String,
  image: String,
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
