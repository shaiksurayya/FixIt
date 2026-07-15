# 🚀 ServeConnect – Local Service Marketplace

> A Full-Stack Web Application that connects customers with trusted local service providers for seamless booking and management of home services.

---

## 📌 Project Overview

ServeConnect is a role-based Local Service Marketplace developed as a team project. The platform enables customers to discover, compare, and book trusted professionals such as electricians, plumbers, mechanics, beauticians, tutors, carpenters, and other local service providers.

The application simplifies the traditional service booking process by providing an online platform for service discovery, booking management, payment handling, provider verification, and customer reviews.

---

## 🎯 Objectives

- Connect customers with verified local service providers.
- Simplify online service booking.
- Provide secure authentication and authorization.
- Improve transparency using ratings and reviews.
- Enable providers to manage their services efficiently.
- Provide administrators with complete system management.

---

# 👥 User Roles

### 👤 Customer

- Register/Login
- Browse Categories
- Search Services
- View Provider Profiles
- Book Services
- Track Booking Status
- Make Payments
- Rate & Review Providers

---

### 🛠 Service Provider

- Register as Provider
- Manage Profile
- Add/Edit Services
- Accept or Reject Bookings
- Update Service Availability
- View Ratings & Reviews

---

### 🛡 Administrator

- Manage Users
- Verify Providers
- Manage Categories
- Monitor Bookings
- Manage Reviews
- Monitor Payments

---

# ✨ Features

- User Authentication
- Role-Based Authorization
- Provider Verification
- Service Listing
- Category Management
- Service Booking
- Booking Status Tracking
- Payment Management
- Customer Reviews
- Responsive User Interface
- Admin Dashboard

---

# 🗄 Database Design

The database follows a relational model designed to support service booking, provider management, payment tracking, and customer reviews.

### Main Entities

- Users
- Provider Profiles
- Categories
- Services
- Bookings
- Reviews

---

## ER Diagram

> Database Design

<p align="center">
    <img src="docs/ER-Diagram.png" width="900">
</p>

> **Note:** Place your ER Diagram inside a folder named **docs** as:

```
docs/
   ER-Diagram.png
```

---

# 🏗 System Architecture

```
React Frontend
        │
 REST API (Axios)
        │
Spring Boot Backend
        │
Spring Security + JWT
        │
      MySQL Database
```

---

# 💻 Technology Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Icons

## Backend

- Spring Boot
- Spring Security
- JWT Authentication
- RESTful APIs

## Database

- MySQL

## Development Tools

- VS Code
- IntelliJ IDEA
- Git
- GitHub
- Postman

---

# 📁 Project Structure

```
ServeConnect
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── layouts
│   │   ├── services
│   │   ├── hooks
│   │   └── App.jsx
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── security
│   └── config
│
└── README.md
```

---

# 🔄 Booking Workflow

```
Customer

↓

Search Services

↓

Choose Provider

↓

Book Service

↓

Provider Accepts Request

↓

Payment

↓

Service Completed

↓

Rating & Review
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/<username>/ServeConnect.git
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Backend

```bash
cd backend

mvn spring-boot:run
```

---

# 👨‍💻 Team Members

| Name | Role |
|------|------|
| **Shaik Shaikun Rani** | Frontend Developer (React.js, UI/UX) |
| **Shaik Surayya Tabassum**| Backend Developer (Spring Boot, REST APIs) |
| **Shaik Nusrath** | Backend Developer (Database & Security) |

---

# 🔮 Future Enhancements

- Live Chat
- Live Location Tracking
- AI Service Recommendation
- Voice Search
- Push Notifications
- Multi-language Support
- Mobile Application

---

# 📜 License

This project is developed for academic and educational purposes.

---

# ⭐ Acknowledgement

This project was developed as a collaborative academic project to demonstrate full-stack web development using React.js, Spring Boot, and MySQL.
