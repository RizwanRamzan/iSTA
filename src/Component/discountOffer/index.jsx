import React from "react";
import "./discountOffer.scss";
import {
  Booking_discount,
  Booking_discount2,
  Booking_discount3,
} from "../../assets";

const DiscountOffer = () => {
  return (
    <>
      <div className="discount">
        <div className="discount_content">
          <p> Special Discount Offer </p>
          <h1>
            "Grab the Special Discount Offer before it expires in 7 days!"{" "}
          </h1>
          <div className="discount_offer__content_cards">
            <div className="discount_offer__content_card">
              <div className="discount__content_card_top">
                <h2> Graphic Design </h2>
              </div>
              <hr />
              <div className="discount__content_card_bottom">
                <h4> Closes In </h4>
                <div className="count_down">
                  <div className="time">
                    <h6> 01 </h6>
                    <p> days </p>
                  </div>
                  <div className="time">
                    <h6> 19 </h6>
                    <p> hrs </p>
                  </div>
                  <div className="time">
                    <h6> 25 </h6>
                    <p> mins </p>
                  </div>
                  <div className="time">
                    <h6> 38 </h6>
                    <p> secs </p>
                  </div>
                  <div className="time">
                    <img src={Booking_discount} alt="" />
                  </div>
                </div>
              </div>
              <button className="view_course"> View Course </button>
            </div>
            <div className="discount_offer__content_card">
              <div className="discount__content_card_top">
                <h2> Web Development </h2>
              </div>
              <hr />
              <div className="discount__content_card_bottom">
                <h4> Closes In </h4>
                <div className="count_down">
                  <div className="time">
                    <h6> 01 </h6>
                    <p> days </p>
                  </div>
                  <div className="time">
                    <h6> 19 </h6>
                    <p> hrs </p>
                  </div>
                  <div className="time">
                    <h6> 25 </h6>
                    <p> mins </p>
                  </div>
                  <div className="time">
                    <h6> 38 </h6>
                    <p> secs </p>
                  </div>
                  <div className="time">
                    <img src={Booking_discount2} alt="" />
                  </div>
                </div>
              </div>
              <button className="view_course"> View Course </button>
            </div>
            <div className="discount_offer__content_card">
              <div className="discount__content_card_top">
                <h2> Digital Marketing </h2>
              </div>
              <hr />
              <div className="discount__content_card_bottom">
                <h4> Closes In </h4>
                <div className="count_down">
                  <div className="time">
                    <h6> 01 </h6>
                    <p> days </p>
                  </div>
                  <div className="time">
                    <h6> 19 </h6>
                    <p> hrs </p>
                  </div>
                  <div className="time">
                    <h6> 25 </h6>
                    <p> mins </p>
                  </div>
                  <div className="time">
                    <h6> 38 </h6>
                    <p> secs </p>
                  </div>
                  <div className="time">
                    <img src={Booking_discount3} alt="" />
                  </div>
                </div>
              </div>
              <button className="view_course"> View Course </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountOffer;
