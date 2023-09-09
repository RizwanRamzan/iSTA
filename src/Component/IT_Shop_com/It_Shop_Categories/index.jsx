import React from "react";
import "./it_shop_Categories.scss";
import { Laptop, Mobile, System } from "../../../assets";
import { useNavigate } from "react-router-dom";

const It_Shop_Categories = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="it_shop_Categories">
        <div className="it_shop_Categories_content">
          <h2> Categories </h2>
          <div className="it_shop_Categories_cards">
            <div
              className="it_shop_Categories_card"
              onClick={() => navigate("/laptop")}
            >
              <div className="img">
                <img src={Laptop} alt="" />
              </div>
              <h2> Laptop </h2>
            </div>
            <div className="it_shop_Categories_card">
              <div className="img">
                <img src={System} alt="" />
              </div>
              <h2> Computer </h2>
            </div>
            <div className="it_shop_Categories_card">
              <div className="img">
                <img src={Mobile} alt="" style={{ width: "60px" }} />
              </div>
              <h2> Mobile </h2>
            </div>
          </div>

          <button className="all-it"> All IT Accessories </button>
        </div>
      </div>
    </>
  );
};

export default It_Shop_Categories;
