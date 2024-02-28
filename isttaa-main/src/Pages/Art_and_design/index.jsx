import React from "react";
import Wrapper from "../../common/Wrapper";
import { Buttons, DoubleCards, SingleCards } from "./constant";
import { art_design1 } from "../../assets";
import "./art_and_design.scss";
import Footer from "../../Component/Layout/Footer";

const ArtAndDesign = () => {
  return (
    <>
      <Wrapper>
        <h1> Art and Design </h1>
      </Wrapper>

      <div className="art_and_design">
        <div className="art_and_design_content">
          <div className="buttons">
            {Buttons.map((el) => (
              <button className="art_btn"> {el.button} </button>
            ))}
          </div>

          <div className="art_and_design_single_cards">
            {SingleCards.map((el) => (
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
      </div>

      <Footer />
    </>
  );
};

export default ArtAndDesign;
