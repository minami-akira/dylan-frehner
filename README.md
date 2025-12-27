# Dylan Frehner - Portfolio Website

A stunning, magical 3D portfolio website showcasing my work as a GenAI / AI Platform Engineer.

## Features

- ✨ **Magical 3D Effects**: Interactive Three.js scene with animated particles, floating spheres, and rotating rings
- 🎨 **Modern UI**: Beautiful glassmorphism design with gradient text and smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Performance**: Optimized with React, Vite, and Framer Motion
- 🎯 **Smooth Scrolling**: Intersection Observer for scroll-triggered animations

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **React Intersection Observer** - Scroll animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Scene3D.jsx      # 3D background scene
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Experience.jsx  # Work experience
│   │   ├── Skills.jsx      # Skills showcase
│   │   └── Contact.jsx     # Contact information
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Customization

- Update personal information in the component files
- Modify colors in `tailwind.config.js`
- Adjust 3D scene parameters in `Scene3D.jsx`
- Customize animations in component files

## License

MIT
