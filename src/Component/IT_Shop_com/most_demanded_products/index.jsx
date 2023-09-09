import React from "react";
import "./most_demanded_products.scss";
import { PopularDemand } from "./constant";

const Most_Demanded_Products = () => {
  return (
    <>
      <div className="popular_demand_services">
        <div className="popular_demand_services_content">
          <h1> Most Demanded Products </h1>
          <div className="popular_demand_services_content_cards">
            {PopularDemand.map((el) => (
              <>
                <div className="popular_demand_services_content_card">
                  <div className="top">
                    <img src={el.img} alt="" />
                    <p> {el.title} </p>
                  </div>
                  <button className="popular_demand_btn"> {el.btn} </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Most_Demanded_Products;
