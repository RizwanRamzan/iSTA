import React from "react";
import "./categories.scss";
import { Card } from "./constant";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="categories">
        <h3> Categories </h3>
        <h1> Most Demanded Courses </h1>
        <div className="categories_cards">
          {Card.map((el) => (
            <>
              <div className="card">
                <div className="card_content">
                  <div className="categories_top">
                    <div className="categories_top_left">{el.title}</div>
                    <div className="categories_top_right">
                      <img src={el.icon} alt="" />
                    </div>
                  </div>
                  <hr />
                  <div className="categories_bottom">
                    <h5> {el.courses} </h5>
                    <p> {el.desc} </p>
                  </div>
                </div>
                <button className="explore" onClick={() => navigate(el.url)}>
                  Explore
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
