import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Share/Header/Header";
import Swal from "sweetalert2";
import "./Contact.css";
import { Slide } from "react-reveal";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_odgqf5b",
        "template_wijt5pr",
        form.current,
        "user_GpGk56bdeROUuvzFuX8ZV"
      )
      .then(
        (result) => {
          if (result.status) {
            Swal.fire("Success", "You email send Successfully", "success");
          }
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Header />
      <h1 className="pt-5 text-center head-main-title">
        Contact Us<span>.</span>
      </h1>
      <div className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} sm={12}>
              <Slide left>
                <div className="contact-text">
                  <p>
                    <b>Email : </b>
                    <a href="mailto:selimakondo58@gmail.com">
                      mdselimdev@gmail.com
                    </a>
                  </p>
                  <p>
                    <b>Phone / Whatsapp : </b>
                    <a href="tel:+8801932770803">+8801932770803</a>
                  </p>
                </div>
              </Slide>
            </Col>

            <Col lg={6} sm={12}>
              <Slide right>
                <div className="contact-form p-2">
                  <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      name="user_name"
                    />
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                    />
                    <label>Message</label>
                    <textarea
                      name="message"
                      placeholder="Write your message"
                      cols="15"
                      rows="5"
                    />
                    <input type="submit" value="Send" />
                  </form>
                </div>
              </Slide>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
