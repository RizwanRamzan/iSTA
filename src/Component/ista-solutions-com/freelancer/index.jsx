import React from "react";
import "./freelancer.scss";
import { Freelancer_img } from "../../../assets";

const Freelancer = () => {
  return (
    <>
      <div className="freelancer">
        <div className="freelancer_content">
          <div className="freelancer_content_left">
            <div className="freelancer_content_left_content">
              <h1> Apply as a freelancer </h1>
              <p>
                Embark on a rewarding freelance journey with us! As a part of
                our vibrant global network, you'll have access to a plethora of
                exciting projects across various industries. Show off your
                expertise as a writer, designer, developer, or any other skilled
                professional, while enjoying the flexibility of remote work.
                Collaborate with top-tier clients and expand your horizons in a
                supportive environment that values creativity and innovation.
                Take control of your career, set your own schedule, and achieve
                your aspirations with the guidance of our platform. Embrace the
                freelance lifestyle and apply now to join our diverse and
                talented community!
              </p>
              <button className="apply_now"> Apply Now </button>
            </div>
          </div>
          <div className="freelancer_content_right">
            <img src={Freelancer_img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Freelancer;
