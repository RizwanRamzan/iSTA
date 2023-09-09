import React from "react";
import "./solution_frelancer.scss";
import Footer from "../../Layout/Footer";

const Solution_Freelancer = () => {
  return (
    <>
      <div className="freelancer_head">
        <h1> Apply as a freelancer </h1>
      </div>

      <div className="solution__freelancer">
        <div className="solution__freelancer__content">
          <h1>
            Apply Now to Join the Leading Talent Network at iSTA Solutions
          </h1>

          <div className="first__four">
            <div className="inputs__group">
              <label> Name </label>
              <input type="text" />
            </div>
            <div className="inputs__group">
              <label> CNIC </label>
              <input type="text" />
            </div>
            <div className="inputs__group">
              <label> Email </label>
              <input type="email" />
            </div>
            <div className="inputs__group">
              <label> Phone </label>
              <input type="phone" />
            </div>
          </div>

          <div className="inputs__group_single">
            <label> I’m applying as a... </label>
            <input type="text" />
          </div>

          <div className="secound__two">
            <div className="inputs__group">
              <label> Why do you want to work at iSTA Solutions? </label>
              <input type="text" />
            </div>
            <div className="inputs__group">
              <label>
                {" "}
                How do you believe your experience can benefit our company?{" "}
              </label>
              <input type="text" />
            </div>
          </div>

          <div className="inputs__group_single">
            <label> Upload Your Resume/CV: </label>
            <input type="text" />
          </div>
        </div>
        <button className="submit"> Submit </button>
      </div>

      <p className="text_note">
        Thank you for your interest in becoming a freelancer at iSTA Solutions.
        We will review your application and be in touch shortly.
      </p>

      <Footer />
    </>
  );
};

export default Solution_Freelancer;
