# FitZone - Premium Gym Website

A modern, responsive, and interactive gym website built with React and Vite. Designed to be simple, attractive, and fully functional across all devices.

## 🌟 Features

- **Responsive Design**: Perfectly optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean and attractive design with smooth animations
- **Interactive Elements**: Smooth scrolling, hover effects, and interactive components
- **Multiple Sections**:
  - Hero Section with call-to-action buttons
  - About Us with statistics
  - Services showcase
  - Fitness Classes with interactive details
  - Pricing Plans with comparison
  - Member Testimonials
  - Contact Form with validation
  - Footer with social links

- **Performance**: Optimized for fast loading and smooth interactions
- **Mobile-First Approach**: Designed and tested for all screen sizes

## 📋 Project Structure

```
gym/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx & Navbar.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── About.jsx & About.css
│   │   ├── Services.jsx & Services.css
│   │   ├── Classes.jsx & Classes.css
│   │   ├── Pricing.jsx & Pricing.css
│   │   ├── Testimonials.jsx & Testimonials.css
│   │   ├── Contact.jsx & Contact.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to project directory**
   ```bash
   cd gym
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Design Features

### Color Scheme
- **Primary Color**: #ff6b35 (Orange)
- **Secondary Color**: #1c1c1c (Dark)
- **Accent Color**: #ffd700 (Gold)
- **Light Background**: #f5f5f5

### Responsive Breakpoints
- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 📱 Sections Breakdown

### 1. **Navbar**
- Sticky navigation with logo
- Responsive hamburger menu for mobile
- Smooth navigation links with hover effects

### 2. **Hero Section**
- Eye-catching headline with gradient text
- Subtitle and call-to-action buttons
- Animated scroll indicator
- Full-height banner

### 3. **About Section**
- Company introduction
- Highlight features
- Statistics cards with hover effects

### 4. **Services**
- 6 service cards with icons
- Smooth hover animations
- Icon scaling and color transitions

### 5. **Classes**
- Interactive class cards
- Click to expand for details
- Class timing, trainer info, and level
- Enrollment buttons

### 6. **Pricing**
- 3-tier pricing plans
- Highlighted popular plan
- Feature lists with checkmarks
- Call-to-action buttons

### 7. **Testimonials**
- Member reviews with ratings
- Star ratings
- Member avatars (emojis)
- Hover card animations

### 8. **Contact**
- Contact form with validation
- Contact information cards
- Address, phone, email, hours
- Success message on submission

### 9. **Footer**
- Company description
- Quick links
- Services links
- Legal links
- Social media icons
- Copyright information

## 🛠️ Technologies Used

- **React 18.2**: UI library
- **Vite 4.3**: Build tool and dev server
- **React Icons**: Icon library (4.11)
- **CSS3**: Styling with modern features
- **JavaScript (ES6+)**: Programming language

## 🎯 Key Features Implementation

### Interactivity
- Mobile hamburger menu toggle
- Class details expand/collapse
- Form validation and submission
- Smooth animations and transitions

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly buttons

### Performance
- Optimized component structure
- CSS animations for smooth performance
- Lazy-loaded components ready
- Minimal re-renders

## 💡 Customization

### Change Colors
Edit the CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #ff6b35;
  --secondary-color: #1c1c1c;
  --accent-color: #ffd700;
  /* ... */
}
```

### Update Content
Edit the respective component files in `src/components/` to update:
- Text content
- Images/Emojis
- Icons
- Links

### Add Contact Integration
Update the `Contact.jsx` component to integrate with your email service:
- Firebase
- SendGrid
- Formspree
- Custom API

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📞 Support

For issues, questions, or suggestions, please feel free to reach out through the contact form on the website.

---

**Made with ❤️ using React + Vite**

Happy coding! 🚀
