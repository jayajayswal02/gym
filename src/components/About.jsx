import React from 'react'
import { FaAward, FaUsers, FaDumbbell, FaHeartbeat } from 'react-icons/fa'
import './About.css'

function About() {
  const stats = [
    {
      icon: <FaAward />,
      number: '15+',
      label: 'Years Experience'
    },
    {
      icon: <FaUsers />,
      number: '5000+',
      label: 'Active Members'
    },
    {
      icon: <FaDumbbell />,
      number: '100+',
      label: 'Equipment'
    },
    {
      icon: <FaHeartbeat />,
      number: '24/7',
      label: 'Support'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About FitZone</h2>

        <div className="about-content">
          <div className="about-text">
            <h3>Welcome to FitZone</h3>
            <p>
              FitZone is a state-of-the-art fitness facility dedicated to helping you achieve your health and fitness goals. 
              With over 15 years of experience in the fitness industry, we've built a community of passionate fitness enthusiasts 
              and expert trainers.
            </p>
            <p>
              Our mission is to provide a welcoming, supportive environment where everyone can transform their body and mind. 
              Whether you're a beginner or an advanced athlete, we have the right program and equipment for you.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">✓ Modern Facilities</div>
              <div className="highlight-item">✓ Expert Trainers</div>
              <div className="highlight-item">✓ Personalized Plans</div>
              <div className="highlight-item">✓ Nutrition Guidance</div>
            </div>
            <button className="btn btn-primary">Learn More</button>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
