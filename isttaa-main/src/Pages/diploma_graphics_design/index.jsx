import React from "react";
import "./diploma_graphics_design.scss";
import Wrapper from "../../common/Wrapper";
import { Semester1 } from "./constant";
import Footer from "../../Component/footer";

const Diploma_Graphics_Design = () => {
  return (
    <>
      <Wrapper>
        <h1> 1 Year Diploma Certification </h1>
      </Wrapper>

      <div className="diploma_graphics_design">
        <div className="diploma_graphics_design_content">
          <div className="diploma_graphics_design_top">
            <div className="diploma_graphics_design_top_content">
              <div className="diploma_graphics_design_top_left">
                <h1> Diploma In Graphic Design </h1>
              </div>
              <div className="diploma_graphics_design_top_right">
                <h4> ZERO TO MASTERY </h4>
                <p> Duration: 1 Year | Semester 4 </p>
              </div>
            </div>
            <hr />
            <p>
              The Ista Graphic Design Diploma Offers A Strong Foundation For
              Careers In Client-based Design And Encourages Personal Creative
              Development. The Program Focuses On Teaching Industry-standard
              Visual And Cognitive Skills To Meet The Demands Of The Creative
              World While Respecting Socio-cultural Identity.
            </p>
          </div>

          <div className="tables">
            {Semester1.map((el) => (
              <>
                <div className="diploma_graphics_design_table_content">
                  <div className="table_head">
                    <h2> {el.semester} </h2>
                    <p> Classes: 24 </p>
                  </div>

                  <div className="contents">
                    {el.content.map((item) => (
                      <>
                        <div className="page_num">
                          <p> {item.title} </p>
                          <p> {item.num} </p>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="text">
            <p>
              The Institute Can Change Course Details, Fees, Schedules, Venues,
              Faculty, And More As Needed To Stay Current.
            </p>
          </div>

          <div className="total_fees">
            <h1> Total Fees </h1>
            <h1> Rs.96,000/- </h1>
          </div>

          <button className="btn_pay_now"> Pay Now </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Diploma_Graphics_Design;
