# MERZY ☕

Specialty Coffee & Bakery in Alexandria, Egypt. Built with Angular 18, Tailwind CSS, and modern best practices.

![Angular](https://img.shields.io/badge/Angular-18-red?logo=angular)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-blue?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Node](https://img.shields.io/badge/Node-22-green?logo=node.js)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (v22.14.0 recommended)
- npm 10+

### Installation & Run
```bash
# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

## ✨ Features

- **Hero Section** — Premium landing with Mediterranean branding
- **Brand Story** — MERZY narrative with value propositions
- **Coffee Section** — Espresso, V60, and signature drinks
- **Bakery Section** — Fresh pastries, desserts, and seasonal bakes
- **Interactive Menu** — Coffee & bakery items with add-to-cart
- **Cart** — Slide-out cart drawer with quantity controls
- **Order & Tracking** — Place orders and track status (Received → Preparing → Ready)
- **Alexandria Section** — Location beside the Bibliotheca Alexandrina
- **Responsive Design** — Mobile-first, works on all devices

## 🏗️ Architecture

```
src/app/
├── core/              # Services & models
│   ├── models/        # TypeScript interfaces
│   └── services/      # Business logic (menu, cart, order, motion)
├── features/          # Feature components
│   ├── hero/
│   ├── story/
│   ├── services/      # Coffee section
│   ├── process/       # Experience section
│   ├── menu/          # Menu with add-to-cart
│   ├── testimonials/   # Alexandria & location
│   └── order-tracking/
├── shared/            # Reusable components
│   ├── navbar/
│   ├── footer/
│   ├── cart/
│   └── background/
└── app.component.ts   # Root component
```

## 🛠️ Tech Stack

- **Framework**: Angular 18
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **State**: RxJS Observables
- **Build**: Angular CLI, esbuild

## 📦 Available Scripts

```bash
npm start              # Start dev server (port 4200)
npm run build          # Build for production
npm run lint           # Run ESLint
npm test               # Run unit tests
```

## 🎨 Design System

### Colors
- **Primary**: `#e7b977` (Warm gold)
- **Dark**: `#13211f` (Deep charcoal)
- **Cream**: `#f7f1e8` (Warm ivory)
- **Accent**: `#13374b` (Mediterranean blue)

### Typography
- **Macondo**: Headings (decorative)
- **Exo 2**: Body text (sans-serif)

## 🔧 Services

### MenuService
Coffee and bakery menu items with prices in EGP.

### CartService
Cart state management with RxJS BehaviorSubjects.

### OrderService
Order creation and status tracking (received → preparing → ready).

## 🚀 Build & Deploy

### Production Build
```bash
npm run build
```

Output: `dist/merzy/`

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist/merzy
```

## 📄 License

MERZY © 2024. All rights reserved.

---

**Good coffee. Fresh bakes. Alexandria by the sea.**
