import React from "react";
import "./uiux.scss";
import { ContentUIUX } from "./constant";
import Wrapper from "../../common/Wrapper";
import Footer from "../../Component/footer";

const UiUx_designing = () => {
  return (
    <>
      <Wrapper>
        <h1> Art & Design </h1>
      </Wrapper>

      <div className="UIUX__designing">
        <div className="full_stack_designing_content">
          <div className="full_stack_designing_top">
            <div className="full_stack_designing_top_content">
              <div className="full_stack_designing_top_left">
                <h1> UI UX Designing </h1>
              </div>
              <div className="full_stack_designing_top_right">
                <h4> Basic </h4>
                <p> Duration: 02 Months </p>
              </div>
            </div>
            <hr />
            <p>
              "Embark on a transformative design journey with isttaa Institute's
              UI UX Designing Course. Learn user-centered design principles,
              wireframing, prototyping, and interactive design skills to create
              exceptional digital experiences."
            </p>
          </div>

          <div className="table_content">
            <div className="table_head">
              <h2> Modules </h2>
              <p> Classes: 16 </p>
            </div>

            <div className="contents">
              {ContentUIUX.map((el) => (
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

export default UiUx_designing;
