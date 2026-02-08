import "../styles/App.scss";
import { useState } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Preview from "../components/Preview";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editorial, setEditorial] = useState("");
  const [reviews, setReviews] = useState("");
  const [genre, setGenre] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [otherBooks, setOtherBooks] = useState("");
  const [nacionality, setNacionality] = useState("");

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

        <Preview
          title={title}
          author={author}
          editorial={editorial}
          reviews={reviews}
          genre={genre}
          synopsis={synopsis}
          otherBooks={otherBooks}
          nacionality={nacionality}
        />

        <Form
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          editorial={editorial}
          setEditorial={setEditorial}
          reviews={reviews}
          setReviews={setReviews}
          genre={genre}
          setGenre={setGenre}
          synopsis={synopsis}
          setSynopsis={setSynopsis}
          otherBooks={otherBooks}
          setOtherBooks={setOtherBooks}
          nacionality={nacionality}
          setNacionality={setNacionality}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
