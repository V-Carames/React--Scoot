import IntroBlock from "../components/blocks/IntroBlock";
import BenefitBlock from "../components/blocks/BenefitBlock";
import BenefitsImgSix from "/src/assets/images/join-us.jpg";

function Careers() {
  return (
    <>
      <IntroBlock className="intro-block--careers" heading="Careers" />
      <section className="benefits-section ">
        <h2 className="visually-hidden">Join Us</h2>
        <div className="benefits-section__pattern benefits-section__pattern--six">
          <BenefitBlock
            image={BenefitsImgSix}
            heading="Care to join our mission?"
            text=" We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
            link="/"
            linkText="Say Hello"
          />
        </div>
      </section>
    </>
  );
}

export default Careers;
