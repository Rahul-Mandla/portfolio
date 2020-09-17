import React from "react";
import "./portfolio.scss";
import { Container, Row, Col } from "react-bootstrap";

const Portfolio = () => (
  //   <React.Fragment>
  //     <Container fluid className="portfolio_container">
  //       <Row className="justify-content-center">
  //         <div className="categories">
  //           <img src={require("../../assets/svg/lightroom.svg")} />
  //           <img src={require("../../assets/svg/photoshop.svg")} />
  //           <img src={require("../../assets/svg/premiere.svg")} />
  //           <img src={require("../../assets/svg/after-effect.svg")} />
  //         </div>
  //       </Row>
  //       <Row className="m-3 height:250px justify-content-center">
  //         <Col className="gallery_img py-5" md={3}>
  //           <img className="" src={require("../../assets/cr1.jpg")} />
  //         </Col>
  //         <Col className="gallery_img" md={3}>
  //           <img src={require("../../assets/cr1.jpg")} />
  //         </Col>
  //         <Col className="gallery_img" md={3}>
  //           <img src={require("../../assets/cr1.jpg")} />
  //         </Col>
  //       </Row>
  //     </Container>
  //   </React.Fragment>

  <React.Fragment>
    <div className="categories">
      <img src={require("../../assets/icons/premiere.png")} />
      <img src={require("../../assets/icons/premiere.png")} />
      <img
        className="category_active"
        src={require("../../assets/icons/photoshop.png")}
      />
      <img src={require("../../assets/icons/after-effect.png")} />
      <img src={require("../../assets/icons/after-effect.png")} />
    </div>
    <div className="gallery">
      <div className="img1 gallery_img">
        <div className="img_detail">
          <h2>hwading</h2>
          <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
        </div>
        <img src={require("../../assets/cr1.jpg")} />
      </div>
      <div className="img2 gallery_img">
        <div className="img_detail">
          <h2>hwading</h2>
          <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
        </div>
        <img src={require("../../assets/cr1.jpg")} />
      </div>
      <div className="img3 gallery_img">
        <div className="img_detail">
          <h2>hwading</h2>
          <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
        </div>
        <img src={require("../../assets/cr1.jpg")} />
      </div>
      <div className="img4 gallery_img">
        <div className="img_detail">
          <h2>hwading</h2>
          <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
        </div>
        <img src={require("../../assets/cr1.jpg")} />
      </div>
      <div className="img5 gallery_img">
        <div className="img_detail">
          <h2>hwading</h2>
          <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
        </div>
        <img src={require("../../assets/cr1.jpg")} />
      </div>
      <div className="img6 gallery_img">
        <div className="img_detail">
          <h2>hwading</h2>
          <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
        </div>
        <img src={require("../../assets/cr1.jpg")} />
      </div>
      <div className="img7 gallery_img">
        <div className="img_detail">
          <h2>hwading</h2>
          <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
        </div>
        <img src={require("../../assets/cr1.jpg")} />
      </div>
      <div className="img8 gallery_img">
        <div className="img_detail">
          <h2>hwading</h2>
          <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
        </div>
        <img src={require("../../assets/cr1.jpg")} />
      </div>
      {/* <div className="img9 gallery_img">
        <img src={require("../../assets/cr1.jpg")} />
      </div>
      <div className="img10 gallery_img">
        <img src={require("../../assets/cr1.jpg")} />
      </div> */}
    </div>
  </React.Fragment>
);

export default Portfolio;
