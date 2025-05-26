# FXDragunov Admin Dashboard

The admin dashboard for FXDragunov Indonesia, built with React, TypeScript, and Vite. This dashboard provides a secure interface for managing website content and user data.

## 🚀 Features

- Secure authentication system
- Article management
- Content management
- User management
- Analytics dashboard
- Responsive design
- Dark/Light mode support

## 🛠️ Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Hook Form
- Axios
- JWT Authentication
- React Query
- Lucide Icons

## 📦 Project Structure

```
dashboard-admin/
├── src/
│   ├── assets/          # Static assets (images, fonts)
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utility functions
│   ├── api/            # API integration
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

## 🔒 Security Features

- JWT Authentication
- Protected Routes
- Role-based Access Control
- Secure API Communication
- Environment Variables Protection

## 📊 Dashboard Features

### Article Management
- Create, read, update, delete articles
- Rich text editor
- Image upload
- Article status management

### User Management
- User roles and permissions
- User activity tracking
- Account management

### Analytics
- Page views
- User engagement
- Content performance

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
