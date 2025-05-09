import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";
import FooterSocial from "./FooterSocial";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <FooterLogo />
          <FooterNav />
        </div>
        <FooterSocial />
      </div>
    </footer>
  );
}

export default Footer;
