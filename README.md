# FXDragunov Indonesia

FXDragunov Indonesia is a forex trading education and tools platform that provides various features to help traders in conducting analysis and making trading decisions.

## 🚀 Features

### Landing Page
- Information about FXDragunov
- Forex articles and education
- Trading tools
- Contact and social media

### Admin Dashboard
- Article management
- Content management
- Statistics and analytics

## 🛠️ Technologies

### Frontend
- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- React Hook Form
- Axios
- Lucide Icons

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Multer (File Upload)

## 📦 Project Structure

```
fxdragunov/
├── landing-page/          # Main frontend
├── dashboard-admin/       # Admin dashboard
├── backend/              # Backend API
└── vercel.json          # Vercel configuration
```

## 🌐 Deployment

This project is deployed using Vercel with monorepo configuration:

- Landing Page: `https://fxdragunov.vercel.app`
- Admin Dashboard: `https://fxdragunov.vercel.app/admin`
- Backend API: `https://fxdragunov.vercel.app/api`

## 📝 API Endpoints

### Authentication
- `POST /api/admin/login` - Admin login

### Articles
- `GET /api/articles` - Get all articles
- `POST /api/articles` - Create new article
- `PUT /api/articles/:id` - Update article
- `DELETE /api/articles/:id` - Delete article

## 🔒 Security

- JWT Authentication
- Rate Limiting
- CORS Configuration
- Secure Headers
- Environment Variables

## 📄 License

Copyright © 2024 FXDragunov Indonesia. All rights reserved.
