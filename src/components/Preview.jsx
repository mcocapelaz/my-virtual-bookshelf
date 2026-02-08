function Preview(props) {
  const {
    title,
    author,
    editorial,
    reviews,
    genre,
    synopsis,
    otherBooks,
    nacionality,
  } = props;

  return (
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
            {`Other books: ${otherBooks || "Oryx and Crake"}`}
            <p className="card__review">{`Genre: ${
              genre || "Dystopian"
            }`}</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Preview;
