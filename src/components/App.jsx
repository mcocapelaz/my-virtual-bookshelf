import "../styles/App.scss";
import { useState } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

        <section className="preview">
          <div className="projectImage"></div>
          <article className="card">
            <h2 className="card__projectTitle">
              <span className="card__projectTitle--text">Book card</span>
            </h2>

            <div className="card__author">
              <div className="card__authorPhoto"></div>
              <p className="card__nacionality">{nacionality || "Canadian"}</p>
              <h3 className="card__name">{author || "Margaret Atwood"}</h3>
            </div>

            <div className="card__project">
              <h3 className="card__name">{title || "The Handmaid's Tale"}</h3>
              <h3 className="card__review">
                {reviews || "Review: Unexpected, horrifying and convincing"}
              </h3>
              <p className="card__description">
                {synopsis ||
                  "Synopsis: The narrator, the eponymous handmaid, is assigned to the household of a childless Commander and his wife. Her life becomes one of prescribed routine."}
              </p>
              <p className="card__bookInfo">
                {editorial || "Editorial: Salamandra"}
              </p>

              <div className="card__bookInfo">
                {`Other books: ${otherBooks || "Other books:"}`}
                <p className="card__review">{`Genre: ${
                  genre || "Genre: Dystopian"
                }`}</p>
              </div>
            </div>
          </article>
        </section>

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
