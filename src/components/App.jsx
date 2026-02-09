import "../styles/App.scss";
import { useState } from "react";
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

  return (
    <div className="container">
      <Header />

      <main className="main">
        <section className="hero">
          <h2 className="title">My Virtual Bookshelf</h2>
          <p className="hero__text">Your favorite reads, all in one place</p>
          <a className="button--link" href="./">
            See books
          </a>
        </section>

        <Preview bookData={bookData} />

        <Form bookData={bookData} setBookData={setBookData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
