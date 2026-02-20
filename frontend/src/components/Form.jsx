import { useNavigate } from "react-router-dom";
import React from "react";

function Form(props) {
  const { bookData, setBookData, onReset } = props;
  const navigate = useNavigate();

  const handleChange = (key) => (e) => {
    setBookData({ ...bookData, [key]: e.target.value });
  };

  const handleBookImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setBookData({ ...bookData, bookImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleAuthorImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setBookData({ ...bookData, authorImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    try {
      const payload = {
        title: bookData.title,
        author: bookData.author,
        editorial: bookData.editorial,
        reviews: bookData.reviews,
        genre: bookData.genre,
        synopsis: bookData.synopsis,
        nacionality: bookData.nacionality
      };

      const response = await fetch("http://localhost:4000/api/libros", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Request failed");

      const savedBook = await response.json();

      navigate(`/preview/${savedBook.id}`);
    } catch (error) {
      console.error(error);
      alert("Could not save the book. Make sure the backend is running.");
    }
  };

  return (
    <form className="addForm" onSubmit={(e) => e.preventDefault()}>
      <h2 className="title">Information</h2>

      <fieldset className="addForm__group">
        <legend className="addForm__title">My Virtual Bookshelf</legend>

        <input
          className="addForm__input"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={bookData.title}
          onChange={handleChange("title")}
        />

        <input
          className="addForm__input"
          type="text"
          name="author"
          id="author"
          placeholder="Author"
          value={bookData.author}
          onChange={handleChange("author")}
        />

        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="text"
            name="editorial"
            id="editorial"
            placeholder="Editorial"
            value={bookData.editorial}
            onChange={handleChange("editorial")}
          />

          <input
            className="addForm__input"
            type="text"
            name="reviews"
            id="reviews"
            placeholder="Book review"
            value={bookData.reviews}
            onChange={handleChange("reviews")}
          />
        </div>

        <input
          className="addForm__input"
          type="text"
          name="genre"
          id="genre"
          placeholder="Genre"
          value={bookData.genre}
          onChange={handleChange("genre")}
        />

        <textarea
          className="addForm__input"
          name="synopsis"
          id="synopsis"
          placeholder="Synopsis"
          rows="5"
          value={bookData.synopsis}
          onChange={handleChange("synopsis")}
        />
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Author information</legend>

        <input
          className="addForm__input"
          type="text"
          name="otherBooks"
          id="otherBooks"
          placeholder="Other books (not saved yet)"
          value={bookData.otherBooks}
          onChange={handleChange("otherBooks")}
        />

        <input
          className="addForm__input"
          type="text"
          name="nacionality"
          id="nacionality"
          placeholder="Nacionality"
          value={bookData.nacionality}
          onChange={handleChange("nacionality")}
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <label htmlFor="image" className="button">
          Upload photo of the book (not saved yet)
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={handleBookImage}
        />

        <label htmlFor="photo" className="button">
          Upload author's photo (not saved yet)
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="photo"
          id="photo"
          accept="image/*"
          onChange={handleAuthorImage}
        />

        <button className="button--large" type="button" onClick={handleSave}>
          Save book
        </button>

        <button className="button--large" type="button" onClick={onReset}>
          New book
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
