import { Col, Row } from "antd";
import "./Layout.scss";
import TopBar from "./TopBar";
import IsttaaCard from "../UI/IsttaaCard";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <Row>
        <Col span={8}>
          <IsttaaCard title={"Education"} style={{ background: "#E9F1FF" }} />
        </Col>
        <Col span={8}>
          <IsttaaCard title={"Solutions"} style={{ background: "#EAFFEF" }} />
        </Col>
        <Col span={8}>
          <IsttaaCard title={"Store"} style={{ background: "#FFF6E9" }} />
        </Col>
        <Col span={24} style={{ background: "#2A2A2B", textAlign: "center" }}>
          <p style={{ color: "#FFFFFF" }}>
            ISTTAA Is A Company Focused On Launching And Managing A Variety Of
            Businesses. ISTTAA is like a whole world on its own. Step into the
            world of ISTTAA.
          </p>
        </Col>
      </Row>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
