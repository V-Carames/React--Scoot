import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="intro-section intro-section--hero">
      <div className="intro-section__content intro-section__content--hero">
        <h1 className="intro-section__heading intro-section__heading--hero">
          Scooter sharing made simple
        </h1>
        <div className="intro-section__container">
          <p className="intro-section__text">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <Link href="/" className="intro-section__cta button">
            Get Scootin
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
