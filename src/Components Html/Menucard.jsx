import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Components Css/Menucard.css";
import Hairstyle from '../assets/Menucard/hairstyle.jpg'
import Mehndi from '../assets/Menucard/mehndi.avif'
import Facial from '../assets/Menucard/facial.avif'
import Saree from '../assets/Menucard/saree.jfif'
import Nailart from '../assets/Menucard/nailart.jpg'


const Menucard = () => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: "Hair Styling",
      desc: "Trendy hairstyles that suit every occasion.",
      details:
        "From curls to buns, braids to modern hairstyles – we ensure a perfect look for any function.",
      packages: [
        { name: "Creative Haircut", price: "₹3,000" },
        { name: "Haircut Advanced", price: "₹1,500" },
        { name: "Haircut Basic", price: "₹800" },
      ],
      img: Hairstyle,
    },
    {
      title: "Advanced Styling",
      desc: "Trendy hairstyles that suit every occasion.",
      details:
        "From curls to buns, braids to modern hairstyles – we ensure a perfect look for any function.",
      packages: [
        { name: "Ironing-S/M/L", price: "₹520/ 650 / 760" },
        { name: "Roller Settings", price: "₹500" },
      ],
      img: Hairstyle,
    },
    {
      title: "Head Massage",
      desc: "Trendy hairstyles that suit every occasion.",
      details:
        "From curls to buns, braids to modern hairstyles – we ensure a perfect look for any function.",
      packages: [
        { name: "Pure Coconut Nourisher", price: "₹350" },
        { name: "Menthol Chiller", price: "₹350" },
        { name: "Almondindulgence", price: "₹450" },
        { name: "Olive oil", price: "₹450" },
      ],
      img: Hairstyle,
    },
    {
      title: "Hair Spas",
      desc: "Trendy hairstyles that suit every occasion.",
      details:
        "From curls to buns, braids to modern hairstyles – we ensure a perfect look for any function.",
      packages: [
        { name: "Hair Spa - S/M/L", price: "₹750/ 950/ 1150" },
      ],
      img: Hairstyle,
    },
    {
      title: "Scalp Treatments",
      desc: "Trendy hairstyles that suit every occasion.",
      details:
        "From curls to buns, braids to modern hairstyles – we ensure a perfect look for any function.",
      packages: [
        { name: "Anti-dandruff treatment - S/M/L", price: "₹1000 / 1200 / 1500" },
      ],
      img: Hairstyle,
    },
    {
      title: "Hair Colouring",
      desc: "Trendy hairstyles that suit every occasion.",
      details:
        "From curls to buns, braids to modern hairstyles – we ensure a perfect look for any function.",
      packages: [
        { name: "Henna Colouring - S/M/L", price: "₹350" },
        { name: "Pro10 Global Colouring - S/M/L", price: "₹1000 / 1200 / 1800 " },
        { name: "Global Colouring -S/M/L", price: "₹1400/ 2250 / 3300 " },
        { name: "Premium Colouring (Ammonia Free) - S/M/L", price: "₹2000/ 2800 / 3500 " },
      ],
      img: Hairstyle,
    },
    {
      title: "Root Touch Up",
      desc: "Trendy hairstyles that suit every occasion.",
      details:
        "From curls to buns, braids to modern hairstyles – we ensure a perfect look for any function.",
      packages: [
        { name: "Pro Colouring", price: "₹550" },
        { name: "Regular Colouring", price: "₹850" },
        { name: "Premium Colouring (Ammonia Free)", price: "₹1200" },
      ],
      img: Hairstyle,
    },
    {
      title: "Fashion Streaks",
      desc: "Glow with our premium facial & skincare treatments.",
      details:
        "Brightening facials, anti-aging treatments, and skin rejuvenation to give you a radiant glow.",
      packages: [
        { name: "Streaks", price: "₹250" },
        { name: "Advanced Streaks", price: "₹350" },
        { name: "Partial Highlights(12 steak)", price: "₹3,300" },
        { name: "Full Highlights(18 steak)", price: "₹4,500" },
      ],
      img: Mehndi,
    },
    {
      title: "Skincare",
      desc: "Glow with our premium facial & skincare treatments.",
      details:
        "Brightening facials, anti-aging treatments, and skin rejuvenation to give you a radiant glow.",
      packages: [
        { name: "Herable Fac Clean Up", price: "₹300" },
        { name: "Skin Lightening Face Clean Up", price: "₹400" },
        { name: "Insta whitening Cleaning Up", price: "₹1,200" },
      ],
      img: Facial,
    },
    {
      title: "Facials For Dehydration",
      desc: "Glow with our premium facial & skincare treatments.",
      details:
        "Brightening facials, anti-aging treatments, and skin rejuvenation to give you a radiant glow.",
      packages: [
        { name: "Fruit Secret Facial", price: "₹750" },
        { name: "Gold Facial", price: "₹1,200" },
        { name: "Insta Whitening Facial", price: "₹2,500" },
        { name: "Oxygen Facial", price: "₹2,000" },
        { name: "Oxygen Sacial with Eye Treatment", price: "₹3,000" },

      ],
      img: Facial,
    },
    {
      title: "Facials For Fine Lines / Wrinkles ",
      desc: "Glow with our premium facial & skincare treatments.",
      details:
        "Brightening facials, anti-aging treatments, and skin rejuvenation to give you a radiant glow.",
      packages: [
        { name: "Herbal Secrets Facial", price: "₹740" },
        { name: "24 Karat Gold Facial", price: "₹2,000" },
        { name: "24 Karat Gold Facial Double Mask", price: "₹3000" },
      ],
      img: Facial,
    },
    {
      title: "Facials For Lightening",
      desc: "Glow with our premium facial & skincare treatments.",
      details:
        "Brightening facials, anti-aging treatments, and skin rejuvenation to give you a radiant glow.",
      packages: [
        { name: "Aroma Skin Lightening Facial", price: "₹1,000" },
        { name: "vita-C Glow Facial", price: "₹1,400" },
        { name: "vita-C Glow Facial Double Mask", price: "₹1,750" },
      ],
      img: Facial,
    },
    {
      title: "Pedicures",
      desc: "Perfect saree draping styles to complement your look.",
      details:
        "We provide modern and traditional saree draping styles to complete your elegant bridal look.",
      packages: [
        { name: "Regular Pedicure", price: "₹500" },
        { name: " Spa Pedicure", price: "₹750" },
        { name: "Heel Peel Treatment", price: "₹1800" },
        { name: "Ice Cream Pedicure", price: "₹800" },
      ],
      img: Saree,
    },
    {
      title: "Manicures",
      desc: "Perfect saree draping styles to complement your look.",
      details:
        "We provide modern and traditional saree draping styles to complete your elegant bridal look.",
      packages: [
        { name: "Regular Manicure", price: "₹300" },
        { name: "Spa Manicure", price: "₹550" },
        { name: "Ice Cream Manicure", price: "₹600" },
      ],
      img: Saree,
    },
    {
      title: "Waxing Cattriege",
      desc: "Perfect saree draping styles to complement your look.",
      details:
        "We provide modern and traditional saree draping styles to complete your elegant bridal look.",
      packages: [
        { name: "Half Arms", price: "₹150" },
        { name: "Full Arms", price: "₹300" },
        { name: "Half Legs", price: "₹250" },
        { name: "Full Legs", price: "₹350" },
        { name: "Full Body", price: "₹1,800" },
      ],
      img: Saree,
    },
    {
      title: "Waxing",
      desc: "Perfect saree draping styles to complement your look.",
      details:
        "We provide modern and traditional saree draping styles to complete your elegant bridal look.",
      packages: [
        { name: "Face sides", price: "₹50" },
        { name: "Half Arms", price: "₹100" },
        { name: "Full Arms", price: "₹250" },
        { name: "Half Legs", price: "₹100" },
        { name: "Full Legs", price: "₹300" },
        { name: "Lower Back / Upper Back / Midriff", price: "₹300" },
        { name: "Full Back", price: "₹350" },
        { name: "Full Body", price: "₹1,400" },
      ],
      img: Saree,
    },
    {
      title: "Texture",
      desc: "Perfect saree draping styles to complement your look.",
      details:
        "We provide modern and traditional saree draping styles to complete your elegant bridal look.",
      packages: [
        { name: "Premium Straightening / Smoothening - S/M/L", price: "₹3,500 / 5,500 / 6850" },
        { name: "Premium Rebonding - S/M/L", price: "₹5,300 / 6,400 / 9,600" },
        { name: "Kertain Treatment - S/M/L", price: "₹2,000 / 3,500 / 5,500" },
      ],
      img: Nailart,
    },
  ];

  return (
    <section className="menu-card-section py-5" id="services">
      <div className="container">
        <h2 className="text-center fw-bold mt-5 mb-5" data-aos="fade-up">
          Our Beauty Services
        </h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              key={index}
              data-aos="zoom-in"
            >
              <div className="card h-100 shadow border-0 menu-card">
                <img
                  src={service.img}
                  className="card-img-top"
                  alt={service.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text">{service.desc}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedService(service)}
                    data-bs-toggle="modal"
                    data-bs-target="#serviceModal"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="serviceModal"
        tabIndex="-1"
        aria-labelledby="serviceModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            {selectedService && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title fw-bold" id="serviceModalLabel">
                    {selectedService.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="text-center">
                    <img
                      src={selectedService.img}
                      alt={selectedService.title}
                      className="img-fluid w-50 rounded mb-3"
                    />
                    <p>{selectedService.details}</p>
                  </div>

                  {/* Price List / Packages */}
                  <h6 className="fw-bold mt-4">Available Packages:</h6>
                  <ul className="list-group list-group-flush text-start mt-2">
                    {selectedService.packages.map((pkg, i) => (
                      <li
                        key={i}
                        className="list-group-item d-flex justify-content-between"
                      >
                        <span>{pkg.name}</span>
                        <span className="fw-bold text-primary">
                          {pkg.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Booking Form */}
                  <h6 className="fw-bold mt-4">Book Your Appointment</h6>
                  <form className="mt-3">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Your Phone Number"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="date"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <select className="form-select" required>
                        <option value="">Select Package</option>
                        {selectedService.packages.map((pkg, i) => (
                          <option key={i} value={pkg.name}>
                            {pkg.name} - {pkg.price}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                      Confirm Booking
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menucard;
