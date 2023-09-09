import React from "react";
import "./exploreBrowser.scss";
import {
  Explore_Ai,
  Explore_html,
  Explore_office,
  Explore_voice,
} from "../../assets";

const ExploreBrowser = () => {
  return (
    <>
      <div className="exploreBrowser">
        <div className="exploreBrowser__content">
          <h1>
            Explore a Wide Range of Course Categories Available for Browsing
          </h1>
          <div className="exploreBrowser__content__cards">
            <div className="exploreBrowser__content__card">
              <div className="img">
                <img src={Explore_office} alt="" />
              </div>
              <button className="ms-office"> MS Office </button>
            </div>
            <div className="exploreBrowser__content__card">
              <div className="img">
                <img src={Explore_voice} alt="" />
              </div>
              <button className="ms-office"> Spoken English </button>
            </div>
            <div className="exploreBrowser__content__card">
              <div className="img">
                <img src={Explore_Ai} alt="" />
              </div>
              <button className="ms-office"> Adobe Illustrator </button>
            </div>
            <div className="exploreBrowser__content__card">
              <div className="img">
                <img src={Explore_html} alt="" />
              </div>
              <button className="ms-office"> HTML / CSS </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreBrowser;
