import React, { useState } from 'react'
import './Classes.css'

function Classes() {
  const [selectedClass, setSelectedClass] = useState(null)

  const classes = [
    {
      id: 1,
      name: 'Yoga',
      time: '6:00 AM - 7:00 AM',
      days: 'Mon, Wed, Fri',
      trainer: 'Sarah Johnson',
      level: 'Beginner to Advanced',
      image: '🧘'
    },
    {
      id: 2,
      name: 'HIIT Training',
      time: '7:30 AM - 8:30 AM',
      days: 'Tue, Thu, Sat',
      trainer: 'Mike Williams',
      level: 'All Levels',
      image: '💪'
    },
    {
      id: 3,
      name: 'Pilates',
      time: '10:00 AM - 11:00 AM',
      days: 'Mon, Wed, Fri',
      trainer: 'Emma Davis',
      level: 'Intermediate',
      image: '🤸'
    },
    {
      id: 4,
      name: 'Spin Class',
      time: '5:30 PM - 6:30 PM',
      days: 'Daily',
      trainer: 'James Brown',
      level: 'All Levels',
      image: '🚴'
    },
    {
      id: 5,
      name: 'Boxing',
      time: '6:00 PM - 7:00 PM',
      days: 'Tue, Thu, Sat',
      trainer: 'Chris Martin',
      level: 'Advanced',
      image: '🥊'
    },
    {
      id: 6,
      name: 'Zumba',
      time: '7:00 PM - 8:00 PM',
      days: 'Wed, Fri, Sun',
      trainer: 'Sophia Garcia',
      level: 'All Levels',
      image: '💃'
    }
  ]

  return (
    <section id="classes" className="classes">
      <div className="container">
        <h2 className="section-title">Popular Classes</h2>

        <div className="classes-grid">
          {classes.map((fitnessClass) => (
            <div 
              key={fitnessClass.id} 
              className="class-card"
              onClick={() => setSelectedClass(selectedClass?.id === fitnessClass.id ? null : fitnessClass)}
            >
              <div className="class-image">{fitnessClass.image}</div>
              <h3>{fitnessClass.name}</h3>
              <p className="class-time">{fitnessClass.time}</p>
              
              {selectedClass?.id === fitnessClass.id && (
                <div className="class-details">
                  <p><strong>Schedule:</strong> {fitnessClass.days}</p>
                  <p><strong>Trainer:</strong> {fitnessClass.trainer}</p>
                  <p><strong>Level:</strong> {fitnessClass.level}</p>
                  <button className="btn btn-primary">Enroll Now</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes
