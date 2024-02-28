import React from "react";
import "./laptop.scss";
import { DoubleCards } from "../../../Pages/Art_and_design/constant";
import Footer from "../../Layout/Footer";

const Laptop = () => {
  return (
    <>
      <div className="head">
        <h1> Laptops </h1>
      </div>

      <div className="laptops__cards__content">
        <div className="art_and_design_double_cards">
          {DoubleCards.map((el) => (
            <>
              <div className="art_and_design_single_card">
                <div className="title">
                  <h2> {el.title} </h2>
                  <p> {el.duration} </p>
                </div>
                <div className="img">
                  <img src={el.img} alt="" />
                </div>
                <div className="card_btns">
                  <button className="left_btn">{el.leftBtn}</button>
                  <button className="right_btn">{el.rightBtn}</button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Laptop;
