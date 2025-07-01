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
    .book {
      position: relative;
      border-radius: 10px;
      width: 200px;
      height: 280px;
      background-color: whitesmoke;
      -webkit-transform: preserve-3d;
      -ms-transform: preserve-3d;
      transform: preserve-3d;
      -webkit-perspective: 2000px;
      perspective: 2000px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      color: #000;
    }

    .cover {
      top: 0;
      position: absolute;
      background-color: lightgray;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      cursor: pointer;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      -webkit-transform-origin: 0;
      -ms-transform-origin: 0;
      transform-origin: 0;
      -webkit-box-shadow: 1px 1px 12px #000;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }

    .book:hover .cover {
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      -webkit-transform: rotatey(-80deg);
      -ms-transform: rotatey(-80deg);
      transform: rotatey(-80deg);
    }

    p {
      font-size: 20px;
      font-weight: bolder;
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus, harum vitae? Eius impedit voluptate facere aut ut
              voluptatem laboriosam consequatur. Beatae nostrum fugiat
              perferendis vero veniam recusandae? Dicta animi nostrum laborum
              harum minus. Aspernatur, in! Ipsa eveniet porro repellat officiis.
              Distinctio, dolore minima illum non nobis nam voluptas alias
              inventore sit repellat fugiat numquam, at quia consequatur quos
              nisi est. Perspiciatis voluptas perferendis quae optio obcaecati
              ratione rem autem maiores ea dolor aperiam enim, nobis, at
              nesciunt ab quia deleniti recusandae voluptatem? Ut doloremque ea
              porro quod at corporis deleniti repellendus! Fuga exercitationem,
              laborum consectetur id eaque esse odio soluta minus accusantium
              impedit quod unde aliquid libero praesentium. Quod repudiandae hic
              doloremque nihil officia cupiditate beatae, modi voluptatibus
              assumenda ratione vel animi amet, cum culpa voluptates libero
              debitis suscipit ipsa obcaecati dolore. Eveniet molestiae, odio,
              beatae, molestias eius voluptate perferendis nisi necessitatibus
              tempore aperiam quasi doloremque placeat? Id assumenda, quidem,
              accusantium aliquam et itaque sed beatae illum dolore pariatur
              rerum vero illo repudiandae distinctio voluptatibus, tenetur
              reiciendis labore. Eligendi, culpa cupiditate. Nemo voluptates
              aut, vel repudiandae repellat officiis voluptate. Omnis doloremque
              labore modi amet quos quidem maxime vitae fuga quae sapiente
              neque, odio voluptates vero fugit at, debitis delectus in!
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
              <div className="book">
                <img src={img1} alt="" />
                <div className="cover">
                  <p>Bridal MakeUp</p>
                </div>
              </div>
            </StyledWrapper>

            <StyledWrapper>
              <div className="book">
                <img src={img2} alt="" />
                <div className="cover">
                  <p>Aari Work</p>
                </div>
              </div>
            </StyledWrapper>

            <StyledWrapper>
              <div className="book">
                <img src={img3} alt="" />
                <div className="cover">
                  <p>Bharathanatiyam</p>
                </div>
              </div>
            </StyledWrapper>

            <StyledWrapper>
              <div className="book">
                <img src={img4} alt="" />
                <div className="cover">
                  <p>Boutique</p>
                </div>
              </div>
            </StyledWrapper>

            <StyledWrapper>
              <div className="book">
                <img src={img5} alt="" />
                <div className="cover">
                  <p>Zumba dance</p>
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


<div class="area" >
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
            
    </div >

    </div>
  );
}
