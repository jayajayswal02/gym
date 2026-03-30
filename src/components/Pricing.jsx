import React from 'react'
import { FaCheck } from 'react-icons/fa'
import './Pricing.css'

function Pricing() {
  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: 29,
      period: 'per month',
      features: [
        'Gym Access',
        '24/7 Facility Access',
        'Basic Equipment',
        'Locker Facility',
        'Community Access'
      ],
      highlighted: false
    },
    {
      id: 2,
      name: 'Professional',
      price: 59,
      period: 'per month',
      features: [
        'Everything in Basic',
        'Personal Training Sessions',
        'Nutrition Guidance',
        'Group Classes',
        'Performance Tracking',
        'Priority Support'
      ],
      highlighted: true
    },
    {
      id: 3,
      name: 'Elite',
      price: 99,
      period: 'per month',
      features: [
        'Everything in Professional',
        'Unlimited Personal Training',
        'Premium Nutrition Plan',
        'Wellness Coaching',
        'PT Assessment & Reports',
        'VIP Lounge Access',
        'Recovery Therapies'
      ],
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="section-title">Our Pricing Plans</h2>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.id} className={`price-card ${plan.highlighted ? 'highlighted' : ''}`}>
              {plan.highlighted && <div className="badge">Most Popular</div>}
              
              <h3>{plan.name}</h3>
              
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/{plan.period}</span>
              </div>

              <button className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-outline'}`}>
                Choose Plan
              </button>

              <div className="features">
                {plan.features.map((feature, index) => (
                  <div key={index} className="feature">
                    <FaCheck className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p>All plans include a 7-day free trial. Cancel anytime.</p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
