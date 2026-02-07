import { useState } from "react";

//Variables de estado

function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [buy, setBuy] = useState("");
  const [reviews, setReviews] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [otherBooks, setOtherBooks] = useState("");
  const [nacionality, setNacionality] = useState("");

  //Funciones manejadoras

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleBuy = (e) => {
    setBuy(e.target.value);
  };

  const handleReviews = (e) => {
    setReviews (e.target.value);
  };

  const handleHashtags = (e) => {
    setHashtags (e.target.value);
  };

  const handleSynopsis = (e) => {
    setSynopsis (e.target.value);
  };

  const handleOtherBooks = (e) => {
    setOtherBooks (e.target.value);
  };

  const handleNacionality = (e) => {
    setNacionality (e.target.value);
  };

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
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
            name="buy"
            id="buy"
            placeholder="Buy it"
            value={buy}
            onChange={handleBuy}
          />
          <input
            className="addForm__input"
            type="url"
            name="goodread"
            id="goodread"
            placeholder="Goodread reviews"
            value={reviews}
            onChange={handleReviews}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="hashtag"
          id="hashtag"
          placeholder="Hashtags"
          value={hashtags}
          onChange={handleHashtags}
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
