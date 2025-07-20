import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="product-detail" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>{book.title}</h2>
      <img src={book.image} alt={book.title} style={{ width: "250px", marginBottom: "10px" }} />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <button
        style={{
          backgroundColor: "#28a745",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
