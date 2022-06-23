import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Share/Header/Header";
import "./Portfolio.css";
import BanglaCar from "../../img/web/banglacar.png";
import Perlor from "../../img/web/perlor.png";
import Health from "../../img/web/health.png";
import Business from "../../img/web/business.png";
import Travel from "../../img/web/travel.png";
import Panda from "../../img/web/panda.png";
import { Fade } from "react-reveal";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <Fade top>
        <h1 className="pt-3 text-center head-main-title">
          My Portfolio<span>.</span>
        </h1>
        <div className="py-5">
          <Container>
            <Row>
              <Col lg={4} sm={12}>
                <div className="portfolio-single-box shadow-lg p-4 mt-5">
                  <div className="portfolio-box">
                    <img className="img-fluid" src={BanglaCar} alt="" />
                  </div>
                  <div className="live-website-link">
                    <a
                      href="https://github.com/mdselimdev/bangla-car-ecommerce-website-client-site"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Code
                    </a>
                    <a
                      href="https://github.com/mdselimdev/bangla-car-ecommerce-website-server-site"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server Code
                    </a>
                    <a
                      href="https://banglacars-47f2f.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Link
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={4} sm={12}>
                <div className="portfolio-single-box shadow-lg p-4 mt-5">
                  <div className="portfolio-box">
                    <img className="img-fluid" src={Perlor} alt="" />
                  </div>
                  <div className="live-website-link">
                    <a
                      href="https://github.com/mdselimdev/jerins-perlour-website-client-side"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Code
                    </a>
                    <a
                      href="https://github.com/mdselimdev/jerins-perlour-website-server-side"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server Code
                    </a>
                    <a
                      href="https://jerinperlourcom.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Link
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={4} sm={12}>
                <div className="portfolio-single-box shadow-lg p-4 mt-5">
                  <div className="portfolio-box">
                    <img className="img-fluid" src={Health} alt="" />
                  </div>
                  <div className="live-website-link">
                    <a
                      href="https://github.com/mdselimdev/health-evercare-hospital-website"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Code
                    </a>
                    <a
                      href="https://health-evercare-hospital-ltd.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Link
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={4} sm={12}>
                <div className="portfolio-single-box shadow-lg p-4 mt-5">
                  <div className="portfolio-box">
                    <img className="img-fluid" src={Business} alt="" />
                  </div>
                  <div className="live-website-link">
                    <a
                      href="https://github.com/mdselimdev/aryan-selim-business-website"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Code
                    </a>
                    <a
                      href="https://mdselimdev.github.io/aryan-selim-business-website/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Link
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={4} sm={12}>
                <div className="portfolio-single-box shadow-lg p-4 mt-5">
                  <div className="portfolio-box">
                    <img className="img-fluid" src={Travel} alt="" />
                  </div>
                  <div className="live-website-link">
                    <a
                      href="https://github.com/mdselimdev/tour-travel-booking-website-client-side"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Code
                    </a>
                    <a
                      href="https://github.com/mdselimdev/tour-travel-booking-website-server-site"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server Code
                    </a>
                    <a
                      href="https://tour-travel-agency.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Link
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={4} sm={12}>
                <div className="portfolio-single-box shadow-lg p-4 mt-5">
                  <div className="portfolio-box">
                    <img className="img-fluid" src={Panda} alt="" />
                  </div>
                  <div className="live-website-link">
                    <a
                      href="https://github.com/mdselimdev/Panda-store"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Code
                    </a>
                    <a
                      href="https://mdselimdev.github.io/Panda-store/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Link
                    </a>
                  </div>
                </div>
              </Col>
              <h3 className="text-center fs-3 text-dark mt-5">
                More Comming Soon
              </h3>
            </Row>
          </Container>
        </div>
      </Fade>
    </div>
  );
};

export default Portfolio;
