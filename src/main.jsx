<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async';
// import "locomotive-scroll/dist/locomotive-scroll.css";
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { BrowserRouter } from "react-router-dom";
>>>>>>> 0dd4cfa10656906e51fc64f31496d9e3da33e354

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
<<<<<<< HEAD
    <App />
   </HelmetProvider>
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
>>>>>>> 0dd4cfa10656906e51fc64f31496d9e3da33e354
);
