import React from "react";
import "../Components Css/Home.css";
import { Helmet } from "react-helmet-async";
import videoSrc from "../assets/home.mp4";
import img1 from "../assets/Images/model-1.jpg";
import img2 from "../assets/Images/model-2.jpg";
import img3 from "../assets/Images/model-3.jpg";
import img4 from "../assets/Images/model-4.jpg";
import img5 from "../assets/Images/model-5.jpg";


export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Best Bridal Makeup in Komarapalayam & Tamil Nadu</title>
        <meta
          name="description"
          content="Get the perfect bridal look from Komarapalayam’s top makeup artist. Serving weddings and events across Tamil Nadu with love, style, and glam."
        />
        <meta
          name="keywords"
          content="VV Royal Beauty, women's salon Komarapalayam, bridal makeup Komarapalayam, boutique Komarapalayam, tailoring for women, Aari work Komarapalayam, ladies beauty parlour Namakkal, Zumba classes Komarapalayam, fitness yoga for women, Bharatanatyam dance classes, women's grooming, bridal services Tamil Nadu, ladies beauty care, smart career coaching for women"
        />
        <meta name="author" content="VV Royal Beauty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="your-google-site-verification-code"
        />
        <link rel="canonical" href="https://www.vvroyalbeauty.com" />
      </Helmet>

      {/* Home Main page */}

      <video width="100%" height="850px" autoPlay loop muted playsInline>
        <source src={videoSrc} className="video-home" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* small about */}

      <div className="home-about">
        <div className="home-content">
          <h1>Best Bridal Makeup Services in Komarapalayam & Tamil Nadu</h1>
          <p>Your journey to beauty and elegance starts here.</p>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>

      {/* Services */}
      <div className="home-services">
        <div className="services-home">
          <h2 className="services-head">Our Services</h2>
          <ul>
            <li>Bridal Makeup</li>
            <li>Fashion Boutique</li>
            <li>Aari Work</li>
            <li>Tailoring</li>
            <li>Fitness & Yoga</li>
            <li>Bharatanatyam Classes</li>
            <li>Smart Career Coaching</li>
          </ul>
        </div>
      </div>


      {/*Gallery  */}

      <div className="home-gallery">
        <h2 className="gallery-home">Gallery</h2>
        <p>Explore our stunning transformations and creative works.</p>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={img1} alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
            <img src={img2} alt="Gallery Image 2" />
          </div>
          <div className="gallery-item">
            <img src={img3} alt="Gallery Image 3" />
          </div>
          <div className="gallery-item">
            <img src={img4} alt="Gallery Image 4" />
          </div>
          <div className="gallery-item">
            <img src={img5} alt="Gallery Image 5" />
          </div>
        </div>
      </div>
    </div>
  );
}
