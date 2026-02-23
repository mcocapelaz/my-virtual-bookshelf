import { useState, useEffect } from "react";

import Form from "../components/Form";
import Preview from "../components/Preview";
import React from "react";

const initialBookData = {
  title: "",
  author: "",
  editorial: "",
  reviews: "",
  genre: "",
  synopsis: "",
  otherBooks: "",
  nacionality: "",
  bookImage: "",
  authorImage: ""
};

function App() {
  const [bookData, setBookData] = useState((initialBookData) => {
    const saved = localStorage.getItem("myBook");
    return saved ? JSON.parse(saved) : initialBookData;
  });

  useEffect(() => {
    sessionStorage.removeItem("myBook"); 
  }, []);
  useEffect(() => {
    sessionStorage.setItem("myBook", JSON.stringify(bookData));
  }, [bookData]);

  const shareCard = () => {
    window.open(`${window.location.origin}/preview`, "_blank", "noopener,noreferrer");
  };

  const resetForm = () => {
    localStorage.removeItem("myBook");
    setBookData(initialBookData);
  };

  return (
    <>
      <section className="hero">
        <h2 className="title">My Virtual Bookshelf</h2>
        <p className="hero__text">Your favorite reads, all in one place</p>

        <button className="button--link" onClick={shareCard}>
          Share My Card
        </button>
      </section>

      <Preview bookData={bookData} />

      <Form bookData={bookData} setBookData={setBookData} onReset={resetForm} />
    </>
  );
}

export default App;
