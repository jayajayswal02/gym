import React from 'react'
import { FaStar } from 'react-icons/fa'
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'John Carter',
      role: 'Member since 2022',
      image: '👨‍💼',
      text: 'FitZone transformed my fitness journey! The trainers are professional and supportive. I\'ve seen incredible results in just 3 months.',
      rating: 5
    },
    {
      id: 2,
      name: 'Jessica Lee',
      role: 'Regular Member',
      image: '👩‍💼',
      text: 'The facilities are top-notch and the community is amazing. I love the variety of classes and the nutritional guidance provided.',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Elite Member',
      image: '👨‍🦱',
      text: 'Best investment I\'ve made for my health. The personal training sessions are tailored perfectly to my needs and goals.',
      rating: 5
    },
    {
      id: 4,
      name: 'Sarah Mitchell',
      role: '3-Year Member',
      image: '👩‍🦰',
      text: 'The 24/7 access and variety of equipment makes it easy to fit workouts into my busy schedule. Highly recommended!',
      rating: 5
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Members Say</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="member-image">{testimonial.image}</div>
                <div className="member-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>

              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
