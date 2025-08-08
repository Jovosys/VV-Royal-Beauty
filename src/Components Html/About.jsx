import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import ownerImage from "../assets/About/owner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Components Css/About.css";
import BridalMakeUp from "../assets/About/BridalMakeUp.png";
import AariWork from "../assets/About/aariwork.jpg";
import Tailoring from "../assets/About/Tailoring.jpg";
import Fitness from "../assets/About/Fitness.png";
import Barathanattiyam from "../assets/About/Barathanattiyam.jpg";
import Career from "../assets/About/career.jpg";
import Bharatanatyam from "./Bharatanatyam";

const works = [
  { id: 1, title: "Bridal Makeup", image: BridalMakeUp },
  { id: 2, title: "Aari work", image: AariWork },
  { id: 3, title: "Tailoring", image: Tailoring },
  { id: 4, title: "Fitness and Yoga", image: Fitness },
  { id: 5, title: "Barathanattiyam", image: Barathanattiyam },
  { id: 6, title: "Career Coaching", image: Career },
];
//services

const services = [
  {
    title: "Bridal Makeup",
    desc: "Premium bridal makeover package",
    img: BridalMakeUp,
  },
  {
    title: "Mehndi Design",
    desc: "Traditional and modern mehndi styles",
    img: Barathanattiyam,
  },
  { title: "Aari Work", desc: "Custom embroidery and handwork", img: AariWork },
  {
    title: "Hair Styling",
    desc: "Trendy hairdos for all occasions",
    img: Fitness,
  },
  {
    title: "Facial Treatments",
    desc: "Glow-enhancing facial packs",
    img: "https://via.placeholder.com/300x200",
  },
  {
    title: "Spa Services",
    desc: "Relaxing body massages and spa",
    img: "https://via.placeholder.com/300x200",
  },
  {
    title: "Tailoring",
    desc: "Custom-fit bridal dresses",
    img: "https://via.placeholder.com/300x200",
  },
  {
    title: "Nail Art",
    desc: "Creative nail design options",
    img: "https://via.placeholder.com/300x200",
  },
  {
    title: "Fitness Training",
    desc: "Pre-wedding fitness packages",
    img: "https://via.placeholder.com/300x200",
  },
  {
    title: "Jewellery Rental",
    desc: "Traditional and modern sets",
    img: "https://via.placeholder.com/300x200",
  },
  {
    title: "Photo Shoot",
    desc: "Bridal and pre-wedding shoots",
    img: "https://via.placeholder.com/300x200",
  },
  {
    title: "Saree Draping",
    desc: "Perfect draping for every bride",
    img: "https://via.placeholder.com/300x200",
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <div className="about-container overflow-hidden">
        {/* about-section 1 */}
        {/* part 1 */}
        <div className="about-section1">
          <div className="about-background"></div>
        </div>
        {/* about - section 1 end */}
        {/* about - section 2 */}
        <div id="about-section2">
          <div className="section2-title">
            <h2 className="section2-heading fw-bold">Owner Info</h2>
          </div>
          <div className="about-section2">
            <div className="owner-section">
              <div data-aos="flip-left">
                <img src={ownerImage} alt="Owner" className="owner-image" />
              </div>
              <h2 className="owner-name">Shanmugam R</h2>
              <p>Founder & Professional Bridal Makeup Artist</p>
            </div>

            <div className="company-section">
              <h2 className="shop-name">Royal Beauty parlour</h2>
              <p className="tagline">"Where Beauty Meets Elegance"</p>
              <p className="owner-description">
                We are a professional bridal makeup service based in Erode,
                providing elegant, long-lasting bridal looks for your special
                day. With over 5 years of experience, we specialize in HD
                makeup, party looks, and complete wedding grooming packages.
              </p>
              <p>
                <strong>Location:</strong> Erode, Tamil Nadu
              </p>
              <p>
                <strong>Experience:</strong> 5+ Years in Bridal Industry
              </p>
            </div>
          </div>
          {/* part 2 */}
          <div className="about-section2">
            <div className="owner-section">
              <div data-aos="flip-right">
                <img src={ownerImage} alt="Owner" className="owner-image" />
              </div>
              <h2 className="owner-name">Dhivya P</h2>
              <p>Founder & Professional Aari work Artist</p>
            </div>

            <div className="company-section">
              <h2 className="shop-name">Dhivya Aari Works</h2>
              <p className="tagline">"Where Beauty Meets Elegance"</p>
              <p className="owner-description">
                We are a professional ari works service based in Erode,
                providing elegant, long-lasting embarding looks for your special
                day. With over 5 years of experience, we specialize in HD, party
                looks, and complete wedding grooming packages.
              </p>
              <p>
                <strong>Location:</strong> Erode, Tamil Nadu
              </p>
              <p>
                <strong>Experience:</strong> 3+ Years in designing Industry
              </p>
            </div>
          </div>
        </div>
        {/* about - section 2 end */}
        {/* about-section 3 vision mission */}
        <section className="vision-mission-section py-5">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Content */}
              <div
                className="col-lg-6 col-md-12 mb-4 mb-lg-0"
                data-aos="fade-right"
              >
                <div className="content-box">
                  <h2 className="section-title mb-4 d-flex flex-column align-items-center">
                    Our Vision
                  </h2>
                  <p className="section-text">
                    To be the most trusted bridal beauty brand, empowering every
                    bride with confidence, elegance, and timeless charm.
                  </p>

                  <h2 className="section-title mt-5 mb-4 d-flex flex-column align-items-center">
                    Our Mission
                  </h2>
                  <p className="section-text">
                    We strive to deliver exceptional bridal services with
                    creativity and personalized attention, ensuring
                    unforgettable wedding moments through beauty and care.
                  </p>
                </div>
              </div>

              {/* Right Carousel */}
              <div className="col-lg-6 col-md-12" data-aos="fade-left">
                <div
                  id="visionMissionCarousel"
                  className="about-carousel slide carousel-fade"
                  data-bs-ride="carousel" 
                >
                  <div className="carousel-inner rounded shadow">
                    <div className="carousel-item active">
                      <img
                        src={Barathanattiyam}
                        className="d-block w-100"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={BridalMakeUp}
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={Tailoring}
                        className="d-block w-100"
                        alt="Slide 3"
                      />
                    </div>
                  </div>

                  {/* Optional: Carousel Controls */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#visionMissionCarousel"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#visionMissionCarousel"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about - section3 end */}
        {/* about - section 4 */}
        <div className="py-1 px-5">
          <div className="ourwork container">
            <h4 className="text-center mb-5 fw-bold fs-2" data-aos="fade-up">
              Our Works
            </h4>
            <div className="row">
              {works.map((work, index) => (
                <div
                  className="col-md-4 mb-4"
                  key={work.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="card ourwork-service-card h-100 shadow-sm">
                    <img
                      src={work.image}
                      className="card-img-top"
                      alt={work.title}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{work.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* about section 4 end */}
        {/* about section 5 */}
        <section className="container py-5">
          {/* our services */}
          <div className="container my-5">
            <h2 className="text-center fw-bold mb-4">Our Services</h2>
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={4}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={service.img}
                      className="card-img-top"
                      alt={service.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{service.title}</h5>
                      <p className="card-text">{service.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        {/* about section 5 end */}
      </div>
    </div>
  );
}
