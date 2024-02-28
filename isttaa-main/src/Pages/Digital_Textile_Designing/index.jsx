import React from "react";
import "./Digital_Textile_Designing.scss";
import Wrapper from "../../common/Wrapper";
import { ContentDigital } from "./constant";

const Digital_Textile_Designing = () => {
  return (
    <>
      <Wrapper>
        <h1> Art & Design </h1>
      </Wrapper>

      <div className="digital_textile_designing">
        <div className="full_stack_designing_content">
          <div className="full_stack_designing_top">
            <div className="full_stack_designing_top_content">
              <div className="full_stack_designing_top_left">
                <h1> Digital Textile Designing </h1>
              </div>
              <div className="full_stack_designing_top_right">
                <h4> Basic </h4>
                <p> Duration: 02 Months </p>
              </div>
            </div>
            <hr />
            <p>
              "Discover your path to becoming a digital textile design virtuoso
              through isttaa Institute's specialized course. Uncover the realm of
              digital tools, techniques, and creative processes, and bring your
              artistic vision to life on fabric. Elevate your skills with isttaa
              Institute and flourish in the world of textile innovation."
            </p>
          </div>

          <div className="table_content">
            <div className="table_head">
              <h2> Modules </h2>
              <p> Classes: 48 </p>
            </div>

            <div className="contents">
              {ContentDigital.map((el) => (
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
            <h1> Rs.16,000/- </h1>
          </div>

          <button className="btn_pay_now"> Pay Now </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Digital_Textile_Designing;
