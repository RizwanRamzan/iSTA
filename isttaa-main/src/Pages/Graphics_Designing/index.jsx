import React from "react";
import "./graphics_designing.scss";
import Wrapper from "../../common/Wrapper";
import { ContentGraphicsDesigning } from "./constant";
import Footer from "../../Component/footer";

const Graphics_designing = () => {
  return (
    <>
      <Wrapper>
        <h1> Art & Design </h1>
      </Wrapper>

      <div className="graphics__designing">
        <div className="full_stack_designing_content">
          <div className="full_stack_designing_top">
            <div className="full_stack_designing_top_content">
              <div className="full_stack_designing_top_left">
                <h1> Graphics & Designing </h1>
              </div>
              <div className="full_stack_designing_top_right">
                <h4> ZERO TO MASTERY </h4>
                <p> Duration: 06 Months </p>
              </div>
            </div>
            <hr />
            <p>
              "Discover your design journey at isttaa Institute with our Graphic
              Designing & UI UX Design Course. Gain skills in visual
              communication, UI/UX principles, and software tools to excel in
              modern design challenges."
            </p>
          </div>

          <div className="table_content">
            <div className="table_head">
              <h2> Modules </h2>
              <p> Classes: 48 </p>
            </div>

            <div className="contents">
              {ContentGraphicsDesigning.map((el) => (
                <>
                  <div className="page_num">
                    <p> {el.title} </p>
                    <p> {el.num} </p>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="text">
            <p>
              The Institute Can Change Course Details, Fees, Schedules, Venues,
              Faculty, And More As Needed To Stay Current.
            </p>
          </div>

          <div className="total_fees">
            <h1> Total Fees </h1>
            <h1> Rs.48,000/- </h1>
          </div>

          <button className="btn_pay_now"> Pay Now </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Graphics_designing;
