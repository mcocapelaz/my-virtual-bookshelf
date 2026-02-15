import bookPreviewImg from "../images/book_preview.jpg";

function Preview(props) {
  const { bookData } = props;

  return (
    <section className="preview">
      <div
        className="projectImage"
        style={{
          backgroundImage: bookData.bookImage
            ? `url(${bookData.bookImage})`
            : `url(${bookPreviewImg})`,
        }}
      ></div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">Book card</span>
        </h2>

        <div className="card__author">
          <div
            className="card__authorPhoto"
            style={{
              backgroundImage: bookData.authorImage
                ? `url(${bookData.authorImage})`
                : "http://localhost:5173/images/book_preview.jpg",
            }}
          ></div>
          <p className="card__nacionality">
            {bookData.nacionality || "Canadian"}
          </p>
          <h3 className="card__name">{bookData.author || "Margaret Atwood"}</h3>
        </div>

        <div className="card__project">
          <h3 className="card__name">
            {bookData.title || "The Handmaid's Tale"}
          </h3>
          <h3 className="card__review">
            {bookData.reviews ||
              "Review: Unexpected, horrifying and convincing"}
          </h3>
          <p className="card__description">
            {bookData.synopsis ||
              "Synopsis: The narrator, the eponymous handmaid, is assigned to the household of a childless Commander and his wife. Her life becomes one of prescribed routine."}
          </p>
          <p className="card__bookInfo">
            {bookData.editorial || "Editorial: Salamandra"}
          </p>

          <div className="card__bookInfo">
            {`Other books: ${bookData.otherBooks || "Oryx and Crake"}`}
            <p className="card__review">{`Genre: ${
              bookData.genre || "Dystopian"
            }`}</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Preview;
