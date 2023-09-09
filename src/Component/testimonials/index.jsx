import React from "react";
import "./testimonials.scss";
import { Stars, TestimonialProfile } from "../../assets";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <p> Testimonials </p>
        <h1> Students Feedback </h1>
        <div className="testimonials__cards">
          <div className="testimonial_card">
            <div className="testimonial_card_top">
              <div className="testimonial_card_top_left">
                <img src={TestimonialProfile} alt="img" />
              </div>
              <div className="testimonial_card_top_right">
                <h2> Talha Mushtaq </h2>
                <p> Graphic Designing </p>
              </div>
            </div>
            <div className="stars">
              <div className="stars_left">
                <span> 4.9 </span>
                <img src={Stars} alt="" />
              </div>
              <div className="stars_right">15/04/2023</div>
            </div>
            <hr />
            <div className="testimonial_card_bottom">
              <p>
                "Welcome to iSTA, Pakistan's Premier IT Training Institute!
                Elevate your skills, soar to new heights in technology, and
                conquer the IT world with our cutting-edge courses. Join our
                dynamic community of learners, guided by expert instructors, and
                embrace. "Welcome to iSTA, Pakistan's Premier IT Training
                Institute! Elevate your skills, soar to new heights in
                technology, and conquer the IT world with our cutting-edge
                courses. Join our dynamic community of learners, guided by
                expert instructors, and embrace.
              </p>
            </div>
          </div>
          <div className="testimonial_card">
            <div className="testimonial_card_top">
              <div className="testimonial_card_top_left">
                <img src={TestimonialProfile} alt="img" />
              </div>
              <div className="testimonial_card_top_right">
                <h2> Talha Mushtaq </h2>
                <p> Graphic Designing </p>
              </div>
            </div>
            <div className="stars">
              <div className="stars_left">
                <span> 4.9 </span>
                <img src={Stars} alt="" />
              </div>
              <div className="stars_right">15/04/2023</div>
            </div>
            <hr />
            <div className="testimonial_card_bottom">
              <p>
                "Welcome to iSTA, Pakistan's Premier IT Training Institute!
                Elevate your skills, soar to new heights in technology, and
                conquer the IT world with our cutting-edge courses. Join our
                dynamic community of learners, guided by expert instructors, and
                embrace. "Welcome to iSTA, Pakistan's Premier IT Training
                Institute! Elevate your skills, soar to new heights in
                technology, and conquer the IT world with our cutting-edge
                courses. Join our dynamic community of learners, guided by
                expert instructors, and embrace.
              </p>
            </div>
          </div>
          <div className="testimonial_card">
            <div className="testimonial_card_top">
              <div className="testimonial_card_top_left">
                <img src={TestimonialProfile} alt="img" />
              </div>
              <div className="testimonial_card_top_right">
                <h2> Talha Mushtaq </h2>
                <p> Graphic Designing </p>
              </div>
            </div>
            <div className="stars">
              <div className="stars_left">
                <span> 4.9 </span>
                <img src={Stars} alt="" />
              </div>
              <div className="stars_right">15/04/2023</div>
            </div>
            <hr />
            <div className="testimonial_card_bottom">
              <p>
                "Welcome to iSTA, Pakistan's Premier IT Training Institute!
                Elevate your skills, soar to new heights in technology, and
                conquer the IT world with our cutting-edge courses. Join our
                dynamic community of learners, guided by expert instructors, and
                embrace. "Welcome to iSTA, Pakistan's Premier IT Training
                Institute! Elevate your skills, soar to new heights in
                technology, and conquer the IT world with our cutting-edge
                courses. Join our dynamic community of learners, guided by
                expert instructors, and embrace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
