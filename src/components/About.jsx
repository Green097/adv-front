import React, {useEffect} from "react";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navigation from "./Navigation";

import imgLarge from "../assets/front-what-we-do-link.png"
import imgSmall from "../assets/weba-2-mobil-whatwedo.png"
import Logo from "../assets/logo-a.png"
import navImage from "../assets/nav-1-where.png"

const About = () => {
  const image = document.createElement('Img')
  image.src = (navImage)
  const color = "linear-gradient(180deg, rgba(171,207,230,1) 0%, rgba(171,207,230,1) 100%)";
  useEffect( ()=>{
  document.body.style.backgroundImage = color ;
  document.querySelector('#navOne').appendChild(image)
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
              alt="About"
            />
            <img
              className="d-block d-sm-none imgW"
              src={imgSmall}
              alt="MobileAbout"
            />
          </Col>
          <Col sm={8} fluid="xs">
            <h4 className="font-weight-bolder d-none d-sm-block">
              Design is the <span id="AboutH2">matter of choise</span>...
            </h4>
            <h5 className="font-weight-bolder d-block d-sm-none mt-2">
              Design is the <span id="AboutH2">matter of choise</span>...
            </h5>
            <p className="whiteTXT">
              Vivamus faucibus nisi nec ultricies laoreet. Nunc aliquet ante
              quis felis facilisis, eu volutpat mauris finibus. In hac habitasse
              platea dictumst.
              <br />
              <br />
              Aenean ac interdum velit. Cras dictum nec dolor et varius. Fusce
              pretium dapibus justo id tristique. Nullam vehicula metus eget
              gravida eleifend. Nullam eleifend non ipsum vitae iaculis. Fusce
              ultricies magna et orci laoreet tempus.
              <br />
              <br />
              But i must explain to you how all this mistaken idea of denouncing
            </p>
          </Col>
          <Col xs={{ size: 3, offset: 9 }}>
          <p className="d-none d-sm-block footerTXT">
          What We Do
          </p>
          <img className="d-block d-sm-none imgW" src={Logo} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default About;
