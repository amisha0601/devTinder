# 🚀 DevTinder Backend

![Node.js](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-API-black?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge&logo=jsonwebtokens)
![Socket.io](https://img.shields.io/badge/Socket.io-Real_Time-black?style=for-the-badge&logo=socketdotio)
![Razorpay](https://img.shields.io/badge/Razorpay-Payments-blue?style=for-the-badge)

DevTinder Backend powers a developer networking platform where users can discover developers, send connection requests, match with people, and communicate in real time.

The goal of this project was to move beyond basic CRUD APIs and build a backend that handles authentication, real-time communication, payments, notifications, and practical business logic similar to real-world applications.

---

## 🎥 Demo

[Watch Project Demo](https://github.com/user-attachments/assets/1994553d-02bf-4cc0-a968-0afee61970c1)

Frontend Repository:  
https://github.com/amisha0601/devtinder-ui

---

## ✨ Features

- User signup, login, and logout
- Secure authentication using JWT and cookies
- Password hashing with bcrypt
- Protected routes middleware
- Send and review connection requests
- Match-based interaction system
- Real-time chat using Socket.io
- Chat history storage
- Online/offline user tracking
- Premium membership support
- Razorpay payment integration
- Webhook verification
- Email notifications using AWS SES
- Scheduled reminder emails using cron jobs
- Dynamic developer filtering
- Seed database with sample developer accounts

---

## 🛠 Tech Stack

| Category | Technologies |
|-----------|--------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, Cookies, bcrypt |
| Real-time | Socket.io |
| Payments | Razorpay |
| Email Service | AWS SES |
| Scheduling | Node Cron |
| Validation | Validator.js |

---

## 🧠 How the Backend Works

The application follows a flow where users first authenticate themselves and receive secure JWT-based access.

After login:

- Users can browse developer profiles
- Send connection requests
- Accept or reject requests
- Chat only after becoming connected
- Upgrade to premium membership
- Receive reminder emails and notifications

The backend also stores chat history and tracks online users in real time.

---

## 🔐 Authentication Flow

Authentication is implemented using:

- Password hashing with bcrypt
- JWT token generation
- Secure cookie storage
- Middleware-based route protection

This ensures only authenticated users can access protected features.

---

## 💬 Real-Time Chat

The chat system is implemented using Socket.io.

Features include:

- Real-time messaging
- Stored chat history
- Online user status
- Match-only chat permissions

Users cannot directly message random profiles and can chat only after establishing a connection.

---

## 💳 Premium Membership

Premium functionality is integrated using Razorpay.

Flow:

- User selects membership type
- Razorpay creates an order
- Webhook verifies payment
- User account is updated to premium

---

## 📁 Project Structure

```bash
src/
├── config/
├── middlewares/
├── models/
├── routes/
├── utils/
└── app.js
```

---

## ⚙️ Getting Started

Clone repository:

```bash
git clone https://github.com/amisha0601/devTinder.git
```

Install dependencies:

```bash
npm install
```

Create environment variables:

```env
PORT=8080
DB_CONNECTION_SECRET=your_mongodb_url
JWT_SECRET=your_secret
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
RAZORPAY_WEBHOOK_SECRET=your_secret
```

Run development server:

```bash
npm run dev
```

Start production server:

```bash
npm start
```

---

## 📚 What I Learned

Through this project I gained experience with:

- Designing scalable backend APIs
- JWT authentication workflows
- MongoDB schema relationships
- Real-time communication using Socket.io
- Payment integration with Razorpay
- Email notifications using AWS SES
- Background jobs with cron
- Structuring larger backend applications

---

## 👩‍💻 Author

**Amisha Singh**

GitHub: https://github.com/amisha0601

LinkedIn: https://www.linkedin.com/in/amisha-singh-896b04398/
