import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quickLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quickLinks2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">

          <div className="logo">
            <img src={logo} alt="Company Logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Commodi, enim.
            </p>

            <div className="social_links d-flex align-items-center gap-4">
            <span>
              <Link to="#">
                <i className="ri-youtube-line"></i>
              </Link>
            </span>

            <span>
              <Link to="#">
                <i className="ri-github-fill"></i>
              </Link>
            </span>

            <span>
              <Link to="#">
                <i className="ri-facebook-circle-line"></i>
              </Link>
            </span>

            <span>
              <Link to="#">
                <i className="ri-instagram-line"></i>
              </Link>
            </span>
            </div>
          </div>
          </Col>

          <Col lg="3">
            <h5 className="footer_link-title">Discover</h5>
            <ListGroup className="footer_quick-links">
              {quickLinks2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>


          <Col lg="3">
            <h5 className="footer_link-title">Quick Links</h5>
            <ListGroup className="footer_quick-links">
              {quickLinks.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>



          <Col lg="3">
          <h5 className="footer_link-title">Contact</h5>

          <ListGroup className="footer_quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0">UP, India</p>
              </ListGroupItem>


              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">vaishali.yadavv09@gmail.com</p>
              </ListGroupItem>


              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  Contact:
                </h6>
                <p className="mb-0">+9174697648 </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
