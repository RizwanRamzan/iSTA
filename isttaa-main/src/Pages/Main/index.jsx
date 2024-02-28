import React, { useEffect, useState } from "react";
import "./home.scss";
import TopBar from "../../Component/Layout/TopBar";
import { CEo, NewLogo, StartBu, Welcome } from "../../assets";
import InstituteContainer from "../../Component/institute/instituteContainer";
import { WebsiteData } from "./constant";
import { Carousel, Form, Input, Row, message } from "antd";
import Footer from "../../Component/Layout/Footer";
import { useNavigate } from "react-router-dom";
import InstituteBanner from "../../Component/Banners/institute";
import SolutionsBanner from "../../Component/Banners/solutions";
import Store from "../../Component/Banners/store";
import { useForm } from "@formspree/react";

const Home = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [state, handleSubmit] = useForm("mrgvebpz");

  if (state.succeeded) {
    form.resetFields()

  }

  useEffect(() => {
    if (state.succeeded) {
      console.log(state, "state")
      message.success("Thank you for joinig !")
    }
  }, [state])

  return (
    <div className="main">
      <TopBar activeClass="activehome" button="Join" />
      <div className="home">
        <Carousel style={{ height: "100%", width: "100%" }} slidesToShow={1} dotPosition="top" dots={true} autoplay>
          <div className="welcomeIsta">
            <div className="welcome">
              <div className="welcome-left">
                <p className="welcome-text">Welcome To</p>
                <img src={NewLogo} />
                <p className="description">
                  isttaa is a global company that offers a wide range of services
                  across various industries. From technology solutions to
                  consulting, finance, marketing, and logistics, isttaa aims to
                  simplify complex challenges and deliver reliable, tailored
                  services to clients worldwide. With expertise in cutting-edge
                  technologies, strategic consulting, financial planning, marketing,
                  and logistics management, isttaa strives to be a trusted partner in
                  driving growth and success for businesses of all sizes.
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
        {/* <div className="tabs">
          <button
            className="instituteButton"
            onClick={() => navigate("/insitute")}
          >
            isttaa Institute
          </button>
          <button
            className="solutionButton"
            onClick={() => navigate("/solutions")}
          >
            isttaa Solutions
          </button>
          <button className="shopButton" onClick={() => navigate("/it-shop")}>
            isttaa IT Shop
          </button>
        </div> */}
      </div>
      {/* Institute Component */}
      {WebsiteData?.map((item) => (
        <InstituteContainer item={item} />
      ))}

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

      {/* founder */}
      <div className="CEo">
        <div className="founder">
          <div className="welcome-right">
            <img src={CEo} />
          </div>
          <div className="welcome-left">
            <p className="welcome-text">Founder & CEO</p>
            <h2>Tayyab Imtiaz</h2>
            <p className="welcome-des">
              As the Founder & CEO of isttaa, I am thrilled to lead a company that
              offers comprehensive IT Training, cutting-edge Software House
              solutions, and an IT Shop, catering to all your technology needs.
              Our commitment to excellence drives us to stay ahead in the
              ever-evolving tech world, delivering personalized services to
              empower individuals and businesses alike. At isttaa, innovation is
              our fuel, and customer satisfaction is our goal. With gratitude to
              our clients and dedication from our team, we look forward to
              shaping a brighter future together. Thank be a part of our
              journey.
            </p>
          </div>
        </div>
      </div>


      {/* Email Updates */}

      <div className="Email">
        <div className="email-box">
          <div className="email-text">
            <p>
              Want Us to Email you About
              <br /> Special Offers & Updates?
            </p>
          </div>
          <Form form={form} onFinish={handleSubmit} className="email-input">

            <Form.Item style={{ margin: "0px", width: "100%" }} name="subcription" rules={[{ required: true, message: "please enter valid email" }]}>
              <Input
                type="email"
                className="ant-input-affix-wrapper"
                placeholder="your email"
              />
            </Form.Item>
            <button type='submit'>Subscribe</button>
          </Form>
          <div></div>
        </div>
      </div>

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default Home;
