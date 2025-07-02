import React from "react";
import "../Components Css/Home.css";
import { Helmet } from "react-helmet-async";

import img1 from "../assets/Images/model-1.jpg";
import img2 from "../assets/Images/model-2.jpg";
import img3 from "../assets/Images/model-3.jpg";
import img4 from "../assets/Images/model-4.jpg";
import img5 from "../assets/Images/model-5.jpg";

import styled from "styled-components";

export default function Home() {
  const StyledWrapper = styled.div`
    .flip-card {
      background-color: transparent;
      width: 190px;
      height: 304px;
      perspective: 1000px;
      font-family: sans-serif;
    }

    .title {
      font-size: 1.5em;
      font-weight: 900;
      text-align: center;
      margin: 0;
    }

    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }

    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }

    .flip-card-front,
    .flip-card-back {
      box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border: 1px solid coral;
      border-radius: 1rem;
    }

    .flip-card-front {
      
      color: coral;
    }

    .flip-card-back {
      background: linear-gradient(
        120deg,
        rgb(87, 31, 10) 30%,
        coral 88%,
        bisque 40%,
        rgb(255, 185, 160) 78%
      );
      color: white;
      transform: rotateY(180deg);
    }
  `;

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
      <div className="video-container">
        <img className="video-home" src={img4} alt="" />
      </div>

      {/* small about */}
      <div className="home-about">
        <h1 className="home-h1">
          Best Bridal Makeup Services in Komarapalayam & Tamil Nadu
        </h1>
        <div className="home-content">
          <div className="home-content-p">
            <p>
              VV Royal Beauty is the ultimate deXXstination for women looking for the best bridal makeup in Komarapalayam & Tamil Nadu. Our bridal makeup experts are experts at making each bride look royal and radiant. As a leading ladies salon in Komarapalayam, we offer facial treatments, hair styling, and skincare services. We also run a tailoring and boutique for women, providing custom-made designs and ethnic collections. VV Royal Beauty is more than just a beauty parlor in Komarapalayam—it's a hub for Aari work classes, Zumba dance, fitness yoga, Bharatanatyam coaching, and smart career training. We're proud to be a women's empowerment center in Tamil Nadu, dedicated to helping women shine in every aspect of life. Discover beauty, confidence, and creativity—all under one roof.
            </p>
          </div>
          <div className="home-content-img">
            <img src={img1} alt="About VV Royal Beauty" />
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="home-services">
        <div className="services-home">
          <h2 className="services-head">Our Services</h2>
          <div className="cards-home">
            <StyledWrapper>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title"><img src={img1} alt="" /></p>
                    <p>Hover Me</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">BACK</p>
                    <p>Leave Me</p>
                  </div>
                </div>
              </div>
            </StyledWrapper>

            <StyledWrapper>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title"><img src={img2} alt="" /></p>
                    <p>Hover Me</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title-p">BACK</p>
                    <p>Leave Me</p>
                  </div>
                </div>
              </div>
            </StyledWrapper>

            <StyledWrapper>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">FLIP CARD</p>
                    <p>Hover Me</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">BACK</p>
                    <p>Leave Me</p>
                  </div>
                </div>
              </div>
            </StyledWrapper>

            <StyledWrapper>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">FLIP CARD</p>
                    <p>Hover Me</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">BACK</p>
                    <p>Leave Me</p>
                  </div>
                </div>
              </div>
            </StyledWrapper>

            <StyledWrapper>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">FLIP CARD</p>
                    <p>Hover Me</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">BACK</p>
                    <p>Leave Me</p>
                  </div>
                </div>
              </div>
            </StyledWrapper>
          </div>
        </div>
      </div>

      {/* Gallery */}
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

      {/*  */}

      <div className="workplace-para">
        <h2 className="workplace-head">Our Workplace</h2>
        {/* <img src={} alt="" /> */}
        <p>
          Welcome to VV Royal Beauty, where beauty meets excellence. Our salon
          is designed to provide a serene and luxurious experience for all our
          clients. From the moment you step in, you'll be greeted by a warm and
          inviting atmosphere, perfect for relaxation and rejuvenation.
        </p>
        <p>
          Our team of skilled professionals is dedicated to delivering top-notch
          services, whether it's bridal makeup, Aari work, or Bharatanatyam
          classes. We take pride in our attention to detail and commitment to
          using high-quality products that enhance your natural beauty.
        </p>
        <p>
          At VV Royal Beauty, we believe in creating a personalized experience
          for each client. Our workplace is equipped with state-of-the-art
          facilities, ensuring that you receive the best care and service. Come
          visit us and discover the perfect blend of tradition and modern beauty
          techniques.
        </p>
      </div>

      {/*  */}

      <div class="context">
        <h1>Pure Css Animated Background</h1>
      </div>

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
