import React from "react";
import "./development.scss";
import Wrapper from "../../common/Wrapper";
import { Buttons, DoubleCards, SingleCards } from "../Art_and_design/constant";
import Footer from "../../Component/footer";
import { DoubleCardsDevelopment, SingleCardsDevelopment } from "./constant";

const Development = () => {
  return (
    <>
      <Wrapper>
        <h1> Development </h1>
      </Wrapper>
      <div className="development">
        <div className="art_and_design_content">
          <div className="buttons">
            {Buttons.map((el) => (
              <button className="art_btn"> {el.button} </button>
            ))}
          </div>

          <div className="art_and_design_single_cards">
            {SingleCardsDevelopment.map((el) => (
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

          <div className="art_and_design_double_cards">
            {DoubleCardsDevelopment.map((el) => (
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
      </div>

      <Footer />
    </>
  );
};

export default Development;
