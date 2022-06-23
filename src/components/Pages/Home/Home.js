import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Share/Header/Header";
import "animate.css";
import HomePhoto from "../../img/profile.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="main-home-page-banner">
      <Header />
      <div className="banner-box-main py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} sm={12}>
              <div className="homeText animate__backInLeft">
                <h4>Hi , I am Selim</h4>
                <h1>
                  Full Stack Web Developer <br /> With (MERN) Stack
                </h1>
                <a
                  className="text-decoration-none home-page-button"
                  href="https://drive.google.com/file/d/1GkhPJk-72-Dks6Jmx8wPtQj_iOSk4Hbu/view?usp=sharing"
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <div className="homeImage animate__backOutRight">
                <img className="img-fluid" src={HomePhoto} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
