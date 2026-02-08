function Form(props) {
  const {bookData, setBookData} = props;

  //Funciones manejadoras

  const handleTitle = (e) => {
setBookData ({...bookData, title: e.target.value}); 
  };

 const handleAuthor = (e) => {
    setBookData({...bookData, author: e.target.value});
  };

  const handleEditorial = (e) => {
    setBookData({...bookData, editorial: e.target.value});
  };

  const handleReviews = (e) => {
    setBookData({...bookData, reviews: e.target.value});
  };

  const handleGenre = (e) => {
    setBookData({...bookData, genre: e.target.value});
  };

  const handleSynopsis = (e) => {
    setBookData({...bookData, synopsis: e.target.value});
  };

  const handleOtherBooks = (e) => {
    setBookData({...bookData, otherBooks: e.target.value});
  };

  const handleNacionality = (e) => {
    setBookData({...bookData, nacionality: e.target.value});
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
          value={bookData.title}
          onChange={handleTitle}
        />
        <input
          className="addForm__input"
          type="text"
          name="author"
          id="author"
          placeholder="Author"
          value={bookData.author}
          onChange={handleAuthor}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="editorial"
            id="editorial"
            placeholder="Editorial"
            value={bookData.editorial}
            onChange={handleEditorial}
          />
          <input
            className="addForm__input"
            type="text"
            name="review"
            id="review"
            placeholder="Book review"
            value={bookData.reviews}
            onChange={handleReviews}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="genre"
          id="genre"
          placeholder="Genre"
          value={bookData.genre}
          onChange={handleGenre}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="synopsis"
          id="synopsis"
          placeholder="Synopsis"
          rows="5"
          value={bookData.synopsis}
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
          value={bookData.otherBooks}
          onChange={handleOtherBooks}
        />
        <input
          className="addForm__input"
          type="text"
          name="nacionality"
          id="nacionality"
          placeholder="Nacionality"
          value={bookData.nacionality}
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
