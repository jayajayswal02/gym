import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FitZone</h3>
            <p>
              Transforming lives through fitness, one member at a time. 
              Join our community and start your fitness journey today.
            </p>
            <div className="social-links">
              <a href="#facebook" className="social-icon"><FaFacebook /></a>
              <a href="#instagram" className="social-icon"><FaInstagram /></a>
              <a href="#twitter" className="social-icon"><FaTwitter /></a>
              <a href="#linkedin" className="social-icon"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Weight Training</a></li>
              <li><a href="#services">Cardio Equipment</a></li>
              <li><a href="#services">Personal Training</a></li>
              <li><a href="#services">Group Classes</a></li>
              <li><a href="#services">Nutrition Guidance</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookie">Cookie Policy</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 FitZone. All rights reserved.</p>
          <p>Designed & Developed with ❤️ | Made with React & Vite</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
