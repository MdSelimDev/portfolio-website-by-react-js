import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Share/Header/Header";
import "animate.css";
import HomePhoto from "../../img/profile.png";
import "./Home.css";
import { Fade, Rotate } from "react-reveal";

const Home = () => {
  return (
    <div className="main-home-page-banner">
      <Header />
      <div className="banner-box-main py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} sm={12}>
              <div className="homeText animate__backInLeft">
                <Rotate>
                  <h4>Hi , I am Selim</h4>
                </Rotate>
                <Fade left>
                  <h1>
                    Full Stack Web Developer <br /> With (MERN) Stack
                  </h1>
                </Fade>
                <Fade bottom>
                  <a
                    className="text-decoration-none home-page-button"
                    href="https://drive.google.com/file/d/1GkhPJk-72-Dks6Jmx8wPtQj_iOSk4Hbu/view"
                    download
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download Resume
                  </a>
                </Fade>
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <Fade right>
                <div className="homeImage animate__backOutRight">
                  <img className="img-fluid" src={HomePhoto} alt="" />
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
