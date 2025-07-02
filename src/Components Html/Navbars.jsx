import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/1Logo.png";
import "../Components Css/Navbar.css";


export default function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img className="images-logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="but" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="nav-text">
            <Nav.Link href="/" className="nav-text">Home</Nav.Link>
            <Nav.Link href="#" className="nav-text">About</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item className="drop-down" href="#action/3.1">Bridal Makeup</NavDropdown.Item>
              <NavDropdown.Item className="drop-down" href="#action/3.2">Fashion Boutique</NavDropdown.Item>
              <NavDropdown.Item className="drop-down" href="#action/3.3">Aari Work</NavDropdown.Item>
              <NavDropdown.Item className="drop-down" href="#action/3.3">Tailoring</NavDropdown.Item>
              <NavDropdown.Item className="drop-down" href="#action/3.3">Fitness & Yoga</NavDropdown.Item>
              <NavDropdown.Item className="drop-down" href="#action/3.3">Bharatanatyam Classes</NavDropdown.Item>
              <NavDropdown.Item className="drop-down" href="#action/3.3">Smart Career Coaching</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="nav-text">Gallery</Nav.Link>
            <Nav.Link href="#link" className="nav-text">Blog</Nav.Link>
            <Nav.Link href="#link" className="nav-text">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}