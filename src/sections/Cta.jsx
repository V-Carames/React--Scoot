import { Link } from "react-router-dom";
import Apple from "/src/assets/icons/app-store.svg";
import Android from "/src/assets/icons/google-play.svg";

function Cta() {
  return (
    <section className="cta-section">
      <div className="cta-section__container">
        <h2 className="cta-section__heading">Sign up and Scoot off today</h2>
        <div className="cta-section__content">
          <Link
            className="cta-section__download download--apple"
            to="/"
            aria-label="Available in the AppStore"
          >
            <img className="" src={Apple} alt="" />
          </Link>
          <Link
            className="cta-section__download download--android"
            to="/"
            aria-label="Get it on GooglePlay"
          >
            <img src={Android} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cta;
