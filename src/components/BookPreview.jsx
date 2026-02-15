import { useEffect, useState } from "react";
import Preview from "../components/Preview";
import Header from "./Header"; 
import Footer from "./Footer"; 
import "../styles/App.scss";

function BookPreview() {
  const [bookData, setBookData] = useState({});
  const [url, setUrl] = useState("false");

  useEffect(() => {
    const saved = localStorage.getItem("myBook");
    if (saved) {
      setBookData(JSON.parse(saved));
    }
    setUrl(window.location.href);
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
    setUrl(true); 
  };

  return (
    <div className="container">
        <Header />
      <Preview bookData={bookData} />
      <button className="button--link" onClick={shareCard}>
        Share My Card
      </button>
      {url && <p className="card-url">{url}</p>}
      <Footer />
    </div>
  );
}

export default BookPreview;
