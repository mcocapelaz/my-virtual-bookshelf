import "../styles/App.scss";
import { useState } from "react";
import Form from "../components/Form";
import logo from "../images/logo.jpg";

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
      <header className="header">
        <a
          className="header__brand"
          href="./"
          title="Haz click para volver a la página inicial"
        >
          <img
            className="header__companyLogo"
            src="./images/laptop-code-solid.svg"
            alt="Logo proyectos molones"
          />
          <h1 className="header__title">My Virtual Bookshelf</h1>
        </a>
        <img
          className="logoSponsor"
          src="./images/adalab.png"
          alt="Logo Adalab"
        />
      </header>

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
                {otherBooks ||
                  "Other books: The Blind Assassin, Oryx and Crake"}
                <p className="card__review">{genre || "Genre: Dystopian"}</p>
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

      <footer className="footer">
        <img className="logoSponsor" src={logo} alt="My bookshelf logo" />
      </footer>
    </div>
  );
}

export default App;
