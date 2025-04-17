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
│   │   └── toolController.js
│
│   ├── models/                         # Mongoose schemas for data models
│   │   └── User.js
│   │   └── Review.js
│   │   └── Tour.js
│
│   ├── routes/                         # API routes
│   │   └── tour.js

│   ├── index.js                          # Main Express app
│   ├── package.json                    # Backend dependencies and scripts
│   └── package-lock-json                        
│
├── frontend/                           # Frontend using React
│
│   ├── public/                         # Static assets
│   │   └── index.html
│
│   ├── src/                            # React app source files
│   │
│   │   ├── public/                 # Reusable UI components
│   │   │   └── tour_images
│   │   │   └── index.html
│   │   │   └── DestinationCard.js
|   |   
│   │   ├── utils/                 # Reusable UI components
│   │   │   └── avgRating.js
│   │
│   │   ├── pages/                      # Pages/routes of the app
│   │   │   └── Home.jsx
│   │   │   └── Login.jsx
│   │   │   └── Register.jsx
│   │   │   └── SearchResult.jsx
│   │   │   └── ThankYou.jsx
|   |   |   └──tours.jsx
|   |
|   |
│   ├── routes/                         # API routes
│   │   └── tour.js
|   |
│   ├── services/                       
│   │   └── ServiceCard.jsx
│   │   └── ServiceList.jsx
│   │   └── Service-card.css
│   │
│   │   ├── services/                   
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
#

## 📄 Project Report File

🔗 **[Open Travel Booking Project on Google Drive](https://drive.google.com/file/d/1fQpksfmptWyJeomUn3aS8tuVduRqfg8v/view?usp=drive_link)**


## ⚙️ Setup Instructions

### Clone the Repo

```bash
git clone https://github.com/yourusername/travel-booking.git
cd travel-booking
run both the files frontend and backend

```

## 🎥 Project Presentation

([https://drive.google.com/file/d/1dSp9LYTIMKMj2PjSunJUQ3OPZOJcfA6Y/view?usp=drive_link](https://www.iconfinder.com/icons/3146788/youtube_logo_icon))](https://drive.google.com/file/d/16nC65d9rGBdgbTYmj3JjMjY7cUkrpsu_/view?usp=drive_link)

