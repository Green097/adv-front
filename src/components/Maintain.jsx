import React, {useEffect} from "react";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navigation from "./Navigation";

import imgLarge from "../assets/front-maintainable-link.png";
import imgSmall from "../assets/weba-3-mobil-maintainable.png";
import Logo from "../assets/logo-a.png"

const Maintain = () => {
  const color = "linear-gradient(180deg, rgba(191,221,239,1) 0%, rgba(191,221,239,1) 100%)";
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
              alt="Maintain"
            />
            <img
              className="d-block d-sm-none imgW"
              src={imgSmall}
              alt="MobileMaintain"
            />
          </Col>
          <Col sm={8} fluid="xs">
            <h4 className="font-weight-bolder d-none d-sm-block">
              Keeping your all <span id="MaintainH2">upto date</span>...
            </h4>
            <h5 className="font-weight-bolder d-block d-sm-none mt-2">
              Keeping your all <span id="MaintainH2">upto date</span>...
            </h5>
            <p className="whiteTXT">
              But i must explain to you how all this mistaken idea of denouncing
              <br />
              <br />
              Aenean ac interdum velit. Cras dictum nec dolor et varius. Fusce
              pretium dapibus justo id tristique. Nullam vehicula metus eget
              gravida eleifend. Nullam eleifend non ipsum vitae iaculis. Fusce
              ultricies magna et orci laoreet tempus.
              <br />
              <br />
              Vivamus faucibus nisi nec ultricies laoreet. Nunc aliquet ante
              quis felis facilisis, eu volutpat mauris finibus. In hac habitasse
              platea dictumst.
            </p>
          </Col>
          <Col xs={{ size: 3, offset: 9 }}>
          <p className="d-none d-sm-block footerTXT">
          MaintainAble
          </p>
          <img className="d-block d-sm-none imgW" src={Logo} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Maintain;
