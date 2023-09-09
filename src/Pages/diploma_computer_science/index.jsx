import React from "react";
import "./diploma_CS.scss";
import Wrapper from "../../common/Wrapper";
import { Semester1 } from "./constant";
import Footer from "../../Component/footer";

const Diploma_Computer_Science = () => {
  return (
    <>
      <Wrapper>
        <h1> 1 Year Diploma Certification </h1>
      </Wrapper>

      <div className="diploma_computer_science">
        <div className="diploma_computer_science_content">
          <div className="diploma_computer_science_top">
            <div className="diploma_computer_science_top_content">
              <div className="diploma_computer_science_top_left">
                <h1> Diploma In Computer Science </h1>
              </div>
              <div className="diploma_computer_science_top_right">
                <h4> ZERO TO MASTERY </h4>
                <p> Duration: 1 Year | Semester 4 </p>
              </div>
            </div>
            <hr />
            <p>
              iSTA's Computer Science Diploma Program Focuses On Providing
              Students With A Wide-ranging And Solid Understanding Of The
              Subject. They Offer Courses In Cyber Security, Data Science, And
              More. The Faculty Is Exceptional And Helps Students Comprehend How
              Technology Impacts Individuals, Organizations, And Society. They
              Also Work On Enhancing Students' Technical And Soft Skills, Which
              Are Crucial For A Successful Professional Career.
            </p>
          </div>

          <div className="tables">
            {Semester1.map((el) => (
              <>
                <div className="diploma_computer_science_table_content">
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

export default Diploma_Computer_Science;
