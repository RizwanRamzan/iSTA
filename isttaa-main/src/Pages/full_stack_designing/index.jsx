import React from "react";
import Wrapper from "../../common/Wrapper";
import Art_and_design_Top from "../../common/Wrapper/art_design_top";
import "./full_stack_designing.scss";
import { Content } from "./constant";
import Footer from "../../Component/footer";

const Full_stack_designing = () => {
  return (
    <>
      <Wrapper>
        <h1> Art & Design </h1>
      </Wrapper>

      <div className="full_stack_designing">
        <div className="full_stack_designing_content">
          <div className="full_stack_designing_top">
            <div className="full_stack_designing_top_content">
              <div className="full_stack_designing_top_left">
                <h1> Full Stack Designing </h1>
              </div>
              <div className="full_stack_designing_top_right">
                <h4> ZERO TO MASTERY </h4>
                <p> Duration: 08 Months </p>
              </div>
            </div>
            <hr />
            <p>
              "At iSTA Institute, we offer a dynamic Full Stack Graphic
              Designing Course that covers essential design principles,
              industry-standard software proficiency, UI/UX expertise, and
              portfolio development. Our program prepares students for a wide
              range of design opportunities and nurtures their creative growth."
            </p>
          </div>

          <div className="table_content">
            <div className="table_head">
              <h2> Modules </h2>
              <p> Classes: 64 </p>
            </div>

            <div className="contents">
              {Content.map((el) => (
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
            <h1> Rs.64,000/- </h1>
          </div>

          <button className="btn_pay_now"> Pay Now </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Full_stack_designing;
