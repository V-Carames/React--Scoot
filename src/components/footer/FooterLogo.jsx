import { Link } from "react-router-dom";
import Logo from "/src/assets/logos/logo-light.svg";

function FooterLogo() {
  return (
    <Link className="footer-logo" to="/" aria-label="Home - Scoot">
      <img className="footer-logo__image" src={Logo} alt="" />
    </Link>
  );
}

export default FooterLogo;
