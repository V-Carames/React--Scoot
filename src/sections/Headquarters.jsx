import Cities from "../components/headquarters/Cities";
import Maps from "../components/headquarters/Maps";

function Headquarters() {
  return (
    <section className="headquarters-section">
      <h2 className="visually-hidden">Our Headquarters</h2>
      <Maps />
      <Cities />
    </section>
  );
}

export default Headquarters;
