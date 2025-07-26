const express = require("express");
require("./databaseConnection");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

// ✅ Apply middleware in correct order
app.use(cors()); // 🔁 CORS should come before routes
app.use(express.json());
app.use("/api/todos", todoRoutes);

app.listen(4000, () => {
  console.log("✅ App is listening on port 4000");
});