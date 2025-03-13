import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Features from "./components/Features";
import Mission from "./components/Mission";
import 'animate.css';
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";


const App = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration (in ms)
          once: false,     // Animation runs once (true/false)
        });
      }, []);      
    return (
        <div className="w-full overflow-hidden">
            <Header />
            <About/>
            <Features/>
            <Mission/>
            <Team/>
            <Testimonials/>
            <Booking/>
        </div>
    );
};

export default App;
