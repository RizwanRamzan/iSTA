import React from "react";
import Home from "../Pages/Main";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Component/Layout/layout";
import "../GeneralStyle/index.scss";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import JoiningForm from "../Component/JoinigForm";
import StartBuisness from "../Component/StartBusiness";
import Insitute from "../Pages/insitute";
import ArtAndDesign from "../Pages/Art_and_design";
import Development from "../Pages/development";
import Marketing from "../Pages/marketing";
import Basic from "../Pages/basic";
import Intermediate from "../Pages/Intermediate";
import Advance from "../Pages/advance";
import Full_stack_designing from "../Pages/full_stack_designing";
import Graphics_designing from "../Pages/Graphics_Designing";
import Graphics_Designing_Basic from "../Pages/graphics_design_basic";
import Graphics_Designing_04 from "../Pages/Graphics_designing_4";
import UiUx_designing from "../Pages/UiUx_designing";
import Advertising_Designing from "../Pages/advertising_designing";
import Adobe_Illustrator from "../Pages/Adobe_Illustrator";
import Adobe_Photoshop from "../Pages/Adobe_Photoshop";
import Diploma_Graphics_Design from "../Pages/diploma_graphics_design";
import Diploma_Computer_Science from "../Pages/diploma_computer_science";
import IstaSolutions from "../Pages/ista_solutions";
import Graphics_Design from "../Component/ista-solutions-com/graphics_design";
import IT_Shop from "../Pages/IT_shop";
import Laptop from "../Component/IT_Shop_com/laptop";
import Ista_Packages from "../Component/ista-solutions-com/ista_solution_packages";
import Solution_Freelancer from "../Component/ista-solutions-com/solution_freelancer";

const ApplicationRoutes = () => {
  function RequireAuth({ children }) {
    return <Layout>{children}</Layout>;
  }

  return (
    <Routes>
      <Route path={"*"} element={<Navigate to="/home" replace />} />
      <Route
        path="/home"
        element={
          <div className="layout">
            <Home />
          </div>
        }
      />
      <Route
        path="/about"
        element={
          <div className="layout">
            <About />
          </div>
        }
      />
      <Route
        path="/contact"
        element={
          <div className="layout">
            <Contact />
          </div>
        }
      />
      <Route
        path="/joinig"
        element={
          <div className="layout">
            <JoiningForm />
          </div>
        }
      />
      <Route
        path="/start-business"
        element={
          <div className="layout">
            <StartBuisness />
          </div>
        }
      />
      <Route
        path="/insitute"
        element={
          <div className="layout">
            <Insitute />
          </div>
        }
      />
      <Route
        path="/art-and-design"
        element={
          <div className="layout mylayout">
            <ArtAndDesign />
          </div>
        }
      />
      <Route
        path="/development"
        element={
          <div className="layout mylayout">
            <Development />
          </div>
        }
      />
      <Route
        path="/marketing"
        element={
          <div className="layout mylayout">
            <Marketing />
          </div>
        }
      />
      <Route
        path="/basic"
        element={
          <div className="layout mylayout">
            <Basic />
          </div>
        }
      />
      <Route
        path="/intermediate"
        element={
          <div className="layout mylayout">
            <Intermediate />
          </div>
        }
      />
      <Route
        path="/advance"
        element={
          <div className="layout mylayout">
            <Advance />
          </div>
        }
      />
      <Route
        path="/full-stack-designing"
        element={
          <div className="layout mylayout">
            <Full_stack_designing />
          </div>
        }
      />
      <Route
        path="/graphics-designing"
        element={
          <div className="layout mylayout">
            <Graphics_designing />
          </div>
        }
      />
      <Route
        path="/graphics-designing-basic"
        element={
          <div className="layout mylayout">
            <Graphics_Designing_Basic />
          </div>
        }
      />
      <Route
        path="/graphics-designing-04"
        element={
          <div className="layout mylayout">
            <Graphics_Designing_04 />
          </div>
        }
      />
      <Route
        path="/uiux-designing"
        element={
          <div className="layout mylayout">
            <UiUx_designing />
          </div>
        }
      />
      <Route
        path="/advertising-designing"
        element={
          <div className="layout mylayout">
            <Advertising_Designing />
          </div>
        }
      />
      <Route
        path="/adobe-illustrator"
        element={
          <div className="layout mylayout">
            <Adobe_Illustrator />
          </div>
        }
      />
      <Route
        path="/adobe-photoshop"
        element={
          <div className="layout mylayout">
            <Adobe_Photoshop />
          </div>
        }
      />
      <Route
        path="/diploma-graphics-design"
        element={
          <div className="layout mylayout">
            <Diploma_Graphics_Design />
          </div>
        }
      />
      <Route
        path="/diploma-computer-science"
        element={
          <div className="layout mylayout">
            <Diploma_Computer_Science />
          </div>
        }
      />
      <Route
        path="/solutions"
        element={
          <div className="layout mylayout">
            <IstaSolutions />
          </div>
        }
      />
      <Route
        path="/graphics-design"
        element={
          <div className="layout mylayout">
            <Graphics_Design />
          </div>
        }
      />
      <Route
        path="/it-shop"
        element={
          <div className="layout mylayout">
            <IT_Shop />
          </div>
        }
      />
      <Route
        path="/laptop"
        element={
          <div className="layout mylayout">
            <Laptop />
          </div>
        }
      />
      <Route
        path="/packages"
        element={
          <div className="layout mylayout">
            <Ista_Packages />
          </div>
        }
      />
      <Route
        path="/solution-freelancer"
        element={
          <div className="layout mylayout">
            <Solution_Freelancer />
          </div>
        }
      />
    </Routes>
  );
};

export default ApplicationRoutes;
