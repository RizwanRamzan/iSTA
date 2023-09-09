import React from "react";
import "./graphics_design.scss";
import {
  Arrow_right,
  art_design10,
  art_design11,
  art_design12,
  art_design13,
} from "../../../assets";
import { Explore_Graphics } from "./constant";
import Footer from "../../Layout/Footer";

const Graphics_Design = () => {
  return (
    <>
      <div className="graphics_design_head">
        <h1> Graphics & Design </h1>
      </div>

      <div className="most__popular__graphics">
        <div className="most__popular__graphics__content">
          <h2> Most popular in Graphics & Design </h2>
          <div className="most__popular__graphics__cards">
            <div className="most__popular__graphics__card">
              <img src={art_design10} alt="" />
              <h3> Logo Design </h3>
            </div>
            <div className="most__popular__graphics__card">
              <img src={art_design11} alt="" />
              <h3> Web & App Design </h3>
            </div>
            <div className="most__popular__graphics__card">
              <img src={art_design12} alt="" />
              <h3> Post Design </h3>
            </div>
            <div className="most__popular__graphics__card">
              <img src={art_design13} alt="" />
              <h3> Print Design </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="explore_graphics_design">
        <div className="explore_graphics_design_content">
          <h1> Explore Graphics & Design </h1>
          <div className="explore_graphics_design_cards">
            {Explore_Graphics.map((el) => (
              <>
                <div className="explore_graphics_design_card">
                  <div className="top">
                    <img src={el.img} alt="" />
                  </div>
                  <div className="bottom">
                    <div className="list">
                      <h3> {el.title} </h3>
                      <ul>
                        <li> {el.item1} </li>
                        <li> {el.item2} </li>
                        <li> {el.item3} </li>
                        <li> {el.item4} </li>
                        <li> {el.item5} </li>
                      </ul>
                    </div>
                    <img src={Arrow_right} alt="" className="arrow" />
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

export default Graphics_Design;
