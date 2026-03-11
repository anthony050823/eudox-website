# Eudox AI – Autonomous Deal Sourcing Platform

**Eudox** is the first AI agent to proactively find private-market opportunities and autonomously source deals for M&A professionals. Built by elite students from Emory University, USC, and Northwestern University, Eudox combines cutting-edge machine learning with deep financial domain expertise to revolutionize deal sourcing in private markets.

---

## 🚀 Project Overview

This repository contains the **marketing website** for Eudox AI, designed to showcase the platform's capabilities, features, and value proposition to potential users. The website is built with modern web technologies and integrates a live demo of the Eudox app interface.

### Key Features

- **Real App Integration**: Live demo of the Eudox chat interface showing AI-powered deal analysis
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode Support**: Full dark/light theme support with seamless transitions
- **University Partnerships**: Carousel showcasing elite university partnerships (Emory, USC, Northwestern, Columbia)
- **Pricing Plans**: Tiered pricing with "Get Started" and "Contact Sales" CTAs
- **Performance Optimized**: Fast load times with optimized images and lazy loading

---

## 🛠 Tech Stack

- **Frontend**: React 19 + Tailwind CSS 4 + TypeScript
- **Backend**: Express 4 + tRPC 11
- **Database**: MySQL/TiDB with Drizzle ORM
- **Authentication**: Manus OAuth
- **Deployment**: Manus Platform
- **UI Components**: shadcn/ui + custom components

---

## 📁 Project Structure

```
eudox-website/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AppWindow.tsx          # Soren-style macOS window chrome
│   │   │   ├── ChatDemo.tsx           # Live Eudox app chat interface demo
│   │   │   ├── Hero.tsx               # Hero section with app demo
│   │   │   ├── Product.tsx            # Product features showcase
│   │   │   ├── Features.tsx           # Key features section
│   │   │   ├── Comparison.tsx         # Pricing comparison table
│   │   │   ├── EarlyAccess.tsx        # Pricing plans & contact form
│   │   │   ├── TeamBadge.tsx          # University logos carousel
│   │   │   ├── Footer.tsx             # Footer with About Us modal
│   │   │   └── Navbar.tsx             # Navigation bar
│   │   ├── pages/
│   │   │   ├── Home.tsx               # Landing page
│   │   │   └── NotFound.tsx           # 404 page
│   │   ├── App.tsx                    # Main app routing
│   │   ├── main.tsx                   # Entry point
│   │   └── index.css                  # Global styles
│   └── public/
│       ├── images/universities/       # University logos (800x280px)
│       └── ...
├── server/
│   ├── routers.ts                     # tRPC procedures
│   ├── db.ts                          # Database queries
│   └── _core/                         # Framework internals
├── drizzle/
│   ├── schema.ts                      # Database schema
│   └── migrations/                    # Database migrations
├── todo.md                            # Project task tracking
└── README.md                          # This file
```

---

## 🎨 Design System

### Color Palette

- **Primary Brand**: Cyan (#00D9D9) – Used for CTAs and highlights
- **Dark Background**: #0B102C – Main dark mode background
- **Light Background**: White (#FFFFFF) – Light mode background
- **Text**: Foreground colors with proper contrast ratios

### Typography

- **Headlines**: Bold, large sans-serif
- **Body**: Regular weight, readable line-height
- **Accent**: Cyan for highlights and interactive elements

### Components

- **Buttons**: Cyan primary, outline secondary variants
- **Cards**: Dark backgrounds with subtle borders
- **Modals**: Dialog components for About Us, Privacy Policy, Terms
- **Carousel**: Infinite loop university logo carousel

---

## 🚀 Getting Started

### Prerequisites

- Node.js 22.13.0+
- pnpm package manager
- MySQL/TiDB database connection

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
# Copy .env.example to .env and fill in required values

# Push database schema
pnpm db:push

# Start development server
pnpm dev
```

The website will be available at `http://localhost:3000`

---

## 📝 Key Pages & Sections

### Hero Section
Displays the main value proposition with a live demo of the Eudox app interface showing:
- Chat conversation between user and AI
- File upload display (Excel format)
- Company research progress
- Action buttons (Additional Research, Excel Edit, Report Generation, Q&A)

### Product Section
Showcases the core capabilities and workflow of the Eudox platform.

### Features Section
Highlights key differentiators:
- 16M+ companies tracked
- 24/7 real-time monitoring
- 10x faster origination

### Comparison Section
Displays pricing tiers and feature comparison between Free and Customized plans.

### Pricing Section (EarlyAccess)
- **Free Plan**: Get Started CTA
- **Customized Plan**: Contact Sales CTA
- Contact form for inquiries
- Consistent dark background (#0B102C)

### University Logos Carousel
Infinite loop carousel featuring:
- Emory University
- USC (with shield and text)
- Northwestern University (with seal)
- Columbia University (with crown)

All logos are 800x280px with white backgrounds for consistency.

---

## 🔧 Development Workflow

### Adding Features

1. **Update Database Schema** (if needed):
   ```bash
   # Edit drizzle/schema.ts
   pnpm db:push
   ```

2. **Add Backend Logic**:
   - Create query helpers in `server/db.ts`
   - Add tRPC procedures in `server/routers.ts`

3. **Build Frontend UI**:
   - Create components in `client/src/components/`
   - Use shadcn/ui components for consistency
   - Call tRPC hooks for data fetching

4. **Test**:
   ```bash
   pnpm test
   ```

### Styling Guidelines

- Use Tailwind CSS utility classes
- Maintain dark mode compatibility with `dark:` prefix
- Reference design tokens from `client/src/index.css`
- Keep components responsive with mobile-first approach

---

## 🎯 Current Features

- ✅ Responsive landing page
- ✅ Real app interface demo integration
- ✅ Pricing plans with CTAs
- ✅ University partnership carousel
- ✅ Dark/light theme support
- ✅ Contact form integration
- ✅ About Us modal with team credentials
- ✅ Footer with links and modals

---

## 📋 Todo & Future Enhancements

See `todo.md` for the complete task list. Current priorities:

- [ ] Add animated typing effect to chat demo
- [ ] Create interactive demo state transitions
- [ ] Optimize image file sizes
- [ ] Add accessibility labels to all interactive elements
- [ ] Implement carousel controls (prev/next buttons)
- [ ] Add team member profiles with photos
- [ ] Create dedicated team page
- [ ] Implement email notifications for form submissions

---

## 🔐 Environment Variables

Required environment variables (automatically injected by Manus):

```
DATABASE_URL              # MySQL/TiDB connection string
JWT_SECRET               # Session cookie signing secret
VITE_APP_ID              # Manus OAuth application ID
OAUTH_SERVER_URL         # Manus OAuth backend URL
VITE_OAUTH_PORTAL_URL    # Manus login portal URL
OWNER_OPEN_ID            # Owner's OpenID
OWNER_NAME               # Owner's name
BUILT_IN_FORGE_API_URL   # Manus built-in APIs URL
BUILT_IN_FORGE_API_KEY   # Manus built-in APIs key
VITE_FRONTEND_FORGE_API_KEY    # Frontend API key
VITE_FRONTEND_FORGE_API_URL    # Frontend APIs URL
VITE_ANALYTICS_ENDPOINT        # Analytics endpoint
VITE_ANALYTICS_WEBSITE_ID      # Analytics website ID
```

---

## 🚢 Deployment

The website is deployed on the Manus platform with the following domains:

- `eudox.ai` (primary domain)
- `www.eudox.ai`
- `eudoxai.manus.space` (Manus subdomain)
- `eudoxdeal-lkatgpe7.manus.space` (Manus subdomain)

### Publishing

1. Create a checkpoint with `webdev_save_checkpoint`
2. Click the **Publish** button in the Manus Management UI
3. Select the checkpoint to deploy

---

## 📊 Analytics

The website integrates with Manus Analytics to track:
- Page views and user sessions
- CTA button clicks (Get Started, Contact Sales)
- Form submissions
- User engagement metrics

---

## 🤝 Contributing

When making changes to the website:

1. Update `todo.md` with new tasks
2. Create feature branches for significant changes
3. Test thoroughly before committing
4. Write unit tests for new functionality
5. Save checkpoints before major updates

---

## 📞 Support & Feedback

For questions, issues, or feature requests related to the website, please reach out to the Eudox team or submit feedback through the contact form on the website.

---

## 📄 License

This project is proprietary and confidential. All rights reserved by Eudox AI.

---

## 🙏 Acknowledgments

- Built by elite students from **Emory University**, **USC Viterbi School of Engineering**, **Northwestern University**, and **Columbia University**
- Powered by Manus platform
- UI components from shadcn/ui and Tailwind CSS
- Inspired by modern SaaS design patterns

---

**Last Updated**: February 28, 2026  
**Current Version**: e31d91a2 (with real app UI integration)
