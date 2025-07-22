import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Components Css/Contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container" data-aos="fade-up">
        <h2 className="text-center mb-4 contact-title">Get in Touch</h2>
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <h5 className='fs-4 text-center'>Contact Form</h5>
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" placeholder="Your Phone Number" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100">Send Message</button>
            </form>
          </div>

          {/* Address & Map */}
          <div className="col-md-6 mb-4">
            <div className="mb-3">
              <h5>Contact Information</h5>
              <p><strong>Address:</strong> VV Royal Beauty Bridal Studio, Komarapalayam, Erode, Tamil Nadu - 638312</p>
              <p><strong>Phone:</strong> <a href="tel:+919876543210" className="contact-link">+91 98765 43210</a></p>
              <p><strong>Email:</strong> <a href="mailto:bridalstudio@example.com" className="contact-link">bridalstudio@example.com</a></p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.5111995806433!2d77.70046837324045!3d11.442981188749187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba969e1fbc10b15%3A0xc367a204fdcb87e3!2sVV%20ROYAL%20BEAUTY!5e0!3m2!1sen!2sin!4v1753199393579!5m2!1sen!2sin" 
            width="500" height="220" style={{ border: 0 }} 
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      {/* float whatsapp */}

      <a
  href="https://wa.me/919876543210"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    alt="WhatsApp"
    className="whatsapp-icon"
  />
</a>

    </section>
  );
};

export default Contact;
