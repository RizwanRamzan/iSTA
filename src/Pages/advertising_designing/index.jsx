import React from "react";
import "./advertising.scss";
import Wrapper from "../../common/Wrapper";
import { ContentAdvertising } from "./constant";
import Footer from "../../Component/footer";

const Advertising_Designing = () => {
  return (
    <>
      <Wrapper>
        <h1> Art & Design </h1>
      </Wrapper>

      <div className="advertising_designing">
        <div className="full_stack_designing_content">
          <div className="full_stack_designing_top">
            <div className="full_stack_designing_top_content">
              <div className="full_stack_designing_top_left">
                <h1> Advertising Designing </h1>
              </div>
              <div className="full_stack_designing_top_right">
                <h4> Basic </h4>
                <p> Duration: 02 Months </p>
              </div>
            </div>
            <hr />
            <p>
              "Immerse yourself in the art of visual persuasion with iSTA
              Institute's Advertising Designing Course. From conceptualization
              to execution, learn to craft impactful and compelling
              advertisements that captivate audiences. Elevate your design
              prowess and embark on a dynamic journey into the world of
              advertising creativity with iSTA Institute."
            </p>
          </div>

          <div className="table_content">
            <div className="table_head">
              <h2> Modules </h2>
              <p> Classes: 16 </p>
            </div>

            <div className="contents">
              {ContentAdvertising.map((el) => (
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

export default Advertising_Designing;
