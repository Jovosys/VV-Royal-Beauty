import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components Css/Bridal.css';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
// client review
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Carousel from 'react-bootstrap/Carousel';
import ScrollTrigger from 'gsap/ScrollTrigger';
import BridalModel from '../assets/Bridal/Bridal Model1.jpg'
import AariWork from '../assets/About/aariwork.jpg'
import Barathanattiyam from '../assets/About/Barathanattiyam.jpg'
gsap.registerPlugin(ScrollTrigger);

//experience 
const experiences = [
  {
    title: 'Bridal Makeup',
    image: BridalModel,
    description: 'Expert in traditional & HD bridal makeup styles.'
  },
  {
    title: 'Fashion Show',
    image: Barathanattiyam,
    description: 'Runway-ready looks for fashion events.'
  },
  {
    title: 'Movie Makeup',
    image: BridalModel,
    description: 'Cinematic makeup for film & TV.'
  },
  {
    title: 'Party Makeup',
    image: Barathanattiyam,
    description: 'Trendy styles for special occasions.'
  },
  {
    title: 'Party Makeup',
    image: Barathanattiyam,
    description: 'Trendy styles for special occasions.'
  },
  {
    title: 'Party Makeup',
    image: Barathanattiyam,
    description: 'Trendy styles for special occasions.'
  },
  {
    title: 'Party Makeup',
    image: Barathanattiyam,
    description: 'Trendy styles for special occasions.'
  },
  {
    title: 'Party Makeup',
    image: Barathanattiyam,
    description: 'Trendy styles for special occasions.'
  }
];

//makeup services

const services = [
  {
    title: 'Bridal Makeup',
    description: 'Perfect look for your big day with long-lasting finish.',
    image: BridalModel
  },
  {
    title: 'Party Makeup',
    description: 'Glam up for birthdays, receptions and more.',
    image: Barathanattiyam
  },
  {
    title: 'HD Makeup',
    description: 'Flawless high-definition makeup for photos and videos.',
    image: AariWork
  },
  {
    title: 'Engagement Look',
    description: 'Elegant and soft glam makeup for engagements.',
    image: Barathanattiyam
  },
  {
    title: 'Photoshoot Makeup',
    description: 'Creative looks for bridal portfolios and events.',
    image: Barathanattiyam
  },
  {
    title: 'Movie / TV Makeup',
    description: 'Professional looks for screen and stage.',
    image: Barathanattiyam
  }
];

//portfolio

const portfolioItems = [
  { img: BridalModel, title: 'Bridal Look' },
  { img: Barathanattiyam, title: 'Reception Look' },
  { img: BridalModel, title: 'Engagement Makeup' },
  { img: Barathanattiyam, title: 'Fashion Shoot' },
  { img: AariWork, title: 'Traditional Bridal' },
  { img: Barathanattiyam, title: 'Fashion Shoot' },
  { img: AariWork, title: 'Traditional Bridal' },
  { img: BridalModel, title: 'Outdoor Bridal Shoot' }
];

//client reviews

const reviews = [
  {
    name: 'Priya Sharma',
    review: 'Absolutely loved the bridal look! Got so many compliments on my big day.',
    image: BridalModel
  },
  {
    name: 'Meena R.',
    review: 'The makeup lasted all night! Very professional and warm service.',
    image: BridalModel
  },
  {
    name: 'Divya Patel',
    review: 'I booked them for both engagement and wedding – flawless work!',
    image: AariWork
  }
];


function Bridal() {
const cardRefs = useRef([]);

  useEffect(() => {
//experience
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });

    gsap.from('.section-title', {
      scrollTrigger: '.section-title',
      y: 50,
      opacity: 5,
      ease: 'ease-in-out'
    });

    gsap.utils.toArray('.flip-card').forEach(card => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%'
        },
        y: 50,
        opacity: 5,
        duration: 5
      });
    });

    //about
    gsap.from(".intro-top-text", {
      scrollTrigger: ".intro-top-text",
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".intro-content", {
      scrollTrigger: ".intro-content",
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
    });

    gsap.from(".intro-image", {
      scrollTrigger: ".intro-image",
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
    });

    //makeup services
    AOS.init({
    duration: 1000,
    once: true,
  });

  }, []);
  return (
    <div className="App">
      {/* 1. Hero Section */}
      <section className="hero-carousel-section">
      <Carousel fade indicators={false} controls={true} interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src={BridalModel}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src={Barathanattiyam}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src={AariWork}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </section>

      {/* 2. About Section */}
      <section className="container my-3">
      <div className="intro-top-text text-center mb-3">
        <h1 className="fw-bold fs-2 text-dark">Best Bridal Makeup Artist in Erode</h1>
        <div className="available d-flex justify-content-center align-items-center">
        <p className="text-dark w-50 fs-5">
          Available for Bridal Makeup, Wedding Makeup, Movies Makeup, Ad film Makeup, Portfolio Fashion show Makeup,
          TV Channels Makeup, Events Makeup, Party Makeup
        </p>
        </div>
      </div>

      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-lg-4 mb-3 intro-image">
          <img src={BridalModel} alt="Bridal Makeup" className="img-fluid rounded bridalmodel-about" />
        </div>

        {/* Right Content */}
        <div className="col-md-8 intro-content mb-5">
          <h2 className="fw-bold text-uppercase text-center">Make Your Day Memorable</h2>
          <div className="about-content">
          <p>
            Find the Best Bridal Makeup Artist in Chennai,Tamilnadu.Choose the Phenomenal 
            Makeup Artist in Chennai,Wedding Makeup Artist in Chennai,Bridal Makeup Artist in 
            Erode having 25+ years of experience in making the bride to look gorgeous with his 
            hand-touch makeover service. With this illustrious experience, Bridal Makeup Artist 
            Vijay has earned tremendous appreciation from every clients. He is specialised in 
            offering Bridal Makeup , Celebrity Makeup , Portrait Makeup and more.
          </p>
          <p>
            Our team uses top-quality products, advanced techniques, and personalized consultations to highlight your natural beauty.
            Be it traditional or modern, your dream bridal look is just one appointment away.
          </p>
          </div>
        </div>
      </div>
      <div className="bridal-enquiry">
      <p className='fw-bold text-primary'>For Bridal Makeup services? Please Contact @ Royal Beauty +91 12345678 / 12345678 !</p>
      </div>
    </section>

      {/* 3. Experience Section */}
      <section className="experience-section" id="experience">
      <div className="container">
        <h3 className="section-title text-center mb-5">Experience</h3>
        <div className="row g-4">
          {experiences.map((exp, index) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3"
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="experience-card">
                <div className="card-inner">
                  <div className="card-front">
                    <img src={exp.image} alt={exp.title} className="img-fluid" />
                    <h5>{exp.title}</h5>
                  </div>
                  <div className="card-back">
                    <p>{exp.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* 4. Makeup Services Section */}

      <section className="services-section py-5" id="services">
      <div className="container">
        <h4 className="section-title text-center mb-5">Our Makeup Services</h4>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-sm-6 col-lg-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-card text-center">
                <img src={service.image} className="icon-box"></img>
                <h5 className="mt-3">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* 5. Portfolio Section */}

    <section className="portfolio-section py-5" id="portfolio">
      <div className="container">
        <h4 className="section-title text-center mb-4">Our Portfolio</h4>
        <div className="row g-4">
          {portfolioItems.map((item, index) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="portfolio-card">
                <img src={item.img} alt={item.title} className="img-fluid" />
                <div className="overlay">
                  <div className="overlay-text">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> 

      {/* 6. Our Team Section */}
      <section className="container my-5">
        <h5 className="section-title text-center mb-4">Our Team</h5>
        <div className="row text-center">
          {[1, 2, 3].map((item) => (
            <div className="col-md-4 mb-4" key={item}>
              <div className="card Team-card">
                <img src={BridalModel} className="card-img-top our-Team-img" alt="Team" />
                <div className="card-body">
                  <h5 className="card-title">Artist {item}</h5>
                  <p className="card-text">Professional makeup artist with {item + 2} years of experience.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Reviews Section */}

    <section className="review-section py-5" id="reviews">
      <div className="container" data-aos="fade-up">
        <h6 className="section-title text-center mb-5">Our Clients Say</h6>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review-card text-center mx-auto">
                <img
                  src={review.image}
                  alt={review.name}
                  className="client-img rounded-circle"
                />
                <p className="review-text mt-3">"{review.review}"</p>
                <h6 className="client-name mt-2">{review.name}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    {/* review section */}
    </div>
  );
}

export default Bridal;
