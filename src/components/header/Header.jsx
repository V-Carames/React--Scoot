import { useEffect, useState } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header__container">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  );
}

export default Header;
