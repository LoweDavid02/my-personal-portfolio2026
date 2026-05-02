# 🚀 Full-Stack Developer Portfolio

A premium, modern, and interactive portfolio website built with React.js and Tailwind CSS. Features a cyberpunk-meets-editorial design with dark theme, animated gradients, glassmorphism effects, and smooth scroll animations.

## 🌐 Live Demo

**[View Live Portfolio](https://lowedavid02.github.io/my-personal-portfolio2026/)**

## ✨ Features

### Design & Aesthetics
- 🎨 **Dark Cyberpunk Theme** - Deep space dark background with electric cyan and violet accents
- 🌊 **Animated Gradient Mesh** - Slow-moving background gradients
- 💎 **Glassmorphism Effects** - Frosted glass cards with backdrop blur
- ✨ **Neon Glow Accents** - Glowing borders and hover effects
- 🎭 **Custom Cursor** - Interactive ring + dot cursor (desktop only)
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop

### Sections
1. **Hero Section** - Animated typewriter effect, floating tech badges, code window mockup
2. **About Section** - Profile showcase with animated stats counters
3. **Tech Stack** - Interactive tabs with proficiency bars for different technology categories
4. **Projects** - 3D tilt effect cards showcasing featured work
5. **Experience** - Animated timeline with alternating layout
6. **Contact** - Glassmorphism contact form with floating labels
7. **Footer** - Minimal design with back-to-top functionality

### Animations & Interactions
- 🎬 Scroll-triggered fade-in animations using Framer Motion
- ⌨️ Typewriter effect for role cycling
- 📊 Animated counter for statistics
- 🎴 3D parallax tilt effect on project cards
- 🔄 Smooth scroll behavior with section anchors
- 💫 Hover effects on all interactive elements

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Type Animation** - Typewriter effects
- **React Intersection Observer** - Scroll animations
- **Lucide React** - Icon library

### Build Tools
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing
- **ESLint** - Code linting

### Deployment
- **GitHub Pages** - Static site hosting
- **gh-pages** - Deployment automation

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Clone the Repository
```bash
git clone git@github.com:LoweDavid02/my-personal-portfolio2026.git
cd my-personal-portfolio2026
```

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 🎨 Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Update name, roles, and bio
   - Change social media links
   - Modify tech badges

2. **About Section** (`src/components/About.jsx`)
   - Update bio text
   - Modify statistics (years, projects, platforms)

3. **Tech Stack** (`src/components/TechStack.jsx`)
   - Add/remove technologies
   - Update proficiency levels
   - Modify tech categories

4. **Projects** (`src/components/Projects.jsx`)
   - Add your projects with descriptions
   - Update GitHub and demo links
   - Modify tech tags

5. **Experience** (`src/components/Experience.jsx`)
   - Update work experience
   - Modify job responsibilities
   - Change company names and dates

6. **Contact** (`src/components/Contact.jsx`)
   - Update email address
   - Change social media links
   - Connect form to backend (optional)

### Update Colors

Edit `tailwind.config.js` and `src/index.css` to change the color scheme:

```javascript
colors: {
  'bg-primary': '#0a0a0f',      // Main background
  'accent-cyan': '#00f5ff',      // Primary accent
  'accent-violet': '#7c3aed',    // Secondary accent
  // ... more colors
}
```

### Update Fonts

Fonts are loaded from Google Fonts in `index.html`. To change fonts:
1. Update the Google Fonts link
2. Modify font families in `tailwind.config.js`

### Add Your CV

Replace `public/cv.pdf` with your actual CV file.

## 📁 Project Structure

```
my-personal-portfolio2026/
├── public/
│   ├── cv.pdf              # Your CV file
│   ├── favicon.svg         # Site favicon
│   └── icons.svg           # SVG icons
├── src/
│   ├── components/
│   │   ├── About.jsx       # About section
│   │   ├── Contact.jsx     # Contact section
│   │   ├── CustomCursor.jsx # Custom cursor
│   │   ├── Experience.jsx  # Experience timeline
│   │   ├── Footer.jsx      # Footer
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Projects.jsx    # Projects showcase
│   │   └── TechStack.jsx   # Tech stack tabs
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🚀 Deployment

### GitHub Pages (Automated)

The project is configured for automatic deployment to GitHub Pages:

```bash
npm run deploy
```

This will:
1. Build the production version
2. Deploy to the `gh-pages` branch
3. Make it available at `https://yourusername.github.io/my-personal-portfolio2026/`

### Manual Deployment

You can also deploy the `dist` folder to any static hosting service:
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3
- Firebase Hosting

## 🎯 Performance

- ⚡ Fast initial load with code splitting
- 🎨 Optimized CSS with Tailwind's purge
- 📦 Minified and compressed assets
- 🖼️ Lazy loading for images
- 🔄 Smooth 60fps animations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Lowe David**
- GitHub: [@LoweDavid02](https://github.com/LoweDavid02)
- Portfolio: [Live Demo](https://lowedavid02.github.io/my-personal-portfolio2026/)

## 🙏 Acknowledgments

- Design inspiration from modern developer portfolios
- Icons from [Lucide React](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ If you like this portfolio, please give it a star on GitHub!
