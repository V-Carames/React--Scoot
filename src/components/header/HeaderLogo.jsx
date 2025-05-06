import { Link } from "react-router-dom";
import Logo from "/src/assets/logos/logo.svg";

function HeaderLogo() {
  return (
    <Link className="header__logo" to="/" aria-label="Home - Scoot">
      <img src={Logo} alt="" />
    </Link>
  );
}

export default HeaderLogo;
