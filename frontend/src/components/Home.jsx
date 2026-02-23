import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Preview from "./Preview";

function Home() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/libros/latest/5")
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        setBooks(Array.isArray(data) ? data : data.books ?? []);
      })
      .catch(() => setError("Could not load books"));
  }, []);

  return (
    <>
      <section className="hero">
        <h2 className="title">Latest books</h2>
        {error && <p>{error}</p>}
      </section>

      <div className="bookList">
        {books.map((book) => (
          <Preview key={book.id} bookData={book} />
        ))}
      </div>

      <div className="home__cta">
        <Link className="button--link" to="/create">
          Create book card
        </Link>
      </div>
    </>
  );
}

export default Home;
