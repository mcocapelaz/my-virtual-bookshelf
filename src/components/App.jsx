import "../styles/App.scss";
import { useState, useEffect } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Preview from "../components/Preview";

function App() {
  const [bookData, setBookData] = useState({
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
  });

  // Guardar automáticamente cuando cambien los datos
  useEffect(() => {
    localStorage.setItem('myBook', JSON.stringify(bookData));
  }, [bookData]);

  // Cargar datos al iniciar
  useEffect(() => {
    const saved = localStorage.getItem('myBook');
    if (saved) {
      setBookData(JSON.parse(saved));
    }
  }, []);

  const shareCard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('¡Enlace copiado! 📋');
  };

  return (
    <div className="container">
      <Header />

      <main className="main">
        <section className="hero">
          <h2 className="title">My Virtual Bookshelf</h2>
          <p className="hero__text">Your favorite reads, all in one place</p>
          
          <button className="button--link" onClick={shareCard}>
            Share My Card
          </button>
        </section>

        <Preview bookData={bookData} />
        
        <Form bookData={bookData} setBookData={setBookData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
