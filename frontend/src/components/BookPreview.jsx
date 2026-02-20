import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Preview from "../components/Preview";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/App.scss";
import React from "react";

function BookPreview() {
  const { id } = useParams();
  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/api/libros/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(setBookData)
      .catch(() => setError("Book not found"));
  }, [id]);

  const shareCard = () => {
    if (navigator.share) {
      navigator.share({
        title: "Mira mi libro favorito",
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles");
    }
  };

  if (error) {
    return (
      <div className="container">
        <Header />
        <p>{error}</p>
        <Link to="/">Back to Home</Link>
        <Footer />
      </div>
    );
  }

  if (!bookData) {
    return (
      <div className="container">
       
        <p>Loading...</p>
       
      </div>
    );
  }

  return (
    <div className="container">
     
      <Preview bookData={bookData} />
      <button className="button--link" onClick={shareCard}>
        Share My Card
      </button>
      <p className="card-url">{window.location.href}</p>
      
    </div>
  );
}

export default BookPreview;
