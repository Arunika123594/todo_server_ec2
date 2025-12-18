import dotenv from "dotenv";
dotenv.config();               // MUST be at the very top

import express from "express";
import cors from "cors";
import connectDb from "./Db/db.js";
import route from "./Routes/todoRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/csbs", route);

// Health check (important for Render)
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Start server ONLY after DB connects
const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

startServer();
