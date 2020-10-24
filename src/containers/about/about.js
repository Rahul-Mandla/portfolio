import React from "react";
import "./about.scss";
import { Container, Row, Col } from "react-bootstrap";
const About = () => (
  <section>
    <Container fluid className=" about text-center mt-5">
      <img src={require("../../assets/about/frame3.png")} className="frame" />
      <Row>
        <Col md={12}>
          <h1 className="about_heading">About me</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={7} className="mt-5 justify-content-center">
          <p className="bio">
            hey there, i'm prabhjot singh. <br />
            i'm a freelance graphic designer.
            <br />i make animated motion videos and banners
          </p>
          <div className="my_skills">
            <h3>my skills</h3>
            <div className="skill_icons">
              <img src={require("../../assets/svg/photoshop.svg")} />
              <img src={require("../../assets/svg/after-effect.svg")} />
              <img src={require("../../assets/svg/premiere.svg")} />
              <img src={require("../../assets/svg/illustrator.svg")} />
            </div>
          </div>
        </Col>
        <Col md={4} className="about_image">
          <img src={require("../../assets/about/pp2.png")} />
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
