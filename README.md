# Mizairy Akthar - Portfolio

A modern, dark-themed cyberpunk portfolio website built with Next.js 16, featuring impressive 3D animations and smooth interactions to showcase skills and projects.

## Tech Stack

### Core Framework
- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework

### Animations & Effects
- **Framer Motion** - Professional React animations
- **React Three Fiber (@react-three/fiber)** - 3D graphics with Three.js
- **React Three Drei (@react-three/drei)** - 3D helpers and abstractions
- **GSAP** - Advanced scroll animations
- **Lenis** - Smooth scroll library
- **tsParticles** - Interactive particle backgrounds

### UI Components & Styling
- **Aceternity UI** - Pre-built impressive components
- **shadcn/ui** - Customizable component library
- **React Icons** - Icon library
- **React Type Animation** - Typing effects
- **Lucide React** - Modern icon set

### Utilities
- **clsx** - Class name utility
- **tailwind-merge** - Merge Tailwind classes

## Project Architecture

```
mizairy-portfolio/
├── app/
│   ├── (sections)/
│   │   ├── hero/
│   │   │   └── page.tsx          # Hero section with 3D elements
│   │   ├── about/
│   │   │   └── page.tsx          # About me section
│   │   ├── skills/
│   │   │   └── page.tsx          # Skills showcase
│   │   ├── projects/
│   │   │   └── page.tsx          # Projects portfolio
│   │   ├── experience/
│   │   │   └── page.tsx          # Work experience timeline
│   │   ├── testimonials/
│   │   │   └── page.tsx          # Client testimonials
│   │   └── contact/
│   │       └── page.tsx          # Contact form
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Main landing page
│   └── globals.css               # Global styles
├── components/
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── sections/                 # Section components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── 3d/                       # 3D components
│   │   ├── Scene.tsx
│   │   ├── Model.tsx
│   │   └── Canvas.tsx
│   ├── effects/                  # Visual effects
│   │   ├── ParticleBackground.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── GlitchText.tsx
│   │   └── NeonGlow.tsx
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── LoadingScreen.tsx
│   └── animations/               # Animation components
│       ├── ScrollAnimations.tsx
│       ├── PageTransition.tsx
│       └── FadeIn.tsx
├── lib/
│   ├── utils.ts                  # Utility functions
│   └── constants.ts              # Constants and config
├── public/
│   ├── images/                   # Static images
│   ├── models/                   # 3D models
│   └── assets/                   # Other assets
└── types/
    └── index.ts                  # TypeScript types

```

## Portfolio Sections

1. **Hero Section** - Animated intro with 3D elements, glitch effects, typing animation
2. **About Me** - Personal introduction with cyberpunk-styled cards
3. **Skills** - Interactive skill cards with neon glow effects and progress bars
4. **Projects** - 3D card showcase with hover effects and live demos
5. **Experience** - Professional timeline with neon accents
6. **Testimonials** - Rotating testimonial cards with animations
7. **Contact** - Futuristic contact form with validation

## Key Features

- Custom cursor with trail effect
- Animated particle background
- Smooth scroll with parallax effects
- Page transitions and loading screen
- Interactive 3D objects
- Glitch text effects
- Neon glow hover states
- Fully responsive design
- Dark/Cyberpunk theme
- Optimized performance

## Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Development

- `app/page.tsx` - Main landing page
- `app/layout.tsx` - Root layout with fonts and metadata
- `components/` - All reusable components
- `app/globals.css` - Global styles and Tailwind config

## Color Scheme (Cyberpunk Theme)

- **Primary:** Cyan/Neon Blue (#00f0ff)
- **Secondary:** Purple/Pink (#ff00ff)
- **Accent:** Neon Green (#00ff00)
- **Background:** Dark Gray/Black (#0a0a0a, #1a1a1a)
- **Text:** White/Light Gray (#ffffff, #e0e0e0)

## Performance Optimizations

- Code splitting with Next.js App Router
- Dynamic imports for 3D components
- Image optimization with next/image
- Font optimization with next/font
- Lazy loading for sections
- Optimized animations with Framer Motion

## Deployment

Deploy on Vercel:
```bash
vercel deploy
```

Or use the Vercel Platform for automatic deployments from Git.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

Note: 3D features require WebGL support.

## License

Private - All rights reserved
