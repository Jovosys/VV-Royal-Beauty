import React from 'react'
import '../Components Css/Footer.css';

export default function Footer() {
  return (
    <div>
    <footer className="footer text-light pt-5 pb-3">
      <div className="container" data-aos="fade-up">
        <div className="row">
          {/* Quick Links */}
          <div className="col-md-6 col-lg-4 mb-4 text-md-start text-lg-start">
            <h5 className="text-uppercase text-dark fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#services" className="footer-link">Our Services</a></li>
              <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
              <li><a href="#reviews" className="footer-link">Testimonials</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Address or Contact */}
          <div className="col-md-6 col-lg-4 mb-4 text-md-start text-lg-start ">
            <h5 className="text-uppercase text-dark fw-bold mb-3">Contact</h5>
            <p className="mb-1">123, Komarapalayam, Erode</p>
            <p className="mb-1">Tamil Nadu, India</p>
            <p className="mb-0">Email: info@bridalsite.com</p>
          </div>

          {/* Logo or Description */}
          <div className="col-lg-4 text-md-start text-lg-start">
            <h5 className="text-uppercase text-dark fw-bold mb-3">VV Royal Bridal Studio</h5>
            <p>Bringing out the beauty in every bride with elegance and style.</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="bg-light" />

        {/* Copyright */}
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Royal Bridal Studio. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              Designed by <a href="https://jovosys.com" target="_blank" rel="noopener noreferrer" className="designer-link">Jovosys</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
