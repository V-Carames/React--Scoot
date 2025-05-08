import React from "react";

const BenefitBlock = ({ image, heading, text, link, linkText }) => {
  return (
    <div className="benefits-block__content">
      {image && <img className="benefits-block__img" src={image} alt="" />}
      <h3 className="benefits-block__heading">{heading}</h3>
      <p className="benefits-block__text">{text}</p>
      <a href={link} className="benefits-block__btn button">
        {linkText}
      </a>
    </div>
  );
};

export default BenefitBlock;
