import React from "react";
import "./popular_services.scss";
import { Popular } from "./constant";

const Popular_services = () => {
  return (
    <>
      <div className="popular_services">
        <div className="popular_services_content">
          <h1> Popular Services </h1>
          <div className="popular_services_content_cards">
            {Popular.map((el) => (
              <>
                <div className="popular_services_content_card">
                  <div className="top">
                    <p> {el.title} </p>
                    <img src={el.img} alt="" />
                  </div>
                  <button className="popular_btn"> {el.btn} </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular_services;
