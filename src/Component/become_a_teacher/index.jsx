import React from "react";
import "./becomeTeacher.scss";
import { Teacher } from "../../assets";

const BecomeATeacher = () => {
  return (
    <>
      <div className="becometeacher">
        <div className="becomeTeacher_content">
          <div className="becomeTeacher_content_left">
            <div className="becomeTeacher_content_left_content">
              <h1> Become a Teacher </h1>
              <p>
                Embark on an inspiring journey to become an educator and share
                your knowledge with the world. As a teacher, you will play a
                pivotal role in shaping young minds and fostering a passion for
                learning. Embrace the joy of empowering students to reach their
                full potential while creating a positive and nurturing classroom
                environment. Whether you aspire to teach in traditional schools,
                online platforms, or specialized institutions, the path to
                becoming a teacher involves dedication, continuous learning, and
                a profound commitment to making a lasting impact on the lives of
                your students. Embrace this fulfilling profession and make a
                difference in the lives of future generations.
              </p>
              <button className="apply_now"> Apply Now </button>
            </div>
          </div>
          <div className="becomeTeacher_content_right">
            <img src={Teacher} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeATeacher;
