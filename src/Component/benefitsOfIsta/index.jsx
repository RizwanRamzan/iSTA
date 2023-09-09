import React from "react";
import "./benefitsOfIsta.scss";
import { BenefitCards } from "./constant";

const BenefitsOfIsta = () => {
  return (
    <>
      <div className="benefitsOfIsta">
        <h1> Benefits Of Learning With iSTA </h1>
        <div className="benefits_content">
          {BenefitCards.map((el) => (
            <>
              <div className="benefit_card">
                <img src={el.img} alt="" />
                <h4> {el.title} </h4>
                <p> {el.desc} </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default BenefitsOfIsta;
