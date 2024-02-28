import React from "react";
import "./ista_solutions.scss";
import { Ista_sol } from "../../assets";
import IstaSolutionsNewCarrer from "../../Component/ista-solutions-com/solution_newCarrer";
import Services_Categories from "../../Component/ista-solutions-com/Services_Categories";
import Popular_services from "../../Component/ista-solutions-com/popular_services";
import Connect_Now from "../../Component/ista-solutions-com/connect-now";
import Our__Client from "../../Component/ista-solutions-com/solution_our_client";
import Freelancer from "../../Component/ista-solutions-com/freelancer";
import Footer from "../../Component/footer";

const IstaSolutions = () => {
  return (
    <>
      <div className="ista_wrapper">
        <div className="ista">
          <div className="ista_left">
            <h1>
              Unlock the Ideal <br /> IT Service, Right Now!
            </h1>
            <p> Services </p>
            <div className="ista__buttons">
              <button>Graphics & Design</button>
              <button>Development</button>
              <button>Digital Marketing</button>
            </div>
            <p className="ista_text">
              "Discover Perfection: Our Ideal IT Service, Just for You! Embrace
              Innovation and Efficiency with Us. Unlock Limitless Possibilities,
              Right Here, Right Now! Experience Excellence in Software
              Solutions. Your IT Dreams Come True with Our Expert Team. Don't
              Wait, Act Now!"
            </p>
          </div>
          <div className="ista_right">
            <img src={Ista_sol} alt="" />
          </div>
        </div>
        <IstaSolutionsNewCarrer />
        <Services_Categories />
        <Popular_services />
        <Connect_Now />
        <Our__Client />
        <Freelancer />
        <Footer />
      </div>
    </>
  );
};

export default IstaSolutions;
