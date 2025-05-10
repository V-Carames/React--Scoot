function Cities() {
  return (
    <ul className="locations__list">
      <li className="locations__item locations__item--new-york">
        <h3 className="locations__city locations__city--new-york">New York</h3>
      </li>
      <li className="locations__item locations__item--london">
        <h3 className="locations__city locations__city--london">London</h3>
      </li>
      <li className="locations__item locations__item--jakarta">
        <h3 className="locations__city locations__city--jakarta">Jakarta</h3>
      </li>
      <li className="locations__item locations__item--yokohama">
        <h3 className="locations__city locations__city--yokohama">Yokohama</h3>
      </li>
    </ul>
  );
}

export default Cities;
