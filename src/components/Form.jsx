function Form(props) {
  const {
    title,
    setTitle,
    author,
    setAuthor,
    editorial,
    setEditorial,
    reviews,
    setReviews,
    genre,
    setGenre,
    synopsis,
    setSynopsis,
    otherBooks,
    setOtherBooks,
    nacionality,
    setNacionality,
  } = props;

  //Funciones manejadoras

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleEditorial = (e) => {
    setEditorial(e.target.value);
  };

  const handleReviews = (e) => {
    setReviews(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleSynopsis = (e) => {
    setSynopsis(e.target.value);
  };

  const handleOtherBooks = (e) => {
    setOtherBooks(e.target.value);
  };

  const handleNacionality = (e) => {
    setNacionality(e.target.value);
  };

  return (
    <form className="addForm">
      <h2 className="title">Information</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Your Virtual Bookshelf</legend>
        <input
          className="addForm__input"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={title}
          onChange={handleTitle}
        />
        <input
          className="addForm__input"
          type="text"
          name="author"
          id="author"
          placeholder="Author"
          value={author}
          onChange={handleAuthor}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="editorial"
            id="editorial"
            placeholder="Editorial"
            value={editorial}
            onChange={handleEditorial}
          />
          <input
            className="addForm__input"
            type="text"
            name="review"
            id="review"
            placeholder="Book review"
            value={reviews}
            onChange={handleReviews}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="genre"
          id="genre"
          placeholder="Genre"
          value={genre}
          onChange={handleGenre}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="synopsis"
          id="synopsis"
          placeholder="Synopsis"
          rows="5"
          value={synopsis}
          onChange={handleSynopsis}
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Author information</legend>
        <input
          className="addForm__input"
          type="text"
          name="otherBooks"
          id="otherBooks"
          placeholder="Other books"
          value={otherBooks}
          onChange={handleOtherBooks}
        />
        <input
          className="addForm__input"
          type="text"
          name="nacionality"
          id="nacionality"
          placeholder="Nacionality"
          value={nacionality}
          onChange={handleNacionality}
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <label htmlFor="image" className="button">
          Upload photo of the book
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="image"
          id="image"
        />
        <label htmlFor="photo" className="button">
          Upload author's photo
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="photo"
          id="photo"
        />
        <button className="button--large">Save book</button>
      </fieldset>
    </form>
  );
}

export default Form;
