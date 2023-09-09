import React from "react";
import "./Services_Categories.scss";
import { Ista_sol_Dev, Ista_sol_Market, Ista_sol_Pen } from "../../../assets";
import { useNavigate } from "react-router-dom";

const Services_Categories = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="Services_Categories">
        <div className="Services_Categories_content">
          <h2> Services Categories </h2>
          <div className="Services_Categories_cards">
            <div
              className="Services_Categories_card"
              onClick={() => navigate("/graphics-design")}
            >
              <img src={Ista_sol_Pen} alt="" />
              <h2> Graphics & Design </h2>
            </div>
            <div className="Services_Categories_card">
              <img src={Ista_sol_Dev} alt="" />
              <h2> Development </h2>
            </div>
            <div className="Services_Categories_card">
              <img src={Ista_sol_Market} alt="" />
              <h2> Digital Marketing </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services_Categories;
