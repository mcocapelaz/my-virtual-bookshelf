import express from "express";
import pool from "../db/database.js";

const router = express.Router();

// Create a book
router.post("/", async (req, res) => {
  try {
    const { title, author, editorial, reviews, genre, synopsis, nacionality } = req.body;

    const result = await pool.query(
      `INSERT INTO libros (title, author, editorial, reviews, genre, synopsis, nacionality)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [title, author, editorial ?? null, reviews ?? null, genre ?? null, synopsis ?? null, nacionality ?? null]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all books
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM libros ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get book by ID
router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await pool.query("SELECT * FROM libros WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update book
router.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { title, author, editorial, reviews, genre, synopsis, nacionality } = req.body;

    const result = await pool.query(
      `UPDATE libros
       SET title=$1, author=$2, editorial=$3, reviews=$4, genre=$5, synopsis=$6, nacionality=$7
       WHERE id=$8
       RETURNING *`,
      [title, author, editorial ?? null, reviews ?? null, genre ?? null, synopsis ?? null, nacionality ?? null, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete book
router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await pool.query("DELETE FROM libros WHERE id = $1 RETURNING id", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json({ deletedId: result.rows[0].id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const info = await pool.query("SELECT current_database() AS db, current_schema() AS schema");
console.log(info.rows[0]);

export default router;
