require('dotenv').config(); // Load .env variables at the top

const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

if (!DB_URL) {
  console.error("❌ DB_URL not found in .env file");
  process.exit(1); // Exit if no DB_URL is provided
}

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Database connected successfully."))
  .catch((err) => {
    console.error("❌ Database connection error:", err);
    process.exit(1);
  });