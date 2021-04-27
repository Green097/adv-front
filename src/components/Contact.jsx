import React, { useEffect } from "react";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navigation from "./Navigation";

import imgLarge from "../assets/front-getintouch-link.png";
import imgSmall from "../assets/weba-mobil.getintouch.png";
import Logo from "../assets/logo-b.png";
import imgOne from "../assets/whatwedo-small.png";
import imgTwo from "../assets/maintainable-small.png";
import imgThree from "../assets/getintouch-small.png";

const Contact = () => {
  const color = "linear-gradient(180deg, rgba(255,180,114,1) 0%, rgba(255,180,114,1) 100%)";
  useEffect( ()=>{
  document.body.style.backgroundImage = color ;
 });

  return (
    <Fragment>
      <Container className="frontCon">
        <Navigation />
        <Row>
          <Col sm={4} fluid="xs">
            <img
              className="d-none d-sm-block imgW"
              src={imgLarge}
              alt="Contact"
            />
            <img
              className="d-block d-sm-none imgW"
              src={imgSmall}
              alt="MobileContact"
            />
          </Col>
          <Col sm={8} fluid="xs">
            <h4 className="font-weight-bolder d-none d-sm-block">
              There for you and <span id="ContactH2">care for you</span>...
            </h4>
            <h5 className="font-weight-bolder d-block d-sm-none mt-2">
              There for you and <span id="ContactH2">care for you</span>...
            </h5>
            <p className="whiteTXT">
              Aenean ac interdum velit. Cras dictum nec dolor et varius. Fusce
              pretium dapibus justo id tristique. Nullam vehicula metus eget
              gravida eleifend. Nullam eleifend non ipsum vitae iaculis. Fusce
              ultricies magna et orci laoreet tempus. But i must explain to you
              how all this mistaken idea of denouncing
              <br />
              <br />
              Vivamus faucibus nisi nec ultricies laoreet. Nunc aliquet ante
              quis felis facilisis, eu volutpat mauris finibus. In hac habitasse
              platea dictumst.
            </p>
            <Row fluid="xs">
              <Col xs={4}>
                <img className="imgW" src={imgOne} />
                <figcaption className="figcap">lt@coolish.com</figcaption>{" "}
              </Col>
              <Col xs={4}>
                <img className="imgW" src={imgTwo} />
                <figcaption className="figcap">pn@coolish.com</figcaption>{" "}
              </Col>
              <Col xs={4}>
                <img className="imgW" src={imgThree} />
                <figcaption className="figcap">mn@coolish.com</figcaption>{" "}
              </Col>
            </Row>
          </Col>
          <Col xs={{ size: 3, offset: 9 }}>
            <p className="d-none d-sm-block footerTXT">Get In Touch</p>
            <img className="d-block d-sm-none imgW" src={Logo} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Contact;
