# Medicare+ Hospital Management System

## 🏥 Overview

Medicare+ Hospital Management System is a comprehensive web-based application designed to streamline hospital operations and improve healthcare management. The system enables efficient management of patients, doctors, appointments, medical records, billing, and hospital services through a centralized platform.

The primary goal of this project is to digitize hospital workflows, reduce manual paperwork, improve data accuracy, and enhance patient care.

---

## 🚀 Features

### 👨‍⚕️ Doctor Management
- Add, update, and delete doctor profiles
- Manage doctor specialization and availability
- View doctor schedules

### 🧑‍🤝‍🧑 Patient Management
- Register new patients
- Update patient information
- Maintain patient medical history
- Search patient records

### 📅 Appointment Management
- Book appointments online
- View appointment schedules
- Cancel or reschedule appointments
- Track appointment status

### 🏥 Department Management
- Manage hospital departments
- Assign doctors to departments
- View department-wise doctor information

### 💊 Medical Services
- Blood Pressure Checkup
- Diabetes Screening
- Full Body Checkup
- Cardiology Consultation
- Neurology Consultation
- Orthopedic Care
- Pediatric Care
- Emergency Services

### 💳 Billing System
- Generate patient bills
- Track payment status
- View billing history
- Calculate treatment charges

### 🔐 User Authentication
- Secure login system
- Role-based access control
- Admin and staff management

### 📊 Dashboard
- Hospital statistics overview
- Patient count tracking
- Doctor count tracking
- Appointment analytics

---

## 🛠️ Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap

### Backend
- Java
- Spring Boot

### Database
- MySQL

### Tools & IDE
- IntelliJ IDEA / Eclipse
- MySQL Workbench
- Git & GitHub

---

## 📂 Project Structure

```text
MedicarePlus/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   ├── resources/
│   │   └── templates/
│
├── database/
│   └── medicareplus.sql
│
├── screenshots/
│
├── README.md
│
└── pom.xml
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Java JDK 17+
- MySQL Server
- Maven
- IDE (IntelliJ IDEA/Eclipse)

### Steps

1. Clone the repository

```bash
git clone https://github.com/yourusername/MedicarePlus.git
```

2. Navigate to the project directory

```bash
cd MedicarePlus
```

3. Configure MySQL database

Create a database:

```sql
CREATE DATABASE medicareplus;
```

4. Update database credentials in:

```properties
application.properties
```

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/medicareplus
spring.datasource.username=root
spring.datasource.password=your_password
```

5. Run the application

```bash
mvn spring-boot:run
```

6. Open in browser

```text
http://localhost:8080
```

---

## 📸 Screenshots

### Login Page
(Add Screenshot Here)

### Dashboard
(Add Screenshot Here)

### Patient Management
(Add Screenshot Here)

### Appointment Management
(Add Screenshot Here)

### Billing System
(Add Screenshot Here)

---

## 🎯 Objectives

- Digitize hospital management processes
- Improve patient record management
- Reduce paperwork and manual errors
- Enhance doctor-patient coordination
- Provide efficient appointment scheduling
- Improve healthcare service delivery

---

## 🔮 Future Enhancements

- Online payment integration
- Telemedicine support
- Prescription management
- Email/SMS notifications
- AI-powered health recommendations
- Mobile application support

---

## 👨‍💻 Author

**Paras Jain**

Hospital Management System Project

---

## 📄 License

This project is developed for educational and learning purposes.
