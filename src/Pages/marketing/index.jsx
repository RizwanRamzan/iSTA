import React from "react";
import "./marketing.scss";
import Wrapper from "../../common/Wrapper";
import {
  Buttons,
  DoubleCardsMarketing,
  SingleCardsMarketing,
} from "./constant";
import Footer from "../../Component/footer";

const Marketing = () => {
  return (
    <>
      <Wrapper>
        <h1> Marketing </h1>
      </Wrapper>
      <div className="marketing">
        <div className="art_and_design_content">
          <div className="buttons">
            {Buttons.map((el) => (
              <button className="art_btn"> {el.button} </button>
            ))}
          </div>

          <div className="art_and_design_single_cards">
            {SingleCardsMarketing.map((el) => (
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
            {DoubleCardsMarketing.map((el) => (
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

export default Marketing;
