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

const Portfolio = () => {
  return (
    <div>
      <Header />
      <h1 className="pt-3 text-center head-main-title">
        My Portfolio<span>.</span>
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
                      href="https://github.com/MdSelimDev/bangla-car-ecommerce-website-client-site"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Code
                    </a>
                    <a
                      href="https://github.com/MdSelimDev/bangla-car-ecommerce-website-server-site"
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
                      href="https://github.com/MdSelimDev/jerins-perlour-website-client-side"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Code
                    </a>
                    <a
                      href="https://github.com/MdSelimDev/jerins-perlour-website-server-side"
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
                      href="https://github.com/MdSelimDev/health-evercare-hospital-website"
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
                      href="https://github.com/MdSelimDev/aryan-selim-business-website"
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
                      href="https://github.com/MdSelimDev/tour-travel-booking-website-client-side"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Code
                    </a>
                    <a
                      href="https://github.com/MdSelimDev/tour-travel-booking-website-server-site"
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
                      href="https://github.com/MdSelimDev/Panda-store"
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
            </Row>
          </Container>
        </div>
      </h1>
    </div>
  );
};

export default Portfolio;
