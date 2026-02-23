import React from "react";
import bookPreviewImg from "../images/book_preview.jpg";

function BookCard({ book }) {
  return (
    <article className="bookCard">
      <div
        className="bookCard_image"
        style={{
          backgroundImage: book.book_image
            ? `url(${book.book_image})`
            : `url(${bookPreviewImg})`,
        }}
      ></div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </article>
  );
}

export default BookCard; 