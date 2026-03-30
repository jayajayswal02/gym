import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { supabase } from '../config/supabase'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields')
      setLoading(false)
      return
    }

    try {
      // Save contact data to Supabase
      const { data, error: supabaseError } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            message: formData.message,
            created_at: new Date().toISOString(),
            status: 'new'
          }
        ])
        .select()

      if (supabaseError) {
        throw supabaseError
      }

      console.log('✅ Contact saved:', data)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setTimeout(() => setSubmitted(false), 4000)
    } catch (err) {
      console.error('❌ Error saving contact:', err)
      setError(err.message || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <FaPhone className="info-icon" />
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
              <p>Mon-Fri: 6am - 10pm</p>
            </div>

            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h4>Email</h4>
              <p>info@fitzone.com</p>
              <p>support@fitzone.com</p>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h4>Location</h4>
              <p>123 Fitness Avenue</p>
              <p>New York, NY 10001</p>
            </div>

            <div className="info-card">
              <FaClock className="info-icon" />
              <h4>Hours</h4>
              <p>Weekdays: 6am - 11pm</p>
              <p>Weekends: 8am - 8pm</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone (Optional)"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {error && (
              <div className="error-message">
                ❌ {error}
              </div>
            )}

            {submitted && (
              <div className="success-message">
                ✅ Thank you! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
