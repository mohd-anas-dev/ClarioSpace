# ClarioSpace 📚

> *A space where clarity meets collaboration.*

ClarioSpace is a modern, full-stack web application designed as an all-in-one platform for academic resource management. It provides a unified workspace where users can organize, share, and collaborate on academic files, transforming static resources into dynamic, interactive conversations.

![ClarioSpace](https://i.postimg.cc/GhcnSbq9/image.png) 

## ✨ Features

### 🗂️ File Management
- **Multi-file Upload**: Upload up to 10 files simultaneously (Press "Upload" to Upload)
- **Smart Organization**: Automatic file type detection with custom icons
- **Tagging System**: Organize files with Work, Study, and Personal tags
- **File Operations**: View, download, and delete files with intuitive controls
- **Format Support**: PDFs, Office documents, images, videos, audio, and more

### 🔐 Authentication & Security
- **Secure Authentication**: JWT-based authentication with HTTP-only cookies
- **Password Security**: bcryptjs encryption for password protection
- **Password Recovery**: Secure password reset with token expiration
- **Protected Routes**: Automatic authentication verification for dashboard access

### 🎨 Modern User Interface
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Smooth Animations**: Framer Motion and GSAP-powered interactions
- **Clean Components**: Radix UI-based component library
- **Page Transitions**: Elegant block-based page transitions
- **Interactive Elements**: Custom hover effects and loading states

### 🚀 Performance
- **Smooth Scrolling**: Lenis integration for fluid scroll experience
- **Optimized Loading**: Code splitting and lazy loading
- **Modern Build**: Vite-powered development and production builds

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js v5.1.0
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT + bcryptjs
- **File Handling**: Multer for multipart uploads
- **Security**: CORS, cookie-parser

### Frontend
- **Framework**: React v19.1.1
- **Build Tool**: Vite v7.1.2
- **Routing**: React Router DOM v7.8.2
- **Styling**: TailwindCSS v4.1.13
- **Animations**: 
  - Framer Motion v12.23.16
  - GSAP v3.13.0
  - Lenis for smooth scrolling
- **UI Components**: Radix UI
- **HTTP Client**: Axios
- **Icons**: Lucide React

## 📁 Project Structure

```
ClarioSpace/
├── Backend/
│   ├── controllers/          # Business logic
│   ├── middlewares/          # Authentication middleware
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API endpoints
│   ├── utils/               # Utility functions
│   ├── index.js             # Server entry point
│   ├── MongoConnection.js   # Database configuration
│   └── multer.config.js     # File upload configuration
├── Frontend/
│   ├── src/
│   │   ├── ComponentPages/   # Page components
│   │   ├── components/       # Reusable UI components
│   │   ├── Routes/          # Routing configuration
│   │   ├── assets/          # Static resources
│   │   └── ComponentStyles/ # CSS modules
│   ├── public/              # Public assets
│   └── index.html           # Entry HTML
├── .env                     # Environment variables
├── package.json            # Root dependencies
└── README.md               # This file
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/clariospace.git
cd clariospace
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd Frontend
npm install
cd ..
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_URI=your_jwt_secret_key
NODE_ENV=development
```

### 4. Create Upload Directory
```bash
# Create directory for file uploads (adjust path as needed)
mkdir ../userUploads
```

### 5. Start the Application

#### Development Mode
```bash
# Terminal 1 - Start Backend Server
npm start

# Terminal 2 - Start Frontend Development Server
cd Frontend
npm run dev
```

#### Production Build
```bash
# Build frontend for production
cd Frontend
npm run build
npm run preview
```

### 6. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000

## 🔗 API Endpoints

### Authentication Endpoints
```
POST   /api/auth/signup              # User registration
POST   /api/auth/login               # User login
DELETE /api/auth/logout              # User logout
POST   /api/auth/forgot-password     # Password reset request
POST   /api/auth/reset-password/:token # Password reset
GET    /api/auth/check-auth          # Verify authentication
```

### File Management Endpoints
```
POST   /api/uploads/uploadFiles        # Upload multiple files
GET    /api/uploads/userFiles          # Get user files (recent)
GET    /api/uploads/allUserFiles       # Get all user files
GET    /api/uploads/allUserFiles/:ext  # Filter by file extension
DELETE /api/uploads/deleteFile/:filename # Delete file
PATCH  /api/uploads/UpdateFile/:filename # Update file tags
```

## 🎯 Usage Guide

### Getting Started
1. **Registration**: Create your account on the `/login` page
2. **Dashboard**: Access your personal dashboard at `/dashboard`
3. **File Upload**: Use the MyFiles section to upload and manage files
4. **Organization**: Tag your files for better organization
5. **Management**: View, download, or delete files as needed

### File Organization
- **Work**: Professional and work-related documents
- **Study**: Academic materials and study resources
- **Personal**: Personal documents and files

### Navigation
- **Dashboard**: Overview and quick access
- **My Files**: File management interface
- **Friends**: Collaboration features (coming soon)
- **Settings**: Account and application settings (coming soon)

## 🔧 Configuration

### Database Schema

#### User Model
```javascript
{
  userName: String,
  userEmail: String (unique),
  userPassword: String (hashed),
  userIsVerified: Boolean,
  userLastLoginDate: Date,
  resetPasswordToken: String,
  resetPasswordTokenExpiresAt: Date
}
```

#### File Model
```javascript
{
  fileOriginalName: String,
  fileFileName: String,
  fileFilePath: String,
  fileFileSize: String,
  fileFileType: String,
  fileTags: String (Work|Study|Personal),
  userID: ObjectId
}
```

### Environment Variables
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET_URI`: Secret key for JWT token generation
- `NODE_ENV`: Environment mode (development/production)

## 🎨 Animation Features

### Page Transitions
- Block-based transition effects using Framer Motion
- Smooth entry and exit animations between routes

### Interactive Elements
- GSAP-powered scroll animations
- Custom cursor effects on team member images
- Rotating text animations with staggered characters
- Smooth scrolling with Lenis integration

### Loading States
- Custom CSS bar animations for loading indicators
- Smooth fade-in effects for content

## 🚀 Deployment

### Production Considerations
1. **Environment**: Set `NODE_ENV=production`
2. **Security**: Use strong JWT secrets
3. **Database**: Configure MongoDB for production
4. **File Storage**: Consider cloud storage for uploaded files
5. **HTTPS**: Enable SSL/TLS in production

### Recommended Hosting
- **Frontend**: Vercel, Netlify, or AWS S3 + CloudFront
- **Backend**: Heroku, Railway, or AWS EC2
- **Database**: MongoDB Atlas
- **File Storage**: AWS S3, Cloudinary, or similar

## 🤝 Contributing

We welcome contributions to ClarioSpace! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow the existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation when necessary

## 👥 Team

### Core Contributors
- **Mohammed Anas** - Full-Stack Lead, Founder & Lead Architect
- **Sayed Mohammed Anas** - Backend Lead, QA & Testing Lead, Documentation Lead
- **Mohammed Zuhaib Khan** - UI/UX Designer & Authorization Security

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.


## 🔮 Roadmap

### Upcoming Features
- [ ] Real-time collaboration tools
- [ ] Advanced file sharing capabilities
- [ ] Mobile application
- [ ] Integration with popular cloud storage services
- [ ] Advanced search and filtering
- [ ] File versioning system
- [ ] Team workspaces
- [ ] API for third-party integrations

### Performance Improvements
- [ ] Progressive Web App (PWA) features
- [ ] Offline functionality
- [ ] Advanced caching strategies
- [ ] Image optimization and CDN integration

---

**ClarioSpace** - Transforming academic resource management through clarity and collaboration.

*Built with ❤️ by the ClarioSpace Team*
