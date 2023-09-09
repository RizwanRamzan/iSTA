import React from "react";
import "./ista_solution_packages.scss";
import { Clock, Share } from "../../../assets";
import Footer from "../../Layout/Footer";

const Ista_Packages = () => {
  return (
    <>
      <div className="ista__packages_head">
        <h1> Packages </h1>
      </div>

      <div className="ista__packages">
        <div className="ista__packages_cards">
          <div className="ista__packages_card">
            <div className="ista__packages_card_content">
              <div className="ista__packages_top">
                <h1> Basic Package </h1>
                <p> "Unlocking Essentials: The Basic Package for Your Needs"</p>
              </div>
              <hr className="line" />
              <div className="ista__packages_bottom">
                <h1> PKR 5000 </h1>
                <div className="delivery">
                  <div className="delivery_left">
                    <img src={Clock} alt="" />
                    <p> 2 Days Delivery</p>
                  </div>
                  <div className="delivery_right">
                    <img src={Share} alt="" />
                    <p> 4 Revisions</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="pay__now"> Pay Now </button>
          </div>
          <div className="ista__packages_card">
            <div className="ista__packages_card_content">
              <div className="ista__packages_top">
                <h1> Standard Package </h1>
                <p>
                  {" "}
                  "Elevate Your Experience: Discover More with Our Standard
                  Package"
                </p>
              </div>
              <hr className="line" />
              <div className="ista__packages_bottom">
                <h1> PKR 10,000 </h1>
                <div className="delivery">
                  <div className="delivery_left">
                    <img src={Clock} alt="" />
                    <p> 2 Days Delivery</p>
                  </div>
                  <div className="delivery_right">
                    <img src={Share} alt="" />
                    <p> 4 Revisions</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="pay__now"> Pay Now </button>
          </div>
          <div className="ista__packages_card">
            <div className="ista__packages_card_content">
              <div className="ista__packages_top">
                <h1> Premium Package </h1>
                <p> Unleash the Possibilities with Our Premium Package"</p>
              </div>
              <hr className="line" />
              <div className="ista__packages_bottom">
                <h1> PKR 15,000 </h1>
                <div className="delivery">
                  <div className="delivery_left">
                    <img src={Clock} alt="" />
                    <p> 2 Days Delivery</p>
                  </div>
                  <div className="delivery_right">
                    <img src={Share} alt="" />
                    <p> 4 Revisions</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="pay__now"> Pay Now </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Ista_Packages;
