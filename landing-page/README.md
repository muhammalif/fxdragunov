# FXDragunov Landing Page

The main frontend application for FXDragunov Indonesia, built with React, TypeScript, and Vite.

## 🚀 Features

- Responsive design for all devices
- Dark/Light mode support
- Dynamic content loading
- SEO optimized
- Fast page loading with Vite

## 🛠️ Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Hook Form
- Axios
- Lucide Icons

## 📦 Project Structure

```
landing-page/
├── src/
│   ├── assets/          # Static assets (images, fonts)
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utility functions
│   ├── styles/         # Global styles
│   └── App.tsx         # Main App component
├── public/             # Public assets
└── index.html          # Entry HTML file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Install dependencies
```bash
npm install
```

2. Setup environment variables
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

3. Run development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

- `VITE_API_BASE_URL` - Backend API URL

### Build Configuration

The project uses Vite for building. Configuration can be found in `vite.config.ts`.

## 🎨 Styling

- Tailwind CSS for utility-first styling
- Custom components using shadcn/ui
- Responsive design with mobile-first approach

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🔍 SEO

- Meta tags optimization
- Open Graph tags
- Twitter Card support
- Sitemap generation
- Robots.txt configuration

## 🚀 Performance

- Code splitting
- Lazy loading
- Image optimization
- Caching strategies
- Bundle size optimization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

Copyright © 2024 FXDragunov Indonesia. All rights reserved.
