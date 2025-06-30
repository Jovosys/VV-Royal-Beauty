import React from 'react'
import '../Components Css/Footer.css';

export default function Footer() {
  return (
    <div>
        <footer className="footer">
            <div className="footer-links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
                <ul>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-service">Terms of Service</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </div>
            <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} VV Royal Beauty. All rights reserved.</p>
            <p>Designed by <a href="https://www.jovosys.com" target="_blank" rel="noopener noreferrer">Jovosys</a></p>
            </div>
        </footer>
    </div>
  )
}
