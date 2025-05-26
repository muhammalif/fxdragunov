# FXDragunov Backend API

The backend API server for FXDragunov Indonesia, built with Node.js, Express, and MongoDB. This server handles all data operations, authentication, and business logic for both the landing page and admin dashboard.

## 🚀 Features

- RESTful API architecture
- JWT Authentication
- MongoDB database integration
- File upload handling
- Rate limiting
- CORS configuration
- Error handling middleware
- Request validation
- Security headers

## 🛠️ Technologies

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer for file uploads
- Express Rate Limit
- CORS
- Dotenv for environment variables
- Bcrypt for password hashing

## 📦 Project Structure

```
backend/
├── config/             # Configuration files
├── controllers/        # Route controllers
├── middleware/         # Custom middleware
├── models/            # Database models
├── routes/            # API routes
├── uploads/           # Uploaded files
├── utils/             # Utility functions
├── .env              # Environment variables
├── .gitignore        # Git ignore file
├── package.json      # Project dependencies
└── server.js         # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or newer)
- MongoDB
- npm or yarn

### Installation

1. Install dependencies
```bash
npm install
```

2. Setup environment variables
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=5000
```

3. Run development server
```bash
npm run dev
```

4. Run production server
```bash
npm start
```

## 📝 Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed:admin` - Seed admin user

## 🔧 Configuration

### Environment Variables

- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT
- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 5000)

### Database Configuration

MongoDB connection is configured in `config/db.js`. The application uses Mongoose for MongoDB interactions.

## 🔒 Security Features

- JWT Authentication
- Password hashing with bcrypt
- Rate limiting
- CORS configuration
- Security headers
- Request validation
- File upload restrictions

## 📊 API Endpoints

### Authentication
- `POST /api/admin/login` - Admin login
- `POST /api/admin/logout` - Admin logout

### Articles
- `GET /api/articles` - Get all articles
- `GET /api/articles/:id` - Get article by ID
- `POST /api/articles` - Create new article
- `PUT /api/articles/:id` - Update article
- `DELETE /api/articles/:id` - Delete article

### File Upload
- `POST /api/upload` - Upload file
- `GET /api/uploads/:filename` - Get uploaded file

## 🔄 Database Models

### User
- username
- password (hashed)
- role
- createdAt
- updatedAt

### Article
- title
- content
- image
- author
- status
- createdAt
- updatedAt

## 🚀 Performance

- Request rate limiting
- Response compression
- Caching strategies
- Error handling
- Logging

## 🔍 Error Handling

- Custom error middleware
- Validation error handling
- Database error handling
- File upload error handling
- Authentication error handling

## 📝 Logging

- Request logging
- Error logging
- Authentication logging
- File upload logging

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

Copyright © 2024 FXDragunov Indonesia. All rights reserved. 