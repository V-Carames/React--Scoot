import React from "react";

const BenefitBlock = ({ className, image, heading, text, link, linkText }) => {
  return (
    <div className={`benefits-block ${className || ""}`}>
      {image && <img className="benefits-block__img" src={image} alt="" />}
      <div className="benefits-block__content">
        <h3 className="benefits-block__heading">{heading}</h3>
        <p className="benefits-block__text">{text}</p>
        <a href={link} className="benefits-block__btn button">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default BenefitBlock;
