import React, { useEffect, useState } from "react";
import "./home.scss";
import TopBar from "../../Component/Layout/TopBar";
import { CEo, NewLogo, StartBu, Welcome } from "../../assets";
import { Button, Carousel, Form, Input, Row, message } from "antd";
import Footer from "../../Component/Layout/Footer";
import { useNavigate } from "react-router-dom";
import InstituteBanner from "../../Component/Banners/institute";
import SolutionsBanner from "../../Component/Banners/solutions";
import Store from "../../Component/Banners/store";
import { useForm } from "@formspree/react";
import DailyUpdate from "./dailyUpdate";
import { WebsiteData } from "./constant";
import InstituteContainer from "../../Component/institute/instituteContainer";

const Home = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [state, handleSubmit] = useForm("mrgvebpz");

  if (state.succeeded) {
    form.resetFields();
  }

  useEffect(() => {
    if (state.succeeded) {
      console.log(state, "state");
      message.success("Thank you for joinig !");
    }
  }, [state]);

  return (
    <div className="main">
      <div className="home">
        <Carousel
          style={{ height: "100%", width: "100%" }}
          slidesToShow={1}
          dotPosition="top"
          dots={true}
          autoplay
        >
          <div className="welcomeIsta">
            <div className="welcome">
              <div className="welcome-left">
                <p className="welcome-text">Welcome To</p>
                <img src={NewLogo} />
                <p className="description">
                  isttaa is a global company that offers a wide range of
                  services across various industries. From technology solutions
                  to consulting, finance, marketing, and logistics, isttaa aims
                  to simplify complex challenges and deliver reliable, tailored
                  services to clients worldwide. With expertise in cutting-edge
                  technologies, strategic consulting, financial planning,
                  marketing, and logistics management, isttaa strives to be a
                  trusted partner in driving growth and success for businesses
                  of all sizes.
                </p>
              </div>
              <div className="welcome-right">
                <img src={Welcome} />
              </div>
            </div>
          </div>

          <InstituteBanner />

          <SolutionsBanner />

          <Store />
        </Carousel>
      </div>
      <div className="PurposeMission">
        <div className="box">
          <h2>Purpose & Mission</h2>
          <p>
            ISTTAA Company's Purpose & Mission Are To Provide All World Services
            In One Place. Currently, ISTTAA Offers IT Training & Services.
          </p>
        </div>
      </div>

      <DailyUpdate />

      <div className="PurposeMission" style={{ margin: "50px 0px" }}>
        <div className="box">
          <h2>Our Project’s Detail</h2>
        </div>
      </div>

      {/* Institute Component */}
      {WebsiteData?.map((item) => (
        <InstituteContainer item={item} />
      ))}

      <div className="PurposeMission" style={{ margin: "50px 0px" }}>
        <div className="box">
          <h2>Build Your Dreams With Isttaa</h2>
        </div>
      </div>

      {/* founder */}
      <div className="CEo">
        <div className="founder">
          <div className="welcome-right">
            <img src="https://ohanadoc.s3.amazonaws.com/images/Group+263.svg" />
          </div>
          <div className="welcome-left">
            <p className="welcome-text">Founder & CEO</p>
            <h2>Tayyab Imtiaz</h2>
            <p className="welcome-des">
              As The Founder & CEO Of ISTTAA, I Am Thrilled To Lead A Company
              That Offers Comprehensive IT Training, Cutting-edge Software House
              Solutions, And An IT Store, Catering To All Your Technology Needs.
              Our Commitment To Excellence Drives Us To Stay Ahead In The
              Ever-evolving Tech World, Delivering Personalized Services To
              Empower Individuals And Businesses Alike. At ISTTAA, Innovation Is
              Our Fuel, And Customer Satisfaction Is Our Goal. With Gratitude To
              Our Clients And Dedication From Our Team, We Look Forward To
              Shaping A Brighter Future Together. Thank Be A Part Of Our
              Journey.
            </p>
            <button> CONNECT </button>
          </div>
        </div>
      </div>

      {/* Start Buisness With isttaa */}

      <div className="start-buisness">
        <div className="start">
          <img width="100%" src={StartBu} />
          <h2>Start Business With isttaa</h2>
          <p>Build Your Dreams With isttaa</p>
          <button onClick={() => navigate("/start-business")}>
            Start Business
          </button>
        </div>
      </div>

      <div className="CEo" style={{height:"auto"}} >
        <div className="founder">
          <div className="welcome-left" style={{padding:"50px 0px",width:"50%"}}>
            <h2>Head Office</h2>
            <p className="welcome-text">Lahore, Pakistan</p>
            <p className="welcome-des">ARFA Software Technology Park</p>
            <Button style={{backgroundColor:"#414143",color:"#fff"}} type='primary' > Get Location </Button>
          </div>
          <div className="welcome-right" style={{width:"50%"}}>
            <img src="https://ohanadoc.s3.amazonaws.com/images/ARFA+Building-01+1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
