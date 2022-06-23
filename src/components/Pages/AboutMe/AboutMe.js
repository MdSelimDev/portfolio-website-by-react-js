import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Share/Header/Header";
import HomePhoto from "../../img/profile.png";
import "./AboutMe.css";
import { Flip } from "react-reveal";

const AboutMe = () => {
  return (
    <div className="main-home-page-banner">
      <Header />
      <Flip>
        <h1 className="pt-3 text-center head-main-title">
          About Me<span>.</span>
        </h1>
        <div className="banner-box-main py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} sm={12}>
                <div className="homeImage">
                  <img className="img-fluid" src={HomePhoto} alt="" />
                </div>
              </Col>
              <Col lg={6} sm={12}>
                <div className="about-details">
                  <p className="aboutTextPara">
                    Hi, I am Selim. I recently finish my course Full-Stack web
                    development with (Mern) Stack. I know Html 5 , Css 3 ,
                    Javascript , React js , Bootstrap 5 , Tailwind Css , Node Js
                    , Express Js , MongoDB And Material Ui. Always I want to
                    learn something new for my experience increase. I am very
                    Hard Worker Person. I want growth my talent day by day.{" "}
                  </p>
                </div>
                <div className="about-me-social">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/mdselimdev/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/mdselimdev"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/mdselimdev"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/mdselimdev/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/mdselimdev"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Flip>
    </div>
  );
};

export default AboutMe;
