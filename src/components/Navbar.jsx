import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">FitZone</span>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={handleNavClick}>
            Home
          </a>
          <a href="#about" className="nav-link" onClick={handleNavClick}>
            About
          </a>
          <a href="#services" className="nav-link" onClick={handleNavClick}>
            Services
          </a>
          <a href="#classes" className="nav-link" onClick={handleNavClick}>
            Classes
          </a>
          <a href="#pricing" className="nav-link" onClick={handleNavClick}>
            Pricing
          </a>
          <a href="#contact" className="nav-link" onClick={handleNavClick}>
            Contact
          </a>
          <a href="#contact" className="nav-link nav-btn btn btn-primary" onClick={handleNavClick}>
            Join Now
          </a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
