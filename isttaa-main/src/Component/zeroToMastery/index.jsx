import React from "react";
import "./zeroToMastery.scss";
import { Mastery } from "./constant";
import { useNavigate } from "react-router-dom";

const ZeroToMastery = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mastery">
        <div className="mastery_content">
          <h1> Zero to Mastery </h1>
          <div className="mastery_cards">
            {Mastery.map((el) => (
              <>
                <div className="mastery_card_wrapper">
                  <div className="mastery_card">
                    <h3> {el.title} </h3>
                    <p> {el.desc} </p>
                  </div>
                  <button
                    className="all_courses"
                    onClick={() => navigate(el.url)}
                  >
                    All Courses
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ZeroToMastery;
