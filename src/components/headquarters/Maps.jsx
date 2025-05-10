import MobileImg from "/src/assets/illustrations/world-map-mobile.png";
import TabletImg from "/src/assets/illustrations/world-map-tablet.png";
import DesktopImg from "/src/assets/illustrations/world-map-desktop.png";

function Maps() {
  return (
    <picture className="locations__map">
      <source media="(min-width: 73.44rem)" srcSet={DesktopImg} />
      <source media="(min-width: 43.75rem)" srcSet={TabletImg} />
      <img className="locations__map-image" src={MobileImg} alt="" />
    </picture>
  );
}

export default Maps;
