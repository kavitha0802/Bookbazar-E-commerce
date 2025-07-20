const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { items, paymentMethod, total } = req.body;
  console.log("✅ Order received:", { items, paymentMethod, total });

  // In real apps, save to database here
  res.status(201).json({ message: "Order placed successfully" });
});

module.exports = router;
