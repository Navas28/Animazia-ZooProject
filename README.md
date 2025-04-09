# 🐾 Animazia - Zoo Website

Animazia is a modern, interactive, and fully functional full-stack zoo website that offers everything from ticket booking and donations to showcasing environmental news and job opportunities. Designed with a clean UI/UX and packed with useful features, it brings the digital zoo experience to life!

## 🔗 Live Demo

👉 [Visit Animazia Live](https://frontend-zoo.vercel.app/)

## 📸 Screenshots

![Homepage](./screenshots/homepage.png)
![Programs](./screenshots/programs.png)
![Redlist](./screenshots/redlist.png)
![Volunteer Form](./screenshots/volunteer-form.png)
![Donation Page](./screenshots/donation.png)

## ✨ Features

- 🏠 **Home, About & Features**: Engaging sections introducing Animazia and its mission.
- 🦁 **Programs**: Educational and interactive programs offered at the zoo.
- 💬 **Testimonials**: Real feedback from zoo visitors.
- 🎟️ **Ticket Booking**: Integrated with **Stripe** for secure online payments.
- 📬 **Contact Us**: Working form that stores data in **MongoDB**.
- 🕒 **Visiting Hours**: Clearly displayed zoo visiting times.
- 🌿 **Eco Journal**: Latest articles, videos, and images on environmental topics.
- 🐘 **Redlist**: Detailed list of endangered animals with images, stats, and descriptions.
- 🙋‍♀️ **Volunteer Section**: View job opportunities and apply using a working form (MongoDB + resume upload).
- 🎉 **Events**:
  - Browse upcoming and completed zoo events.
  - Book upcoming events (data saved in **MongoDB**).
- 💖 **Donations**: Support environmental and animal causes with one-time donations via **Stripe**.

---

## 🧑‍💻 Tech Stack

### 🔹 Frontend
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion 12** – animations
- **Swiper.js** – interactive carousels
- **Keen Slider** – additional sliders
- **Lucide React** – modern icon set
- **React Icons** – for tech stack icons
- **Animate.css / AOS** – entrance animations
- **Preline & DaisyUI** – styled UI components

### 🔹 Backend
- **Node.js + Express 4**
- **MongoDB** – database
- **Mongoose** – MongoDB ODM
- **Multer** – file uploads (e.g., resume in volunteer form)
- **Dotenv** – environment variables
- **Body-parser & CORS** – middleware for requests

### 🔹 Payments & Forms
- **Stripe** (`@stripe/stripe-js`, `@stripe/react-stripe-js`) – ticketing & donations
- **Axios** – HTTP requests (forms, API, etc.)

### 🔹 Development Tools
- **Vite 6** – fast build tool
- **Nodemon** – backend live reloading
- **ESLint** – code linting
- **React Router DOM 7** – routing

### 🔹 Hosting
- **Frontend**: Vercel
- **Backend**: Render 

---

## 📂 Project Structure

