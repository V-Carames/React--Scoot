import IntroBlock from "../components/blocks/IntroBlock";
import Headquarters from "../sections/Headquarters";
import NotListed from "../sections/NotListed";

function Locations() {
  return (
    <>
      <IntroBlock className="intro-block--locations" heading="Locations" />
      <Headquarters />
      <NotListed />
    </>
  );
}

export default Locations;
