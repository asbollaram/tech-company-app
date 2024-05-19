import React from 'react';
import './Footerpage.css';

const Footerpage = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-logo">
          <img src="https://via.placeholder.com/150" alt="Company Logo" />
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li>
                <a href="/about">Company</a>
              </li>
              <li>
                <a href="/team">Team</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="/services/web-development">Web Development</a>
              </li>
              <li>
                <a href="/services/mobile-app-development">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="/services/cloud-solutions">Cloud Solutions</a>
              </li>
              <li>
                <a href="/services/cybersecurity">Cybersecurity</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="/support/faq">FAQ</a>
              </li>
              <li>
                <a href="/support/help-center">Help Center</a>
              </li>
              <li>
                <a href="/support/contact-support">Contact Support</a>
              </li>
              <li>
                <a href="/support/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footerpage;
