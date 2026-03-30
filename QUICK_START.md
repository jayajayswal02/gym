# 🏋️ FitZone Gym Website - Quick Start Guide

## Setup Instructions

### Step 1: Install Dependencies
Open PowerShell/Command Prompt in the gym folder and run:

```bash
npm install
```

This will install all required packages:
- react (18.2.0)
- react-dom (18.2.0)
- react-icons (4.11.0)
- vite (4.3.0)
- @vitejs/plugin-react (4.0.0)

### Step 2: Start Development Server
```bash
npm run dev
```

You'll see output like:
```
  VITE v4.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

Open http://localhost:3000 in your browser to see the website.

### Step 3: Build for Production
When ready to deploy:

```bash
npm run build
```

This creates an optimized `dist/` folder ready for hosting.

---

## 🎨 What's Included

✅ **Navbar**: Responsive navigation with hamburger menu for mobile
✅ **Hero Section**: Eye-catching landing banner with CTAs
✅ **About**: Company info with statistics cards
✅ **Services**: 6 service offerings with icons
✅ **Classes**: 6 fitness classes with interactive details
✅ **Pricing**: 3 pricing tiers with features
✅ **Testimonials**: 4 member reviews with ratings
✅ **Contact**: Fully functional contact form
✅ **Footer**: Links, social media, company info

## 📱 Responsive Features

The website is fully responsive and works perfectly on:
- 🖥️ Desktop (1024px+)
- 📱 Tablet (768px - 1024px)
- 📱 Mobile (320px - 768px)
- 📱 Small Mobile (Below 480px)

## 🔧 Customization Tips

### 1. Change Colors
Edit `src/App.css` (lines 8-15):
```css
:root {
  --primary-color: #ff6b35;      /* Change this */
  --secondary-color: #1c1c1c;    /* And this */
  --accent-color: #ffd700;       /* And this */
}
```

### 2. Update Gym Info
- **Navbar Brand**: Edit `src/components/Navbar.jsx` line 14
- **About Content**: Edit `src/components/About.jsx` lines 31-45
- **Contact Info**: Edit `src/components/Contact.jsx` lines 48-65
- **Classes**: Edit the `classes` array in `src/components/Classes.jsx`
- **Pricing**: Edit the `plans` array in `src/components/Pricing.jsx`

### 3. Add Real Images
Replace emojis with images:
```jsx
// Instead of: image: '🧘'
// Use: image: require('./path/to/image.jpg')
// Or: image: 'https://url-to-image.jpg'

// Then update the JSX:
<img src={item.image} alt="description" />
```

### 4. Integrate Email Backend
Update the `handleSubmit` in `src/components/Contact.jsx` to:
- Send emails via Formspree
- Connect to Firebase
- Use your own backend API

Example with Formspree:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // Handle response...
};
```

## 📂 File Structure

```
gym/
├── src/
│   ├── components/           # All section components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Classes.jsx
│   │   ├── Pricing.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   ├── index.css            # Base styles
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── README.md                # Full documentation
└── .gitignore              # Git ignore file
```

## 🚀 Deployment

### Deploy to Netlify (Free)
1. Push code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Connect your GitHub repo
5. Build command: `npm run build`
6. Publish directory: `dist`

### Deploy to Vercel (Free)
1. Push code to GitHub
2. Go to https://vercel.com
3. Import your project
4. Click "Deploy"

## 🎯 Features Breakdown

| Feature | Status | Details |
|---------|--------|---------|
| Responsive Design | ✅ | Works on all devices |
| Navigation | ✅ | Sticky nav + mobile menu |
| Hero Section | ✅ | Animations + CTAs |
| About | ✅ | Stats cards with hover |
| Services | ✅ | 6 services with icons |
| Classes | ✅ | Interactive expandable |
| Pricing | ✅ | 3 tiers with features |
| Testimonials | ✅ | 4 reviews with ratings |
| Contact Form | ✅ | Validation + success msg |
| Footer | ✅ | Social links + info |
| Smooth Scroll | ✅ | CSS enabled |
| Animations | ✅ | CSS + React transitions |

## 🐛 Troubleshooting

**Problem**: "Cannot find module 'react'"
- **Solution**: Run `npm install`

**Problem**: Port 3000 already in use
- **Solution**: Edit `vite.config.js` and change port to 3001+

**Problem**: Styling not applying
- **Solution**: Clear browser cache (Ctrl+Shift+Delete)

**Problem**: Images not showing
- **Solution**: Check image paths are correct or use image URLs

## 📞 Quick Reference

- Start dev: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Main styles: `src/App.css`
- Components: `src/components/`
- Colors: `src/App.css` (lines 8-15)

## ✨ Next Steps

1. ✅ Install dependencies
2. ✅ Run `npm run dev`
3. ✅ Customize colors and content
4. ✅ Add real images
5. ✅ Test on mobile devices
6. ✅ Deploy to hosting

---

**Enjoy your new gym website! 🎉**

For detailed documentation, see [README.md](README.md)
