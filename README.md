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

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or newer)
- MongoDB
- npm or yarn

### Installation

1. Clone repository
```bash
git clone https://github.com/yourusername/fxdragunov.git
cd fxdragunov
```

2. Install dependencies for each part
```bash
# Backend
cd backend
npm install

# Landing Page
cd ../landing-page
npm install

# Admin Dashboard
cd ../dashboard-admin
npm install
```

3. Setup environment variables

Backend (.env):
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=5000
```

Frontend (.env):
```
VITE_API_BASE_URL=http://localhost:5000/api
```

4. Run development server

```bash
# Backend
cd backend
npm run dev

# Landing Page
cd ../landing-page
npm run dev

# Admin Dashboard
cd ../dashboard-admin
npm run dev
```

## 🌐 Deployment

This project is deployed using Vercel with monorepo configuration:

- Landing Page: `https://fxdragunov.vercel.app`
- Admin Dashboard: `https://fxdragunov.vercel.app/admin`
- Backend API: `https://fxdragunov.vercel.app/api`

### Environment Variables in Vercel

```
# Backend
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=production

# Frontend
VITE_API_BASE_URL=https://fxdragunov.vercel.app/api
```

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

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Copyright © 2024 FXDragunov Indonesia. All rights reserved.