import logo from "../images/logo.jpg";


function Header() {
  return (
    <header className="header">
      <a
        className="header__brand"
        href="./"
        title="Click to return to the homepage"
      >
        <img
          className="header__companyLogo"
          src="./images/laptop-code-solid.svg"
          alt="My Bookshelf Logo"
        />
        <h1 className="header__title">My Virtual Bookshelf</h1>
      </a>
      <img className="logoSponsor" src={logo} alt="My Bookshelf Logo" />
    </header>
  );
}

export default Header;
