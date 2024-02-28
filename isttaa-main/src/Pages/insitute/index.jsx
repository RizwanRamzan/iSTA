import React from "react";
import "./insitute.scss";
import { Insitute_img } from "../../assets";
import NewCareer from "../../Component/newCareer";
import Categories from "../../Component/categories";
import DiplomaCertification from "../../Component/diplomaCertification";
import ZeroToMastery from "../../Component/zeroToMastery";
import BenefitsOfIsta from "../../Component/benefitsOfIsta";
import OurSuccess from "../../Component/ourSuccess";
import BecomeATeacher from "../../Component/become_a_teacher";
import Verification from "../../Component/verification";
import Footer from "../../Component/footer";
import Testimonials from "../../Component/testimonials";
import ExploreBrowser from "../../Component/exploreBrowser";
import DiscountOffer from "../../Component/discountOffer";
// import MyFooter from "../../Component/myFooter";

const Insitute = () => {
  return (
    <>
      <div className="insitute_wrapper">
        <div className="insitute">
          <div className="insitute_left">
            <h1>
              Pakistan’s No.1 <br /> IT Training Institute
            </h1>
            <p> Services </p>
            <div className="insitute__buttons">
              <button>Courses</button>
              <button>Diploma</button>
            </div>
            <p className="insitute_text">
              "Welcome to iSTA, Pakistan's Premier IT Training Institute!
              Elevate your skills, soar to new heights in technology, and
              conquer the IT world with our cutting-edge courses. Join our
              dynamic community of learners, guided by expert instructors, and
              embrace a future brimming with endless possibilities. Unleash your
              potential at iSTA!"
            </p>
          </div>
          <div className="insitute_right">
            <img src={Insitute_img} alt="" />
          </div>
        </div>
        <NewCareer />
        <h1 className="start_learning_with_ista"> Start Learning With iSTA </h1>
        <Categories />
        <DiplomaCertification />
        <DiscountOffer />
        <ZeroToMastery />
        <ExploreBrowser />
        <BenefitsOfIsta />
        <Testimonials />
        <OurSuccess />
        <BecomeATeacher />
        <Verification />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Insitute;
