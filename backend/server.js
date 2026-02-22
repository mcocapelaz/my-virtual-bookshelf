import express from "express";
import cors from "cors";
import books from "./routes/books.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/libros", books);

app.listen(4000, () => {
  console.log(`Server running in http://localhost:4000`);
});
