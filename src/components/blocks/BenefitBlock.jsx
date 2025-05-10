import React from "react";
import { Link } from "react-router-dom";

const BenefitBlock = ({
  className = "",
  image,
  heading,
  text,
  link,
  linkText,
}) => {
  return (
    <div className={`benefits-block ${className}`}>
      {image && <img className="benefits-block__img" src={image} alt="" />}
      <div className="benefits-block__content">
        <h3 className="benefits-block__heading">{heading}</h3>
        <p className="benefits-block__text">{text}</p>

        {link && linkText && (
          <Link to={link} className="benefits-block__btn button">
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default BenefitBlock;
