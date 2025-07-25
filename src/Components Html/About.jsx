import React, { useState, useEffect } from "react";
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

const works = [
  { id: 1, title: "Bridal Makeup", image: BridalMakeUp },
  { id: 2, title: "Aari work", image: AariWork },
  { id: 3, title: "Tailoring", image: Tailoring },
  { id: 4, title: "Fitness and Yoga", image: Fitness },
  { id: 5, title: "Barathanattiyam", image: Barathanattiyam },
  { id: 6, title: "Career Coaching", image: Career },
];

// vision mission content

const visionText = `To be the most trusted and sought-after bridal makeup brand,
enhancing every bride’s natural beauty while creating timeless, unforgettable moments.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, porro quia, rem expedita
quod rerum voluptatem maiores minima obcaecati doloremque, sed vel illum a optio mollitia
suscipit repudiandae impedit dolore recusandae nemo? Illum enim error facilis eaque quas,
neque commodi numquam quasi odit iusto dolore exercitationem magnam aut laudantium inventore?We are committed to providing personalized and luxurious bridal beauty experiences
through expert artistry, quality products, and heartfelt service. Lorem ipsum dolor sit amet
consectetur adipisicing elit. Ratione, porro quia, rem expedita quod rerum voluptatem maiores
minima obcaecati doloremque, sed vel illum a optio mollitia suscipit repudiandae impedit dolore
recusandae nemo? Illum enim error facilis eaque quas, neque commodi numquam quasi odit iusto
dolore exercitationem magnam aut laudantium inventore?`;

const missionText = `We are committed to providing personalized and luxurious bridal beauty experiences
through expert artistry, quality products, and heartfelt service. Lorem ipsum dolor sit amet
consectetur adipisicing elit. Ratione, porro quia, rem expedita quod rerum voluptatem maiores
minima obcaecati doloremque, sed vel illum a optio mollitia suscipit repudiandae impedit dolore
recusandae nemo? Illum enim error facilis eaque quas, neque commodi numquam quasi odit iusto
dolore exercitationem magnam aut laudantium inventore?We are committed to providing personalized and luxurious bridal beauty experiences
through expert artistry, quality products, and heartfelt service. Lorem ipsum dolor sit amet
consectetur adipisicing elit. Ratione, porro quia, rem expedita quod rerum voluptatem maiores
minima obcaecati doloremque, sed vel illum a optio mollitia suscipit repudiandae impedit dolore
recusandae nemo? Illum enim error facilis eaque quas, neque commodi numquam quasi odit iusto
dolore exercitationem magnam aut laudantium inventore?`;

const getShortText = (text) => {
  return text.split(" ").slice(0, 50).join(" ") + "...";
};

export default function About() {
  //vision mission
  const [showFullVision, setShowFullVision] = useState(false);
  const [showFullMission, setShowFullMission] = useState(false);

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
        {/* about-section 3 */}
        <div className="vision-mission-section">
          <h3 className="title" data-aos="fade-up">
            Our Vision & Mission
          </h3>

          <div className="about-overlay">
            <div className="content-container">
              {/* Vision Box */}
              <div className="vision" data-aos="fade-right">
                <h5>🎯 Vision</h5>
                <p>{showFullVision ? visionText : getShortText(visionText)}</p>
                <button
                  className="btn btn-outline-warning btn-sm mt-2"
                  onClick={() => setShowFullVision(!showFullVision)}
                >
                  {showFullVision ? "Read Less" : "Read More"}
                </button>
              </div>

              {/* Mission Box */}
              <div className="mission" data-aos="fade-left">
                <h5>🎗️ Mission</h5>
                <p>
                  {showFullMission ? missionText : getShortText(missionText)}
                </p>
                <button
                  className="btn btn-outline-warning btn-sm mt-2"
                  onClick={() => setShowFullMission(!showFullMission)}
                >
                  {showFullMission ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>

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
          <div className="section5-title">
            <h3 className="section5-heading mb-5">Our Services</h3>
          </div>
          {/* Bridal Makeup Section */}
          <div className="row align-items-center justify-content-center gy-4 mb-5">
            {/* Image */}
            <div className="col-lg-4 col-md-6 d-flex align-items-center justify-content-center " data-aos="fade-right">
              <img
                src={BridalMakeUp}
                alt="Bridal Makeup"
                className="img-fluid rounded shadow w-75 "
              />
            </div>

            {/* Text */}
            <div className="col-lg-6 col-md-10" data-aos="fade-left">
              <h6 className="text-danger mb-3 fs-2">Bridal Perfection</h6>
              <p className="lead">
                Experience flawless bridal makeup that enhances your natural
                beauty and complements your wedding look.
              </p>
              <ul className="list-unstyled">
                <li>
                  <strong>📍 Location:</strong> Erode, Tamil Nadu
                </li>
                <li>
                  <strong>💄 Services:</strong> HD Bridal Makeup, Hair Styling,
                  Saree Draping
                </li>
                <li>
                  <strong>🎉 Events:</strong> Wedding, Engagement, Reception
                </li>
                <li>
                  <strong>⭐ Experience:</strong> 5+ Years
                </li>
              </ul>
            </div>
          </div>

          {/* Aari Work Section */}
          <div className="row align-items-center justify-content-center gy-4">
            {/* Text */}
            <div
              className="col-lg-6 col-md-10 order-2 order-lg-1"
              data-aos="fade-right"
            >
              <h6 className="text-danger mb-3 fs-2">Aari Work</h6>
              <p className="lead">
                Discover elegant embroidery that brings your bridal outfit to
                life with Aari Work perfection.
              </p>
              <ul className="list-unstyled">
                <li>
                  <strong>📍 Location:</strong> Coimbatore, Tamil Nadu
                </li>
                <li>
                  <strong>💄 Services:</strong> Aari Works, Hair Styling, Saree
                  Draping
                </li>
                <li>
                  <strong>🎉 Events:</strong> Wedding, Engagement, Reception
                </li>
                <li>
                  <strong>⭐ Experience:</strong> 3+ Years
                </li>
              </ul>
            </div>

            {/* Image */}
            <div
              className="col-lg-4 col-md-6 order-1 order-lg-2 d-flex align-items-center justify-content-center"
              data-aos="fade-left"
            >
              <img
                src={AariWork}
                alt="Aari Work"
                className="img-fluid rounded shadow w-75 "
              />
            </div>
          </div>
        </section>
        {/* about section 5 end */}
      </div>
    </div>
  );
}
