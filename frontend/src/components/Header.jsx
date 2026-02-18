import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header className="header">
      <Link
        className="header__brand"
        to="/"
        title="Click to return to the homepage"
      >
        <img
          className="header__companyLogo"
          src="/images/laptop-code-solid.svg"
          alt="My Bookshelf Logo"
        />
        <h1 className="header__title">My Virtual Bookshelf</h1>
      </Link>
    </header>
  );
}

export default Header;

