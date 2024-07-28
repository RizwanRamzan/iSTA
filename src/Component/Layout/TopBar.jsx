import React, { useEffect, useState } from "react";
import { Logo, SearchIcon } from "../../assets";
import { Drawer, Input, message } from "antd";
import "../../GeneralStyle/index.scss";
import "./TopBar.scss";
import { useNavigate } from "react-router-dom";
import Link from "antd/es/typography/Link";
import { useMediaQuery } from "react-responsive";
import { MenuFoldOutlined } from "@ant-design/icons";

const TopBar = ({ button, activeClass, tabsColor }) => {
  const [activeTabs, setActiveTabs] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const windowLocation = window.location.pathname;

  const tabs = (tab, path) => {
    setActiveTabs(tab);
    navigate(path);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Use Media Query
  const mobileResponsive = useMediaQuery({
    query: "(max-width: 800px)",
  });

  return (
    <div className="headerMain">
      <div className="header">
        <div className="left-side">
          <img src={Logo} />
          {mobileResponsive ? null : (
            <Input
              className="ant-input-affix-wrapper"
              placeholder="Search iSTA..."
              suffix={<img src={SearchIcon} />}
            />
          )}
        </div>
        {mobileResponsive ? (
          <>
            <div className="bars">
              <MenuFoldOutlined
                onClick={() => showDrawer()}
                style={{ fontSize: "30px" }}
              />
            </div>
          </>
        ) : (
          <>
            <div className="right-side">
              <div className="tabs">
                <p
                  className={windowLocation.includes("home") && activeClass}
                  onClick={() => tabs("home", "/home")}
                >
                  Home
                </p>
                <p
                  className={windowLocation.includes("about") && activeClass}
                  onClick={() => tabs("about", "/about")}
                >
                  About
                </p>
                <p
                  className={windowLocation.includes("contact") && activeClass}
                  onClick={() => tabs("contact", "/contact")}
                >
                  Contact
                </p>
              </div>
              <button
                onClick={() => navigate("/joinig")}
                className={button == "Join" && "loginButton"}
              >
                {button}
              </button>
            </div>
          </>
        )}
      </div>
      <Drawer
        width={300}
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="tabs">
          <Input
            className="ant-input-affix-wrapper"
            placeholder="Search iSTA..."
            suffix={<img src={SearchIcon} />}
          />
          <a href="/home" target="_blank">
            <p style={{ color: "#3B7DED" }}>Home</p>
          </a>
          <a href="/about" target="_blank">
            <p style={{ color: "#2BA24C" }}>About</p>
          </a>
          <a href="/contact" style={{ color: "#E43E2B" }}>
            Contact
          </a>
        </div>
        <button onClick={() => navigate("/joinig")} className="loginButton">
          Join
        </button>
      </Drawer>
    </div>
  );
};

export default TopBar;
