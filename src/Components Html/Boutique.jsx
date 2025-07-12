import React, { useEffect } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import BridalMakeUp from "../assets/About/BridalMakeUp.png";
import AariWork from "../assets/About/aariwork.jpg";
import Tailoring from "../assets/About/Tailoring.jpg";
import Fitness from "../assets/About/Fitness.png";
import Barathanattiyam from "../assets/About/Barathanattiyam.jpg";
import Career from "../assets/About/career.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "../Components Css/Boutique.css";

const catalogItems = [
  { title: "Bridal Wear", image: BridalMakeUp },
  { title: "Party Wear", image: AariWork },
  { title: "Casual Wear", image: Barathanattiyam },
  { title: "Designer Sarees", image: Tailoring },
  { title: "Western Wear", image: Career },
  { title: "Kids Wear", image: Fitness },
];

const makeupPlaces = [
  { title: "Bridal Studio", image: Fitness },
  { title: "Home Service", image: Barathanattiyam },
  { title: "Outdoor Shoots", image: Tailoring },
  { title: "Event Makeup", image: Barathanattiyam },
  { title: "Portfolio Shoot", image: Fitness },
  { title: "Media/TV Makeup", image: Career },
];

const Boutique = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    // hero section
    <div>
      <section className="hero-section position-relative text-white">
        <div className="hero-overlay"></div>
        <div className="container position-relative">
          <div className="row align-items-center">
            {/* Left: Carousel */}
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                loop={true}
              >
                <SwiperSlide>
                  <img
                    src={Career}
                    alt="Career"
                    className="img-fluid rounded shadow"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Fitness}
                    alt="Fitness"
                    className="img-fluid rounded shadow"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Tailoring}
                    alt="Tailoring"
                    className="img-fluid rounded shadow"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Right: Content */}
            <div className="col-lg-6" data-aos="fade-left">
              <h1 className="display-5 fw-bold text-info">Elegant & Stylish</h1>
              <p className="lead mt-3 mb-4">
                Discover our exclusive fashion collection that defines modern
                boutique style. Perfect blend of tradition and trend – designed
                just for you.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* catalog section */}
      <section className="catalog-section py-5 bg-light" id="catalog">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-down">
            Explore Our Catalog
          </h2>
          <div className="row">
            {catalogItems.map((item, index) => (
              <div
                className="col-md-4 mb-4"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="catalog-card shadow-sm rounded overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid catalog-img"
                  />
                  <div className="catalog-info text-center p-3">
                    <h5 className="mb-0">{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* work place */}
      <section
        className="makeup-places-section py-5 bg-white"
        id="makeup-places"
      >
        <div className="container">
          <h3 className="text-center mb-5 fw-bold" data-aos="fade-down">
            Makeup Service Places
          </h3>
          <div className="row">
            {makeupPlaces.map((place, index) => (
              <div
                className="col-md-4 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="place-card shadow-sm rounded overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="img-fluid place-img"
                  />
                  <div className="place-info text-center p-3">
                    <h5 className="mb-0">{place.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ section */}
      <section className="faq-section py-5 bg-light" id="faq">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" data-aos="fade-down">
            FAQ
          </h2>

          <div className="accordion" id="faqAccordion">
            {/* Item 1 */}
            <div
              className="accordion-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="accordion-header" id="faq1">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse1"
                  aria-expanded="false"
                  aria-controls="faqCollapse1"
                >
                  Do you offer bridal makeup at home?
                </button>
              </h2>
              <div
                id="faqCollapse1"
                className="accordion-collapse collapse"
                aria-labelledby="faq1"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, we provide on-location bridal makeup services to ensure
                  your comfort and convenience on your big day.
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div
              className="accordion-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="accordion-header" id="faq2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse2"
                  aria-expanded="false"
                  aria-controls="faqCollapse2"
                >
                  What makeup brands do you use?
                </button>
              </h2>
              <div
                id="faqCollapse2"
                className="accordion-collapse collapse"
                aria-labelledby="faq2"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  We use high-end professional makeup products like MAC, Huda
                  Beauty, Kryolan, and Bobbi Brown for long-lasting results.
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div
              className="accordion-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2 className="accordion-header" id="faq3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse3"
                  aria-expanded="false"
                  aria-controls="faqCollapse3"
                >
                  Can I book a makeup trial session?
                </button>
              </h2>
              <div
                id="faqCollapse3"
                className="accordion-collapse collapse"
                aria-labelledby="faq3"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Absolutely! Trial sessions can be scheduled in advance to
                  finalize your look and style preferences.
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div
              className="accordion-item"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h2 className="accordion-header" id="faq4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse4"
                  aria-expanded="false"
                  aria-controls="faqCollapse4"
                >
                  How early should I book bridal makeup?
                </button>
              </h2>
              <div
                id="faqCollapse4"
                className="accordion-collapse collapse"
                aria-labelledby="faq4"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  We recommend booking at least 2-3 months in advance,
                  especially during the wedding season, to ensure availability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boutique;
