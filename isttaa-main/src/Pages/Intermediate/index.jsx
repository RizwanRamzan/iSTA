import React from "react";
import "./Intermediate.scss";
import Wrapper from "../../common/Wrapper";
import { Buttons, SingleCardsIntermediat } from "./constant";
import Footer from "../../Component/footer";

const Intermediate = () => {
  return (
    <>
      <Wrapper>
        <h1> Intermediate </h1>
      </Wrapper>
      <div className="intermediate">
        <div className="art_and_design_content">
          <div className="buttons">
            {Buttons.map((el) => (
              <button className="art_btn"> {el.button} </button>
            ))}
          </div>

          <div className="art_and_design_single_cards">
            {SingleCardsIntermediat.map((el) => (
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

export default Intermediate;
