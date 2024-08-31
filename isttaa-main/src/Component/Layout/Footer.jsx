import { Col, Row } from "antd";
import React from "react";
import "./Footer.scss";
import { SubHero } from "../../assets";
import { FooterTabs, SocialIcon } from "./constant";
import { GetCurrentYear } from "../../Utils/helper";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  // Use Media Query
  const mobileResponsive = useMediaQuery({
    query: "(max-width: 968px)",
  });

  return (
    <div className="footer">
      <div className="footer-box">
        <div className="footer-dream-box">
          <p>Step into the World of iSTTAA & Build your Dreams With Us!</p>
        </div>

        <Row gutter={[0, 20]} className="social-box">
          <Col span={mobileResponsive ? 24 : 12}>
            <p>Follow Us</p>
          </Col>
          <Col span={mobileResponsive ? 24 : 12}>
            <div className="social-icons-list">
              {SocialIcon.map((item, index) => (
                <div key={index} className="socila-icon">
                  <img src={item?.image} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="footer-end">
          <Col span={24}>
            <p style={{ textAlign: "center" }}>
              © {GetCurrentYear} isttaa. All rights reserved.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
