import AccordionOne from "../components/accordions/AccordionOne";
import AccordionTwo from "../components/accordions/AccordionTwo";

function Faqs() {
  return (
    <section className="faqs-section">
      <h2 className="faqs-section__heading">FAQs</h2>
      <AccordionOne />
      <AccordionTwo />
    </section>
  );
}

export default Faqs;
