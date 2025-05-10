import IntroBlock from "../components/blocks/IntroBlock";
import BenefitBlock from "../components/blocks/BenefitBlock";
import BenefitsImgFour from "/src/assets/images/digital-era.jpg";
import BenefitsImgFive from "/src/assets/images/better-living.jpg";
import Values from "../sections/home/Values";

function About() {
  return (
    <>
      <IntroBlock className="intro-block--about" heading="About" />
      <section className="benefits-section">
        <h2 className="visually-hidden">Benefits of Using Scoot</h2>
        <div className="benefits-section__pattern benefits-section__pattern--four">
          <BenefitBlock
            image={BenefitsImgFour}
            heading="Mobility for the digital era"
            text=" Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
            link=""
            linkText=""
          />
        </div>

        <div className="benefits-section__pattern benefits-section__pattern--five">
          <BenefitBlock
            className="benefits-block--alt"
            image={BenefitsImgFive}
            heading="Better urban living"
            text="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
            link=""
            linkText=""
          />
        </div>
      </section>
      <Values />
    </>
  );
}

export default About;
