import { Link } from 'react-router-dom'; 

function Footer() {
  return (
    <footer className="footer">
      <Link
        className="header__brand"
        to="/"
        title="Click to return to the homepage"
      >
      <img
        className="logoSponsor"
        src="/images/laptop-code-solid.svg"
        alt="My Bookshelf Logo"
      />
      </Link>
    </footer>
  );
}

export default Footer;
