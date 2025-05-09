import { Link } from "react-router-dom";

function FooterNav() {
  return (
    <nav className="footer-nav">
      <ul className="footer-nav__list">
        <li className="footer-nav__item">
          <Link to="/about" className="footer-nav__link">
            About
          </Link>
        </li>
        <li className="footer-nav__item">
          <Link to="/location" className="footer-nav__link">
            Location
          </Link>
        </li>
        <li className="footer-nav__item">
          <Link to="/careers" className="footer-nav__link">
            Careers
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
