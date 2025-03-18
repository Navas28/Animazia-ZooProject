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

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration (in ms)
            once: false, // Animation runs once (true/false)
        });
    }, []);
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <About />
                            <Features />
                            <Mission />
                            <Team />
                            <Testimonials />
                            <Booking />
                            <ContactForm/>
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
