import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../Components Css/Aari.css";
// Testimonials review
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AariBg from '../assets/Aari_Work/aari.jpg'
import Design1 from '../assets/Aari_Work/design1.jfif'
import Design2 from '../assets/Aari_Work/design2.jfif'
import Design3 from '../assets/Aari_Work/design3.jfif'
import Design4 from '../assets/Aari_Work/design4.jpg'
import Design5 from '../assets/Aari_Work/design5.jpg'
import Design6 from '../assets/Aari_Work/design6.jpg'

const aaridesigns = [
  { img: Design1, title: 'Design1' },
  { img: Design2, title: 'Design2' },
  { img: Design3, title: 'Design3' },
  { img: Design4, title: 'Design4' },
  { img: Design5, title: 'Design5' },
  { img: Design6, title: 'Design6' },
  { img: Design5, title: 'Design5' },
  { img: Design6, title: 'Design6' }
];

// trending aari work
const trendingWorks = [
  { title: 'Bridal Aari Work', image: Design1 },
  { title: 'Peacock Pattern', image: Design2 },
  { title: 'Maggam Work', image: Design3 },
  { title: 'Stone Bead Design', image: Design4 },
  { title: 'Kundan Work', image: Design5 },
  { title: 'Gold Zari Embroidery', image: Design6 },
];

//testimonials
const reviews = [
  {
    name: 'Priya Sharma',
    review: 'Absolutely loved the bridal look! Got so many compliments on my big day.',
    image: Design1
  },
  {
    name: 'Meena R.',
    review: 'The makeup lasted all night! Very professional and warm service.',
    image: Design2
  },
  {
    name: 'Divya Patel',
    review: 'I booked them for both engagement and wedding – flawless work!',
    image: Design3
  }
];


const Aari = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (

    <div>

    <section className="aari-hero-section mt-5 py-5" id="hero">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left: Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <h5 className="text-uppercase text-warning mb-2">Aari work blouse price Starts From ₹1000</h5>
            <h1 className="display-5 fw-bold">Best Aari Work Blouse Erode</h1>
            <h4 className="text-light mb-3">Leading Aari Work Service Provider in Erode</h4>

            <p className="text-light">
              Royal Beauty Designs provides professional aari work design blouses in Erode. We offer a wide range of
              aari work in Erode, including bridal aari work blouses, simple aari work blouses, etc., to meet the
              specific needs of our clients.
            </p>

            <ul className="list-unstyled text-dark mt-3 d-flex gap-3">
              <li>⭐ 5 Star Rated Artist</li>
              <li>🧵 Stitching Included</li>
              <li>🎨 100% Unique Designs</li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="col-lg-6 text-center" data-aos="fade-left">
            <img src={AariBg} alt="Aari Work" className="img-fluid rounded shadow-lg hero-image" />
          </div>
        </div>
      </div>
    </section>
    {/* our design section */}
    <section className="ourdesign-section py-5" id="ourdesign">
      <div className="container">
        <h4 className="section-title text-center mb-4">Our Designs</h4>
        <div className="row g-4">
          {aaridesigns.map((item, index) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="ourdesign-card">
                <img src={item.img} alt={item.title} className="img-fluid" />
                <div className="aari-overlay">
                  <div className="overlay-text">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Trendig aari work */}
    <section className="trending-aari-section py-5" id="trending">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-dark" data-aos="fade-down">
          Trending Aari Work Designs
        </h2>
        <div className="row g-4">
          {trendingWorks.map((item, index) => (
            <div className="col-md-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="card aari-card shadow-sm h-100">
                <img src={item.image} className="card-img-top trending-img" alt={item.title} />
                <div className="card-body text-center">
                  <h5 className="card-title fw-semibold">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Testimonials */}
    <section className="testimonials-section py-5" id="testimonials">
          <div className="container" data-aos="fade-up">
            <h6 className="testimonials-section-title text-center fw-bold text-dark mb-5">Testimonials</h6>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonials-card text-center mx-auto">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="testimonials-client-img rounded-circle"
                    />
                    <p className="testimonials-text mt-3">"{review.review}"</p>
                    <h6 className="testimonials-client-name mt-2">{review.name}</h6>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        {/* FAQ section */}
      <section className="aari-faq-section py-5" id="faq">
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

export default Aari;
