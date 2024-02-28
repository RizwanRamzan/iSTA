import React from "react";
import "./myfooter.scss";
import { FooterLogo } from "../../assets";
import { SocialIconFooter } from "./constant";

const MyFooter = () => {
  return (
    <>
      <div className="my_Footer">
        <div className="footer__content">
          <img src={FooterLogo} alt="" />
          <hr />
          <div className="mid_content">
            <div className="one">
              <h1> isttaa Institute </h1>
              <ul>
                <li>Diploma </li>
                <li>Courses</li>
                <li> Special Discount </li>
                <li> Become a Teacher</li>
              </ul>
            </div>
            <div className="two">
              <h1> isttaa Solutions </h1>
              <ul>
                <li>Graphics & Design</li>
                <li>Development</li>
                <li> Digital Marketing </li>
                <li> Apply as a Freelancer </li>
              </ul>
            </div>
            <div className="three">
              <h1> isttaa IT Shop </h1>
              <ul>
                <li> Laptop </li>
                <li> Computer </li>
                <li> Mobile </li>
                <li> All IT Accessories </li>
              </ul>
            </div>
            <div className="four">
              <h1> Quick Link </h1>
              <ul>
                <li> FAQs </li>
                <li> About </li>
                <li> Contact Us </li>
                <li> Start Business </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="bottom_content">
            <h1> Follow Us </h1>
            <div className="social_icons">
              {SocialIconFooter.map((el) => (
                <>
                  <div className="socila-icon">
                    <div className="social_icon">
                      <img src={el?.image} />
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        {/* <hr /> */}
      </div>
    </>
  );
};

export default MyFooter;
