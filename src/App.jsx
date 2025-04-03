import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Features from "./components/Features";
import Mission from "./components/Mission";
import "animate.css";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Success from "./components/payment/Success";
import Cancel from "./components/payment/Cancel";
import ContactForm from "./components/ContactForm";
import BookingHour from "./components/BookingHour";
import Footer from "./components/Footer";
import RedList from "./components/pages/RedList";
import AnimalDetail from "./components/pages/AnimalDetail";
import Blog from "./components/pages/Blog";
import BlogDetails from "./components/pages/BlogDetails";
import Volunteer from "./components/pages/Volunteer";
import VolunteerHead from "./components/pages/VolunteerHead";
import Events from "./components/pages/Events";
import Donation from "./components/pages/Donation";
import EventRegistration from "./components/pages/EventRegistration";

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Header />
                            <About />
                            <Features />
                            <Mission />
                            <Team />
                            <Testimonials />
                            <Booking />
                            <ContactForm />
                            <BookingHour />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/redlist"
                    element={
                        <>
                            <Navbar /> <RedList />
                        </>
                    }
                />
                <Route
                    path="/animal/:id"
                    element={
                        <>
                            <Navbar /> <AnimalDetail />
                        </>
                    }
                />
                <Route
                    path="/blog"
                    element={
                        <>
                            <Navbar />
                            <Blog />
                        </>
                    }
                />
                <Route
                    path="/blog/:id"
                    element={
                        <>
                            <Navbar />
                            <BlogDetails />
                        </>
                    }
                />

                <Route
                    path="/volunteer"
                    element={
                        <>
                            <Navbar />
                            <Volunteer />
                        </>
                    }
                />
                <Route
                    path="/events"
                    element={
                        <>
                            <Navbar />
                            <Events />
                        </>
                    }
                />
                <Route
                    path="/donation"
                    element={
                        <>
                            <Navbar />
                            <Donation />
                        </>
                    }
                />
                  <Route
                    path="/eventRegister"
                    element={
                        <>
                            <Navbar />
                            <EventRegistration />
                        </>
                    }
                />
                <Route path="/success" element={<Success />} />
                <Route path="/cancel" element={<Cancel />} />
            </Routes>
        </Router>
    );
};

export default App;
