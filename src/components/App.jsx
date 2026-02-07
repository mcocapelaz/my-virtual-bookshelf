import "../styles/App.scss";
import { useState } from "react";
import Form from "../components/Form";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [buy, setBuy] = useState("");
  const [reviews, setReviews] = useState("");
  const [hashtags, setHashtags] = useState("");
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
          <h2 className="title">My bookshelf</h2>
          <p className="hero__text">My Virtual Bookshelf</p>
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
              <p className="card__job">Full stack Developer</p>
              <h3 className="card__name">Emmelie Bjôrklund</h3>
            </div>

            <div className="card__project">
              <h3 className="card__name">{title || "Elegant Workspace"}</h3>
              <p className="card__slogan">Diseños Exclusivos</p>
              <h3 className="card__descriptionTitle">Product description</h3>
              <p className="card__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                quos? Itaque, molestias eveniet laudantium adipisci vitae
                ratione
              </p>

              <div className="card__technicalInfo">
                <p className="card__technologies">React JS - HTML - CSS</p>

                <a
                  className="icon icon__www"
                  href="#"
                  title="Click to see the book information"
                >
                  Web link
                </a>
                <a
                  className="icon icon__github"
                  href="#"
                  title="Click to see the review"
                >
                  GitHub link
                </a>
              </div>
            </div>
          </article>
        </section>

        <Form
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          buy={buy}
          setBuy={setBuy}
          reviews={reviews}
          setReviews={setReviews}
          hashtags={hashtags}
          setHashtags={setHashtags}
          synopsis={synopsis}
          setSynopsis={setSynopsis}
          otherBooks={otherBooks}
          setOtherBooks={setOtherBooks}
          nacionality={nacionality}
          setNacionality={setNacionality}
        />
      </main>

      <footer className="footer">
        <img className="logoSponsor" src="./images/adalab.png" alt="My logo" />
      </footer>
    </div>
  );
}

export default App;
