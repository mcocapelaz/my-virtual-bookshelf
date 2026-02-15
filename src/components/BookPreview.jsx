import { useEffect, useState } from "react";
import Preview from "../components/Preview";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/App.scss";

function BookPreview() {
  const [bookData, setBookData] = useState({});
  

  useEffect(() => {
    const saved = localStorage.getItem("myBook");
    if (saved) {
      setBookData(JSON.parse(saved));
    }
}, []);

  //Compartir tarjeta

  const shareCard = () => {
    if (navigator.share) {
      navigator.share({
        title: "Mira mi libro favorito",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles");
    }
  };

  return (
    <div className="container">
      <Header />
      <Preview bookData={bookData} />
      <button className="button--link" onClick={shareCard}>
        Share My Card
      </button>
      {<p className="card-url">{window.location.href}</p>}
      <Footer />
    </div>
  );
}

export default BookPreview;
