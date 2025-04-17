# 🌍 Travel Booking Website (MERN Stack)

A full-featured travel booking platform built with **MongoDB**, **Express**, **React**, and **Node.js**. Users can explore destinations, make bookings, and admins can manage trips and transactions. Razorpay is integrated for secure payments.

---

## 🚀 Features

- ✈️ Browse and book travel packages
- 👤 User authentication (JWT)
- 🔐 Admin dashboard for managing bookings & packages
- 💳 Razorpay payment gateway integration
- 🖼️ Image support for destinations using Unsplash
- 📦 RESTful API with Express.js
- 📱 Fully responsive frontend UI

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT
- **Payments:** Razorpay
- **Image Hosting:** Unsplash API

---

## 📁 Project Structure
```
Travel_Booking_Website/
│
├── backend/                            # Backend using Node.js, Express, and MongoDB
│
│   ├── controllers/                    # Logic for handling requests
│   │   └── bookingController.js
│   │   └── userController.js
│
│   ├── models/                         # Mongoose schemas for data models
│   │   └── User.js
│   │   └── Booking.js
│   │   └── Destination.js
│
│   ├── routes/                         # API routes
│   │   └── userRoutes.js
│   │   └── bookingRoutes.js
│
│   ├── config/                         # DB connection and config files
│   │   └── db.js
│
│   ├── middleware/                     # Custom middleware like auth, error handling
│   │   └── authMiddleware.js
│
│   ├── utils/                          # Utility functions
│   │   └── validators.js
│
│   ├── app.js                          # Main Express app
│   ├── server.js                       # Entry point to start the server
│   ├── package.json                    # Backend dependencies and scripts
│   └── .env                            # Environment variables
│
├── frontend/                           # Frontend using React
│
│   ├── public/                         # Static assets
│   │   └── index.html
│
│   ├── src/                            # React app source files
│   │
│   │   ├── components/                 # Reusable UI components
│   │   │   └── Navbar.js
│   │   │   └── Footer.js
│   │   │   └── DestinationCard.js
│   │
│   │   ├── pages/                      # Pages/routes of the app
│   │   │   └── Home.js
│   │   │   └── Login.js
│   │   │   └── Register.js
│   │   │   └── Bookings.js
│   │   │   └── AdminPanel.js
│   │
│   │   ├── services/                   # Axios config and API calls
│   │   │   └── api.js
│   │
│   │   ├── App.js                      # Root component with routes
│   │   ├── index.js                    # React DOM rendering
│   │   ├── App.css                     # Main styling
│   │   └── .env                        # Frontend env variables (e.g., API base URL)
│
│   ├── package.json                    # Frontend dependencies and scripts
│
├── README.md                           # Project documentation
└── .gitignore                          # Git ignore rules

```
