import BenefitBlock from "../components/BenefitBlock";
import BenefitsImgOne from "/src/assets/images/telemetry.jpg";
import BenefitsImgTwo from "/src/assets/images/near-you.jpg";
import BenefitsImgThree from "/src/assets/images/payments.jpg";

function Benefits() {
  return (
    <section className="benefits__section">
      <h2 className="visually-hidden">Why Use Sccot?</h2>
      <div className="benefits-section__pattern benefits-section__pattern--one">
        <div className="">
          <BenefitBlock
            image={BenefitsImgOne}
            heading="Zero hassle payments"
            text="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
            link="/"
            linkText="Learn More"
          />
        </div>

        <div className="benefits-section__pattern benefits-section__pattern--two">
          <BenefitBlock
            image={BenefitsImgTwo}
            heading="Coming to a city near you"
            text="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
            link="/"
            linkText="Learn More"
          />
        </div>

        <div className="benefits-section__pattern benefits-section__pattern--three">
          <BenefitBlock
            image={BenefitsImgThree}
            heading="Zero hassle payments"
            text="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
            link="/"
            linkText="Learn More"
          />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
