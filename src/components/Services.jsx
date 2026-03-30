import React from 'react'
import { FaUsers, FaHeartbeat, FaAppleAlt, FaTrophy, FaVideo, FaUser, FaDumbbell } from 'react-icons/fa'
import './Services.css'

function Services() {
  const services = [
    {
      id: 1,
      icon: <FaDumbbell />,
      title: 'Weight Training',
      description: 'Complete range of dumbbells, barbells, and machines for strength training'
    },
    {
      id: 2,
      icon: <FaHeartbeat />,
      title: 'Cardio Equipment',
      description: 'State-of-the-art cardio machines for your heart health and endurance'
    },
    {
      id: 3,
      icon: <FaAppleAlt />,
      title: 'Nutrition Planning',
      description: 'Expert nutritionists to guide you on your diet and healthy lifestyle'
    },
    {
      id: 4,
      icon: <FaTrophy />,
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers tailored to your goals'
    },
    {
      id: 5,
      icon: <FaVideo />,
      title: 'Online Classes',
      description: 'Access to live and recorded fitness classes from anywhere'
    },
    {
      id: 6,
      icon: <FaUser />,
      title: 'Wellness Coaching',
      description: 'Complete wellness guidance including mental health and fitness balance'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
