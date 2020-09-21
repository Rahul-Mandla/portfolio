import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./mywork.scss";
const Mywork = () => (
  <section>
    <Container fluid>
      <Row>
        <Col className="text-center p-3 text-uppercase">
          <h2>My works</h2>
        </Col>
      </Row>
      <Row className="my_work">
        <Col md={6} className="img_col p-0">
          <img src={require("../../assets/cr1.jpg")} />
        </Col>
        <Col md={6} className="txt_col">
          <p>
            lorem ipsum i a simple dummy texty that mean snothing cau we just
            wan some text here. lorem ipsum i a simple dummy texty that mean
            snothing cau we just wan some text here. lorem
          </p>
        </Col>
      </Row>
      <Row className="my_work flex-row-reverse">
        <Col md={6} className="img_col p-0">
          <img src={require("../../assets/cr2.jpg")} />
        </Col>
        <Col md={6} className="txt_col">
          <p>
            lorem ipsum i a simple dummy texty that mean snothing cau we just
            wan some text here. lorem ipsum i a simple dummy texty that mean
            snothing cau we just wan some text here. lorem
          </p>
        </Col>
      </Row>
      <Row className="my_work">
        <Col md={6} className="img_col p-0">
          <img src={require("../../assets/cr3.jpg")} />
        </Col>
        <Col md={6} className="txt_col">
          <p>
            lorem ipsum i a simple dummy texty that mean snothing cau we just
            wan some text here. lorem ipsum i a simple dummy texty that mean
            snothing cau we just wan some text here. lorem
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Mywork;
