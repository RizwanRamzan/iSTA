import React from "react";
import "./verification.scss";

const Verification = () => {
  return (
    <>
      <div className="verification">
        <div className="verification__content">
          <p> Verification </p>
          <h1> Check The Verification Of Your Certified From iSTA </h1>
          <div className="input_group">
            <input type="text" placeholder="Enter Your Certificate ID" />
            <button className="verify"> Verify </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
