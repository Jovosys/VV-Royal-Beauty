import React, { useEffect, useState } from "react";
import "../Components Css/Bharathanatyam.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BookTrialForm from "./BookTrialForm";
import bharatanatyamImg from "../assets/Bharathanatayam/B-about.jpg";
import bharatanatyamClasses1 from "../assets/Bharathanatayam/B-classes1.jpg";
import bharatanatyamClasses2 from "../assets/Bharathanatayam/B-classes2.jpg";
import bharatanatyamClasses3 from "../assets/Bharathanatayam/B-classes3.jpg";

export default function Bharatanatyam() {
  const [bookTrailForm, setBookTrailForm] = useState(false);

  const trialForm = () => {
    setBookTrailForm(!bookTrailForm);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const classData = [
    {
      id: 1,
      title: "Beginner Batch",
      description:
        "Learn basic steps, mudras, and rhythms for a strong foundation.",
      image: bharatanatyamClasses1,
    },
    {
      id: 2,
      title: "Intermediate Batch",
      description:
        "Improve stamina and master jathis, adavus, and expressions.",
      image: bharatanatyamClasses2,
    },
    {
      id: 3,
      title: "Advanced Batch",
      description:
        "Refine abhinaya and perform complete margams with confidence.",
      image: bharatanatyamClasses3,
    },
  ];

  // instructor
  const instructors = [
    {
      id: 1,
      name: "Smt. Anjali Devi",
      experience: "15+ Years Experience",
      image: bharatanatyamClasses1,
    },
    {
      id: 2,
      name: "Sri. Ravi Kumar",
      experience: "12+ Years Experience",
      image: bharatanatyamClasses2,
    },
    {
      id: 3,
      name: "Smt. Meena Raj",
      experience: "10+ Years Experience",
      image: bharatanatyamClasses3,
    },
    {
      id: 4,
      name: "Sri. Aravind",
      experience: "8+ Years Experience",
      image: bharatanatyamClasses2,
    },
    {
      id: 5,
      name: "Smt. Lakshmi Priya",
      experience: "9+ Years Experience",
      image: bharatanatyamClasses3,
    },
    {
      id: 6,
      name: "Sri. Harish Rao",
      experience: "7+ Years Experience",
      image: bharatanatyamClasses1,
    },
  ];

  const slide1 = instructors.slice(0, 3);
  const slide2 = instructors.slice(3, 6);

  // review section
  const reviews = [
    {
      id: 1,
      name: "Aruna S.",
      date: "March 2024",
      rating: 5,
      comment:
        "Amazing experience! The instructors are highly skilled and very patient.",
      avatar: bharatanatyamClasses1,
    },
    {
      id: 2,
      name: "Kavitha R.",
      date: "February 2024",
      rating: 4,
      comment: "Loved the atmosphere and the personalized attention in class.",
      avatar: bharatanatyamClasses3,
    },
    {
      id: 3,
      name: "Meera D.",
      date: "January 2024",
      rating: 5,
      comment: "Bharatanatyam classes helped boost my confidence and grace!",
      avatar: bharatanatyamClasses2,
    },
    {
      id: 4,
      name: "Lakshmi V.",
      date: "April 2024",
      rating: 5,
      comment: "Perfect blend of tradition and teaching. Highly recommended!",
      avatar: bharatanatyamClasses3,
    },
    {
      id: 5,
      name: "Sowmya K.",
      date: "May 2024",
      rating: 4,
      comment: "Flexible class timings and dedicated staff. Great learning!",
      avatar: bharatanatyamClasses1,
    },
    {
      id: 6,
      name: "Divya S.",
      date: "June 2024",
      rating: 5,
      comment:
        "The online classes are just as effective as in-person. Thank you!",
      avatar: bharatanatyamClasses2,
    },
  ];

  // const firstSlide = reviews.slice(0, 3);
  // const secondSlide = reviews.slice(3, 6);

  return (
    <div className="bharathanatyam">
      {/* Hero Section */}
      <section className="Bhara-hero-section">
        <div className="overlay" />
        <div className="container-fluid h-100 d-flex justify-content-center align-items-center">
          <div className="hero-content text-center text-light px-3">
            <h1 className="hero-heading text-uppercase " data-aos="fade-down">
              Learn Bharathanatayam
              <br />
              <span className="span-text">Live and Online Classes</span>
            </h1>
            <button
              className="btn btn-warning mt-4 fw-bold px-4 py-2"
              data-aos="zoom-in"
              onClick={trialForm}
            >
              Book a Free Trial
            </button>
            {bookTrailForm && (
              <div className="mt-4">
                <BookTrialForm closeIcon={() => setBookTrailForm(false)} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* why learn section */}
      <section className="why-learn-section py-5" id="why-learn">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
              <img
                src={bharatanatyamImg}
                alt="Why Learn Bharatanatyam"
                className="img-fluid rounded-4 shadow"
              />
            </div>

            {/* Right Content */}
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="mb-3 text-dark fw-bold">
                Why Learn Bharatanatyam?
              </h2>
              <p className="text-secondary fs-6 lh-lg text-justify">
                Bharatanatyam is one of the oldest and most celebrated classical
                dance forms in India, rich in tradition, spiritual depth, and
                artistic excellence. Learning Bharatanatyam is not just about
                mastering movements; it is a journey into discipline,
                expression, and cultural appreciation. This dance form enhances
                physical flexibility, improves concentration, and promotes
                mental well-being. Students gain confidence, communication
                skills, and a deeper understanding of Indian heritage.
                Bharatanatyam also helps in storytelling, as each gesture and
                expression holds a unique meaning. With its structured technique
                and meditative quality, Bharatanatyam brings harmony between
                body and soul. Whether you're looking for a creative outlet,
                physical fitness, or spiritual enrichment, Bharatanatyam opens
                doors to a world of timeless art and inner growth. Join our live
                or online classes and start your journey with experienced
                professionals in a welcoming environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* bharatanatyam classes section */}
      <section className="bharatanatyam-classes py-5">
        <div className="container">
          <h2 className="text-center mb-5 text-dark fw-bold" data-aos="fade-up">
            Bharatanatyam Classes
          </h2>
          <div className="row">
            {classData.map((cls, index) => (
              <div
                className="col-md-6 col-lg-4 mb-4"
                key={cls.id}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="class-card">
                  <div
                    className="class-image"
                    style={{ backgroundImage: `url(${cls.image})` }}
                  ></div>
                  <div className="class-content">
                    <h5 className="class-title">{cls.title}</h5>
                    <p className="class-desc">{cls.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* meet our instructor section */}
      <section className="instructor-section py-5" id="instructors">
        <div className="container">
          <h2 className="text-center text-dark fw-bold mb-5" data-aos="fade-up">
            Meet Our Talented Instructors
          </h2>

          <div
            id="instructorCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-aos="fade-up"
          >
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="row">
                  {slide1.map((inst) => (
                    <div className="col-md-4 mb-4" key={inst.id}>
                      <div className="card meet-instructor-card shadow">
                        <img
                          src={inst.image}
                          className="card-img-top"
                          alt={inst.name}
                        />
                        <div className="card-body text-center">
                          <h5 className="card-title text-dark">{inst.name}</h5>
                          <p className="card-text text-muted">
                            {inst.experience}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="row">
                  {slide2.map((inst) => (
                    <div className="col-md-4 mb-4" key={inst.id}>
                      <div className="card instructor-card shadow">
                        <img
                          src={inst.image}
                          className="card-img-top"
                          alt={inst.name}
                        />
                        <div className="card-body text-center">
                          <p className="card-text text-muted">
                            {inst.experience}
                          </p>
                        </div>
                      </div>
                      <h5 className="card-title text-dark">{inst.name}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#instructorCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#instructorCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* review section */}
      <section className="feedback-section py-5" id="feedback">
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
                <div className="feedback-card text-center mx-auto">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="client-img rounded-circle"
                  />
                  <h6 className="client-name mt-2">{review.name}</h6>
                  <div className="text-warning">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                  <p className="feedback-text mt-3">"{review.comment}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
