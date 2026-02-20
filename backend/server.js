import express from "express";
import cors from "cors";
import books from "./routes/books.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api/libros", books);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
