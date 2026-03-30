import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Transform Your Body, Transform Your Life</h1>
        <p className="hero-subtitle">
          Join FitZone and achieve your fitness goals with our expert trainers and state-of-the-art facilities
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Start Your Journey</button>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  )
}

export default Hero
