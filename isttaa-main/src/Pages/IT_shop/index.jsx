import React from "react";
import "./it_shop.scss";
import { It_shop } from "../../assets";
import It_Shop_new_Carrer from "../../Component/IT_Shop_com/it_shop_newCarrer";
import It_Shop_Categories from "../../Component/IT_Shop_com/It_Shop_Categories";
import Most_Demanded_Products from "../../Component/IT_Shop_com/most_demanded_products";
import IT_Connect_now from "../../Component/IT_Shop_com/it_connect_now";
import IT_Our__Client from "../../Component/IT_Shop_com/IT_solution_our_client";
import IT_Verification from "../../Component/IT_Shop_com/it_verification";
import Footer from "../../Component/footer/index";

const IT_Shop = () => {
  return (
    <>
      <div className="it_shop_wrapper">
        <div className="it_shop">
          <div className="it_shop_left">
            <h1>
              Your Source for <br />
              IT Accessories
            </h1>
            <p> Services </p>
            <div className="it_shop__buttons">
              <button>Laptop</button>
              <button>Computer</button>
              <button>Mobile</button>
            </div>
            <p className="it_shop_text">
              "Welcome to TechEssentials! Your Ultimate Destination for IT
              Accessories. Discover a Wide Range of High-Quality Products. From
              cables to gadgets, we've got you covered. Elevate your tech
              experience with us!"
            </p>
          </div>
          <div className="it_shop_right">
            <img src={It_shop} alt="" />
          </div>
        </div>
        <It_Shop_new_Carrer />
        <It_Shop_Categories />
        <Most_Demanded_Products />
        <IT_Connect_now />
        <IT_Our__Client />
        <IT_Verification />
        <Footer />
      </div>
    </>
  );
};

export default IT_Shop;
