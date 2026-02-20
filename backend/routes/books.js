import express from "express";
import pool from "../db/database";

const router = express.Router();

//Crear un libro

router.post("/", async (req, res) => {
  try {
    const { title, author, editorial, reviews, genre, synopsis, nacionality } =
      req.body;
    const result = await pool.query(
      "INSERT INTO books (title, author, editorial, reviews, genre, synopsis, nacionality) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",

      [title, author, editorial, reviews, genre, synopsis, nacionality]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos los libros

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM books");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un libro por ID

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT*FROM books WHERE id =$1", [id]);
    if (results.rows.length === 0)
      return res.status(404).json({ error: "Book not found" });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
