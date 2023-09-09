import React from "react";
import "./it_verification.scss";

const IT_Verification = () => {
  return (
    <>
      <div className="it__verification">
        <div className="it__verification__content">
          <h1> "Exclusive Offer For iSTA Students </h1>
          <p>
            "Are you an iSTA student? Verify now with a code and unlock
            exclusive discounts.
          </p>
          <div className="it__input_group">
            <input type="text" placeholder="Enter Your Certificate ID" />
            <button className="it__verify"> Verify </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IT_Verification;
