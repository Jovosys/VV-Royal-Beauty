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
    desc: "We deliver high-quality stitching tailored to your measurements with perfect fit.",
  },
  {
    iconClass: "bi bi-cash-coin text-primary",
    title: "Affordable Price",
    desc: "Get stylish and quality tailoring at reasonable rates without any compromise.",
  },
  {
    iconClass: "bi bi-alarm-fill text-warning",
    title: "Timely Delivery",
    desc: "We value your time and always ensure prompt delivery of every order.",
  },
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
      <section className="Tailoring-hero-section">
        <div className="overlay" />

        <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="hero-heading text-light" data-aos="fade-down">
            Tailoring Service for <br />
            <span className="span-text-tailoring">Men, Women & Kids</span>
          </h1>
          <button className="btn btn-warning mt-4 fw-bold" onClick={bookForm}>
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
      <section className="about-us-section py-5">
        <div className="container">
          {/* Section Heading */}
          <div className="row mb-5">
            <div className="col text-center">
              <h2 className="section-heading" data-aos="fade-down">
                About Us
              </h2>
            </div>
          </div>

          <div className="row align-items-center">
            {/* Left Content */}
            <div
              className="col-lg-6 col-md-12 mb-4 mb-lg-0"
              data-aos="fade-right"
            >
              <div className="about-content">
                <p className="about-text">
                  At our tailoring studio, we blend tradition and modern trends
                  to create beautifully crafted outfits that reflect your unique
                  personality. With decades of experience in fashion design, our
                  team is dedicated to delivering premium quality stitching,
                  customized fittings, and the finest finishing touches. Whether
                  it’s bridal wear, casuals, or professional attire, our
                  meticulous attention to detail ensures every outfit fits you
                  perfectly.
                </p>
                <p className="about-text">
                  We pride ourselves on our client-first approach, offering
                  consultations, fabric recommendations, and quick delivery
                  options to meet your schedule. Our goal is to provide not just
                  garments, but confidence and elegance that elevate your style.
                  Let us stitch your story with precision, creativity, and care.
                </p>
              </div>
            </div>

            {/* Right Carousel */}
            <div className="col-lg-6 col-md-12" data-aos="fade-left">
              <div
                id="tailoringCarousel"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner rounded shadow">
                  <div className="carousel-item active">
                    <img
                      src={services1}
                      className="d-block w-100"
                      alt="Slide 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={services2}
                      className="d-block w-100"
                      alt="Slide 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={services3}
                      className="d-block w-100"
                      alt="Slide 3"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={aboutImg}
                      className="d-block w-100"
                      alt="Slide 4"
                    />
                  </div>
                </div>

                {/* Carousel Controls (optional) */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#tailoringCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#tailoringCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about us end */}
      {/* services section */}
      <section className="services-section py-5" id="services">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" data-aos="fade-up">
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
          <h2 className="text-center mens-heading mb-5 fw-bold" data-aos="fade-up">
            Men's Tailoring
          </h2>
          <div className="row justify-content-start">
            <div
              className="col-12 col-md-8 col-lg-6 text-light overlay-content"
              data-aos="fade-right"
            >
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
            <button className="btn btn-warning fw-bold" onClick={mensForm}>
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
          <h2 className="text-center text-dark mb-5 fw-bold" data-aos="fade-up">
            Women's Tailoring
          </h2>
          <div className="row justify-content-start">
            <div
              className="col-12 col-md-8 col-lg-6 text-dark overlay-content"
              data-aos="fade-right"
            >
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
            <button className="btn btn-warning fw-bold" onClick={womensForm}>
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
              <div
                className="col-md-4 mb-4 d-flex align-items-stretch"
                key={idx}
              >
                <div
                  className="card p-4 text-center shadow-sm w-100"
                  data-aos="zoom-in"
                >
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
