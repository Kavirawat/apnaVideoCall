import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { createServer } from "node:http";
import { connectToSocket } from "./controllers/socketManager.js ";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, "public")));

/* =================== Create Server ========================== */
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);

app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

/* =================== Start Server ========================== */
const start = async () => {
  const connectiondDb = await mongoose.connect(process.env.MONGODB_URL);
  console.log(`MONGO Connected DB Host : ${connectiondDb.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("LISTENING ON PORT 8000");
  });
};

start();
