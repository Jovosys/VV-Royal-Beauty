import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Components Css/Tailoring.css";
import RequestForm from "./RequestForm";
import aboutImg from "../assets/Tailoring/T-about.jpg";
import services1 from "../assets/Tailoring/T-services1.avif";
import services2 from "../assets/Tailoring/T-services2.avif";
import services3 from "../assets/Tailoring/T-services3.avif";
import services4 from "../assets/Tailoring/T-services4.webp";

const services = [
  { id: 1, title: "Custom Tailoring For Men", image: services1 },
  { id: 2, title: "BulK Stiching Orders", image: services2 },
  { id: 3, title: "Doorstep Boutique For Women", image: services3 },
  { id: 4, title: "Wedding Dress Designer", image: services4 },
];

// why choose us
const points = [
    {
      iconClass: "bi bi-check-circle-fill text-success",
      title: "Premium Stitching",
      desc: "We deliver high-quality stitching tailored to your measurements with perfect fit."
    },
    {
      iconClass: "bi bi-cash-coin text-primary",
      title: "Affordable Price",
      desc: "Get stylish and quality tailoring at reasonable rates without any compromise."
    },
    {
      iconClass: "bi bi-alarm-fill text-warning",
      title: "Timely Delivery",
      desc: "We value your time and always ensure prompt delivery of every order."
    }
  ];

const Tailoring = () => {
  const [showForm, setShowForm] = useState(false);
  const [showMensForm, setShowMensForm] = useState(false);
  const [showWomensForm, setShowWomensFrom] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const bookForm = () => {
    setShowForm(!showForm);
  };
  const mensForm = () => {
    setShowMensForm(!showMensForm);
  };
  const womensForm = () => {
    setShowWomensFrom(!showWomensForm);
  };

  return (
    <div className="about">
      {/* hero section */}
      <section className="hero-section">
        <div className="overlay" />

        <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="hero-heading text-light" data-aos="fade-down">
            Tailoring Service for{" "} <br/>
            <span className="span-text-tailoring">Men, Women & Kids</span>
          </h1>
          <button className="btn btn-warning mt-4" onClick={bookForm}>
            Book Appointment
          </button>
        </div>

        {showForm && (
          <div className="mt-4">
            <RequestForm closeIcon={() => setShowForm(false)} />
          </div>
        )}
      </section>
      {/* about section */}
      <section className="about-section py-3">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-down">
            About Us
          </h2>
          <div className="row align-items-center">
            {/* About Content */}
            <div className="col-lg-4 mb-4" data-aos="fade-right">
              <div className="about-text p-3 shadow-sm rounded bg-white">
                <p>
                  We provide professional tailoring services for men, women, and
                  children, with a focus on custom fits, timely delivery, and
                  style that matches your personality. Our experienced tailors
                  work with quality fabrics and pay attention to every detail to
                  ensure customer satisfaction.
                  <br />
                  <br />
                  From daily wear to occasion wear, we ensure each garment is
                  made with love and precision. Our goal is to offer fashion
                  that fits you perfectly and makes you feel confident.
                </p>
              </div>
            </div>

            {/* Image Card */}
            <div className="col-lg-4 mb-4" data-aos="zoom-in">
              <div className="card shadow border-0">
                <img src={aboutImg} className="card-img-top" alt="About" />
              </div>
            </div>

            {/* What We Serve */}
            <div className="col-lg-4 mb-4" data-aos="fade-left">
              <div className="services-list bg-light p-3 rounded shadow-sm">
                <h3>What We Serve</h3>
                <ul className="list-unstyled mt-3">
                  <li>✔ Custom Tailoring for Men, Women & Kids</li>
                  <li>✔ Express Stitching & Delivery</li>
                  <li>✔ Alterations & Fittings</li>
                  <li>✔ Wedding & Event Wear</li>
                  <li>✔ High-Quality Fabric Suggestions</li>
                  <li>✔ Free Consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services section */}
      <section className="services-section py-5" id="services">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-up">
            Our Services
          </h2>
          <div className="row justify-content-center">
            {services.map((service, index) => (
              <div
                className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center mb-4"
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card service-card shadow-sm border-0">
                  <img
                    src={service.image}
                    className="card-img-top"
                    alt={service.title}
                  />
                  <div className="card-body text-center bg-dark text-light">
                    <h5 className="card-title">{service.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* men's tailoring */}
      <section
        className="mens-tailoring-section d-flex align-items-center mb-1"
        id="mens-tailoring"
      >
        <div className="container">
          <div className="row justify-content-start">
            <div
              className="col-12 col-md-8 col-lg-6 text-dark overlay-content"
              data-aos="fade-right"
            >
              <h2 className="mb-3">Men's Tailoring</h2>
              <p>
                Experience premium men's tailoring with a touch of elegance. Our
                services include custom shirt stitching, trouser fitting, suit
                tailoring, and ethnic wear customization. Every garment is
                crafted to match your style and measurements. Whether it's a
                formal occasion or traditional celebration, we ensure a perfect
                fit with our attention to detail and expert craftsmanship. Visit
                us for a refined and comfortable tailoring experience.
              </p>
              <p>
                Experience premium men's tailoring with a touch of elegance. Our
                services include custom shirt stitching, trouser fitting, suit
                tailoring, and ethnic wear customization. Every garment is
                crafted to match your style and measurements.
              </p>
            </div>
          </div>
          {/* book btn */}
          <div className="text-center mt-4">
            <button className="btn btn-warning" onClick={mensForm}>
              Request a Callback
            </button>
          </div>

          {showMensForm && (
            <div className="mt-4" data-aos="fade-up">
              <RequestForm closeIcon={() => setShowMensForm(false)} />
            </div>
          )}
        </div>
      </section>
      {/* women's tailoring */}
      <section
        className="womens-tailoring-section d-flex align-items-center"
        id="womens-tailoring"
      >
        <div className="container">
          <div className="row justify-content-start">
            <div
              className="col-12 col-md-8 col-lg-6 text-dark overlay-content"
              data-aos="fade-right"
            >
              <h2 className="mb-3">Women's Tailoring</h2>
              <p>
                Experience premium men's tailoring with a touch of elegance. Our
                services include custom shirt stitching, trouser fitting, suit
                tailoring, and ethnic wear customization. Every garment is
                crafted to match your style and measurements. Whether it's a
                formal occasion or traditional celebration, we ensure a perfect
                fit with our attention to detail and expert craftsmanship. Visit
                us for a refined and comfortable tailoring experience.
              </p>
              <p>
                Experience premium men's tailoring with a touch of elegance. Our
                services include custom shirt stitching, trouser fitting, suit
                tailoring, and ethnic wear customization. Every garment is
                crafted to match your style and measurements.
              </p>
            </div>
          </div>
          {/* book btn */}
          <div className="text-center mt-4">
            <button className="btn btn-warning" onClick={womensForm}>
              Request a Callback
            </button>
          </div>

          {showWomensForm && (
            <div className="mt-4" data-aos="fade-up">
              <RequestForm closeIcon={() => setShowWomensFrom(false)} />
            </div>
          )}
        </div>
      </section>
      {/* why choose us */}
      
      <section className="why-choose-us py-5 bg-light" id="why-choose-us">
      <div className="container" data-aos="fade-up">
        <h3 className="text-center fw-bold mb-5">Why Choose Us</h3>
        <div className="row">
          {points.map((item, idx) => (
            <div className="col-md-4 mb-4 d-flex align-items-stretch" key={idx}>
              <div className="card p-4 text-center shadow-sm w-100" data-aos="zoom-in">
                <i className={`${item.iconClass} fs-1 mb-3`}></i>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  );
};

export default Tailoring;
