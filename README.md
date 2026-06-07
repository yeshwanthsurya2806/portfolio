# Yeshwanth Surya - Portfolio Website 🚀

A jaw-dropping, colorful, animated personal portfolio website built with React, Tailwind CSS, and Framer Motion. Designed to make recruiters stop scrolling and designed specifically to attract internship and job opportunities.

## ✨ Features

- **Stunning Animations**: Scroll-triggered animations, letter-by-letter reveals, 3D tilt effects, and smooth transitions throughout
- **Glassmorphism Design**: Frosted glass cards with backdrop blur effects
- **Colorful Gradient Palette**: Electric purple, hot pink, cyan, and lime green with smooth transitions
- **Dark Theme**: Dark background (#0A0A0A) that makes neon colors pop
- **Custom Cursor**: Glowing cursor with trailing effect
- **Floating Blobs**: Animated background particles and gradient meshes
- **Fully Responsive**: Mobile-first design that looks stunning on all devices
- **Performance Optimized**: 60fps animations, optimized for smooth scrolling
- **SEO Ready**: Meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yeshwanthsurya2806/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy Options

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy
```

**GitHub Pages**
```bash
npm install --save-dev gh-pages
# Add to package.json:
# "homepage": "https://yeshwanthsurya2806.github.io",
# "deploy": "npm run build && gh-pages -d dist"
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Button.jsx
│   ├── AnimatedCursor.jsx
│   └── BackgroundBlobs.jsx
├── sections/           # Page sections
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
├── hooks/             # Custom React hooks
│   ├── useScrollAnimation.js
│   └── useCursor.js
├── data/              # Portfolio data
│   └── portfolio.js    # Central source of truth
├── App.jsx            # Main app component
├── main.jsx           # React entry point
└── index.css          # Global styles

public/               # Static assets
dist/                 # Production build output
```

## ⚙️ Configuration

### Update Personal Information

Edit `/src/data/portfolio.js` to customize:
- Personal details (name, email, location)
- Hero section content
- About section bio and stats
- Projects and portfolio items
- Skills and technologies
- Experience timeline
- Contact information

### Customize Colors

Edit `/tailwind.config.js` to modify the color palette:
```javascript
colors: {
  neon: {
    purple: '#7C3AED',
    pink: '#EC4899',
    cyan: '#06B6D4',
    lime: '#84CC16',
  }
}
```

### Add Form Functionality

In `/src/sections/Contact.jsx`, implement your preferred email service:
- **Formspree**: https://formspree.io
- **EmailJS**: https://www.emailjs.com
- **SendGrid**: https://sendgrid.com
- **Your own backend**: Express.js, Node.js, etc.

Example with Formspree:
```javascript
// In handleSubmit function
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## 🎨 Customization

### Adding More Projects
Edit `/src/data/portfolio.js` and add to the `projects` array:
```javascript
{
  id: 4,
  title: "Your Project Title",
  description: "Project description",
  tech: ["React", "Node.js"],
  github: "github-url",
  live: "live-url",
  featured: false,
  status: "live",
}
```

### Adding More Skills
Edit `/src/data/portfolio.js` and add to the `skills` array:
```javascript
{
  category: "🎨 Category Name",
  icon: "Icon",
  skills: ["Skill1", "Skill2"],
  gradient: "neon-purple",
}
```

### Modifying Animations
- Global animations: Edit `/tailwind.config.js` keyframes
- Component animations: Edit Framer Motion variants in component files
- Custom hooks: Modify `/src/hooks/useScrollAnimation.js` or `/src/hooks/useCursor.js`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌐 SEO Optimization

- Meta tags configured in `index.html`
- Semantic HTML structure
- Open Graph tags for social sharing
- Fast page load times (optimized animations)

## 🔗 Links

- **GitHub**: https://github.com/yeshwanthsurya2806
- **LinkedIn**: https://www.linkedin.com/in/yeshwanthsurya/
- **Email**: yeshwanth.surya2806@gmail.com

## 📝 License

This project is open source and available under the MIT License.

## 🎯 TODO / Future Enhancements

- [ ] Add dark/light theme toggle
- [ ] Implement blog section
- [ ] Add internationalization (i18n)
- [ ] Connect to real API for projects
- [ ] Add testimonials section
- [ ] Implement email form submission
- [ ] Add downloadable resume PDF
- [ ] Create sitemap.xml
- [ ] Add analytics tracking

## 🤝 Contributing

Feel free to fork this project and use it as a template for your own portfolio!

## 📞 Support

For issues or questions, reach out via:
- Email: yeshwanth.surya2806@gmail.com
- LinkedIn: https://www.linkedin.com/in/yeshwanthsurya/
- GitHub Issues: https://github.com/yeshwanthsurya2806/portfolio/issues

---

**Built with ❤️ and a lot of coffee ☕**
