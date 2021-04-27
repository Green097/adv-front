import React, {useEffect} from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import Logo from "../assets/logo-final.png";
import imgAbout from "../assets/front-what-we-do.png";
import imgContact from "../assets/front-get-in-touch.png";
import imgMain from "../assets/front-maintainable.png";
import imgMobileA from "../assets/weba-mobil.getintouch.png";
import imgMobileC from "../assets/weba-2-mobil-whatwedo.png";
import imgMobileM from "../assets/weba-3-mobil-maintainable.png";

const Home = () => {
  const color = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(177,210,231,1) 100%)";
  useEffect( ()=>{
  document.body.style.backgroundImage = color ;
 });
  return (
    <Fragment>
      <Container className="frontCon">
        <Row>
          <Col xs="2" className="mt-2 p-0 m-0">
            <img id="Logo" src={Logo} alt="Logo" />
          </Col>
        </Row>
        <Row className="HomeCon">
          <Col sm={4} fluid="xs" className="frontImg">
            <Link to="/About">
              <div className="">
                <img
                  className="d-none d-sm-block imgW"
                  src={imgAbout}
                  alt="About"
                />
                <img
                  className="d-block d-sm-none imgW"
                  src={imgMobileC}
                  alt="MobileContact"
                />
              </div>
            </Link>
          </Col>
          <Col sm={4} fluid="xs" className="frontImg">
            <Link to="/Maintain">
              <div className="">
                <img
                  className="d-none d-sm-block imgW"
                  src={imgMain}
                  alt="Maintain"
                />
                <img
                  className="d-block d-sm-none imgW"
                  src={imgMobileM}
                  alt="MobileMaintain"
                />
              </div>
            </Link>
          </Col>
          <Col sm={4} fluid="xs" className="frontImg">
            <Link to="/Contact">
              <div className="">
                <img
                  className="d-none d-sm-block imgW"
                  src={imgContact}
                  alt="Contact"
                />
                <img
                  className="d-block d-sm-none imgW"
                  src={imgMobileA}
                  alt="MobileAbout"
                />
              </div>
            </Link>
            <Row>
              <Col sm={12}>
                <figcaption id="homeFoot" className="d-none d-sm-block">
                  And yet... more to come
                </figcaption>
              </Col>
              <Col xs={6} className="p-1 offset-6">
                <figcaption id="homeFootS" className="d-block d-sm-none">
                  And yet... more to come
                </figcaption>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Home;
