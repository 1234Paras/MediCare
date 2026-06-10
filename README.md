# 🏥 Medicare+ Hospital Management System

A modern **Hospital Management System** built using the **MERN Stack** that enables patients to book appointments, browse healthcare services, make secure payments, and manage their healthcare experience online. The platform also provides dedicated dashboards for **Doctors** and **Administrators** to efficiently manage hospital operations.

---

## 📸 Project Overview

### 👤 Patient Portal
- Browse doctors and healthcare services
- Book appointments online
- Secure authentication using Clerk
- Manage profile and appointments
- Make secure payments through Stripe

### 🛠️ Admin Dashboard
- Manage doctors
- Manage healthcare services
- View appointments
- Manage service appointments
- Hospital administration panel

### 👨‍⚕️ Doctor Dashboard
- View appointments
- Manage profile
- Monitor patient interactions

---

## 🚀 Features

### 👤 Patient Features

- User Authentication with Clerk
- Browse Doctors
- View Doctor Profiles
- Book Appointments
- Browse Healthcare Services
- Service Booking
- Online Payments with Stripe
- Appointment History
- Profile Management
- Responsive User Interface

### 👨‍⚕️ Doctor Features

- Doctor Dashboard
- View Appointments
- Edit Profile
- Manage Availability

### 🛠️ Admin Features

- Dashboard Overview
- Add Doctors
- Manage Doctors
- Add Healthcare Services
- Manage Services
- View Appointments
- Manage Service Appointments
- Hospital Operations Management

---

## 🏗️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Clerk Authentication
- CSS3/ tailwind css

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer

### Third-Party Services
- Clerk (Authentication & User Management)
- Stripe (Payment Gateway)
- Cloudinary (Image Storage)
- Render (Deployment)

---

## 📂 Project Structure

```bash
MEDICARE/
│
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── doctor/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 👥 User Roles

### 👤 Patient
- Sign Up / Login
- Browse Doctors
- Book Appointments
- Browse Services
- Make Online Payments
- Manage Profile

### 👨‍⚕️ Doctor
- Doctor Dashboard
- View Patient Appointments
- Edit Profile
- Manage Availability

### 🛠️ Admin
- Add Doctors
- Manage Doctor Records
- Add Services
- Manage Services
- View Appointments
- Manage Service Appointments
- Hospital Management

---

## 🔐 Environment Variables

### Frontend (.env)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Admin (.env)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Backend (.env)

```env
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

CLERK_SECRET_KEY=your_clerk_secret_key

CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

JWT_SECRET=your_jwt_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/your-username/medicare.git

cd medicare
```

### Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Admin

```bash
cd admin
npm install
```

#### Backend

```bash
cd backend
npm install
```

### Run Development Server

#### Backend

```bash
npm run server
```

#### Frontend

```bash
npm run dev
```

#### Admin

```bash
npm run dev
```

---

## ☁️ Cloudinary Integration

Cloudinary is used for:

- Doctor Images
- Service Images
- Cloud Storage
- Optimized Image Delivery

---

## 💳 Stripe Payment Integration

Stripe provides:

- Secure Online Payments
- Appointment Payment Processing
- Payment Verification
- Secure Transactions

---

## 🔑 Authentication & Security

### Clerk Authentication

- User Registration
- User Login
- Session Management
- Protected Routes

### JWT Authentication

- API Security
- Route Protection
- Secure Token Validation

---

## 📊 Core Modules

### Patient Management
- Registration
- Login
- Profile Management
- Appointment Booking

### Doctor Management
- Add Doctors
- Update Doctor Information
- Appointment Tracking

### Service Management
- Add Services
- Update Services
- Service Booking

### Appointment Management
- Doctor Appointments
- Service Appointments
- Appointment Status Tracking

### Payment Management
- Stripe Integration
- Payment Verification
- Secure Transactions

---

## 🌐 Deployment

### Frontend
- Render (https://medicare-frontend-sync.onrender.com)

### Admin Panel
- Render (https://medicare-admin-n1br.onrender.com)

### Backend API
- Render (https://medicare-backend-qvrv.onrender.com)

---

## 🎯 Future Enhancements

- Email Notifications
- SMS Appointment Alerts
- Video Consultation
- Medical Report Upload
- Patient Medical History
- Prescription Management
- Analytics Dashboard
- Doctor Availability Calendar

---

## 👨‍💻 Developer

**Paras Jain**

### Medicare+ Hospital Management System

Built with ❤️ using MERN Stack, Clerk, Stripe, Cloudinary, JWT, Multer, MongoDB, and Render.

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!
