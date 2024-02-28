import React from "react";
import "./Adobe_photoshop.scss";
import Wrapper from "../../common/Wrapper";
import { ContentAdobePhotoshop } from "./constant";
import Footer from "../../Component/footer";

const Adobe_Photoshop = () => {
  return (
    <>
      <Wrapper>
        <h1> Art & Design </h1>
      </Wrapper>

      <div className="adobe_Photoshop">
        <div className="full_stack_designing_content">
          <div className="full_stack_designing_top">
            <div className="full_stack_designing_top_content">
              <div className="full_stack_designing_top_left">
                <h1> Adobe Photoshop </h1>
              </div>
              <div className="full_stack_designing_top_right">
                <h4> Basic </h4>
                <p> Duration: 02 Months </p>
              </div>
            </div>
            <hr />
            <p>
              "Unlock your creative potential with isttaa Institute's Adobe
              Photoshop Course. Learn photo editing, digital artistry, and
              graphic design using the industry-standard software."
            </p>
          </div>

          <div className="table_content">
            <div className="table_head">
              <h2> Modules </h2>
              <p> Classes: 16 </p>
            </div>

            <div className="contents">
              {ContentAdobePhotoshop.map((el) => (
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

export default Adobe_Photoshop;
