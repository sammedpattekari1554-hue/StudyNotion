# 🚀 StudyNotion - Online Education Platform

StudyNotion is a full-stack EdTech platform built using the MERN stack that enables instructors to create and manage courses while allowing students to discover, purchase, and learn from educational content online.

---

## 🌟 Features

### 👨‍🎓 Student Features

* User Registration & Login
* JWT Authentication & Authorization
* Email OTP Verification
* Browse Courses by Category
* Course Search & Discovery
* Add Courses to Cart
* Secure Course Purchase via Razorpay
* Enroll in Courses
* Track Course Progress
* Watch Course Videos
* Rate and Review Courses
* Manage Profile
* Take AI-Generated Lecture Quizzes
* View Quiz Score & Pass/Fail Results

### 👨‍🏫 Instructor Features

* Instructor Dashboard
* Create & Publish Courses
* Upload Course Thumbnails
* Upload Video Lectures
* Add Sections & Subsections
* Manage Course Content
* View Students Enrolled
* Track Earnings
* Automatic AI Quiz Generation for Every Lecture

### 🤖 AI Features

* AI-Powered Quiz Generation using Groq LLM
* Automatic MCQ Creation During Lecture Upload
* Lecture-Specific Quiz Generation
* Instant Quiz Evaluation
* Pass/Fail Assessment
* Quiz Retake Support

### 🔐 Authentication Features

* JWT-based Authentication
* OTP Verification via Email
* Forgot Password Functionality
* Password Reset via Email

### ☁️ Media Management

* Cloudinary Integration
* Video Upload Support
* Image Upload Support

### 💳 Payment Integration

* Razorpay Payment Gateway
* Secure Checkout Flow
* Course Enrollment After Successful Payment

---

## 🏗️ System Architecture

### Frontend

* React.js
* Redux Toolkit
* React Router DOM
* Tailwind CSS

### Backend

* Node.js
* Express.js
* REST APIs
* JWT Authentication

### Database

* MongoDB Atlas
* Mongoose ODM

### Third-Party Services

* Cloudinary
* Razorpay
* Nodemailer
* Groq AI

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* Tailwind CSS
* React Router DOM
* React Hot Toast
* React Icons

### Backend

* Node.js
* Express.js
* JWT
* Bcrypt
* Mongoose
* Express File Upload
* Groq SDK

### Database

* MongoDB Atlas

### Cloud Services

* Cloudinary
* Razorpay
* Nodemailer
* Groq AI

---

## 🤖 AI Quiz Workflow

1. Instructor uploads a lecture.
2. Lecture title and description are sent to Groq AI.
3. AI generates multiple MCQ questions automatically.
4. Questions are stored in MongoDB.
5. Students can take lecture-specific quizzes.
6. Quiz score, percentage, and pass/fail status are displayed instantly.

---

## 📂 Project Structure

```bash
StudyNotion
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── mail
│
├── src
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── services
│   ├── slices
│   └── utils
│
└── public
```

---

## 🔑 Environment Variables

### Frontend (.env)

```env
REACT_APP_BASE_URL=http://localhost:4000/api/v1
REACT_APP_RAZORPAY_KEY=your_razorpay_key
```

### Backend (server/.env)

```env
PORT=4000

MONGODB_URL=your_mongodb_url

JWT_SECRET=your_jwt_secret

CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_secret
FOLDER_NAME=studynotion

MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password

RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret

GROQ_API_KEY=your_groq_api_key
```

---

## 📡 Core API Endpoints

### Authentication

```http
POST /api/v1/auth/signup
POST /api/v1/auth/login
POST /api/v1/auth/sendotp
POST /api/v1/auth/reset-password-token
POST /api/v1/auth/reset-password
```

### Courses

```http
POST /api/v1/course/createCourse
POST /api/v1/course/editCourse
GET  /api/v1/course/getAllCourses
GET  /api/v1/course/getCourseDetails
```

### Lecture Quiz APIs

```http
GET /api/v1/lecture-quiz/:subSectionId
POST /api/v1/lecture-quiz/generate/:subSectionId
```

### Payments

```http
POST /api/v1/payment/capturePayment
POST /api/v1/payment/verifyPayment
```

---

## 🚀 Future Enhancements

* AI Course Recommendations
* AI Study Assistant Chatbot
* Course Completion Certificates
* Real-Time Notifications
* Admin Dashboard
* Live Classes Integration
* Advanced Analytics
* Personalized Learning Paths

---

