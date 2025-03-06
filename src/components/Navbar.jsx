import React, { useEffect, useState } from "react";
import logoGreen from "../assets/images/logo-green.png";
import logoWhite from "../assets/images/logo-off.png";
import { TiThMenuOutline } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const [stickyNavbar, setStickyNavbar] = useState(false);
    const [menuIcon, setMenuIcon] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setStickyNavbar(true) : setStickyNavbar(false);
        });
    }, []);

    const toggleMenu = () => setMenuIcon(!menuIcon);

    return (
        <nav
            className={`w-full px-5 py-5 fixed top-0 left-0 flex items-center justify-between z-10  ${
                stickyNavbar ? "bg-blackBean transition-all duration-500" : "bg-transparent"
            }`}
        >
            <img src={logoWhite} alt="logo" className="w-30 sm:w-[180px]" />
            <ul
                className={`sm:static sm:flex sm:z-auto sm:w-auto sm:bg-transparent sm:pt-0 sm:text-customeWhite font-para fixed top-0 right-0 bottom-0 bg-customeWhite cursor-pointer text-customeGreen z-10 w-48 pt-[70px] transition-all duration-500 ${
                    menuIcon ? "right-0" : "right-[-100%]"
                }`}
            >
                <a
                    href="#Home"
                    onClick={toggleMenu}
                    className="block my-10 mx-6 sm:inline-block sm:my-1.5 sm:mx-3 lg:mx-5 text-lg"
                >
                    Home
                </a>
                <a
                    href="#About"
                    onClick={toggleMenu}
                    className="block my-10 mx-6 sm:inline-block sm:my-1.5 sm:mx-3 lg:mx-5 text-lg"
                >
                    About
                </a>
                <a
                    href="#Service"
                    onClick={toggleMenu}
                    className="block my-10 mx-6 sm:inline-block sm:my-1.5 sm:mx-3 lg:mx-5 text-lg"
                >
                    Service
                </a>
                <a
                    href="#Contact"
                    onClick={toggleMenu}
                    className="block my-10 mx-6 sm:inline-block sm:my-1.5 sm:mx-3 lg:mx-5 text-lg"
                >
                    Contact
                </a>
                <a onClick={toggleMenu} className="block my-10 mx-6 sm:inline-block sm:my-1.5 sm:mx-3 lg:mx-5 text-lg">
                    <button className="text-customeWhite sm:text-customeGreen bg-customeGreen sm:bg-customeWhite text-md rounded-md cursor-pointer border-0 outline-0 px-4">
                        Donate
                    </button>
                </a>
                <IoCloseSharp onClick={toggleMenu} className="sm:hidden cursor-pointer text-4xl absolute top-9 right-5" />
            </ul>
            <TiThMenuOutline onClick={toggleMenu} className="block sm:hidden text-white cursor-pointer text-2xl" />
        </nav>
    );
};

export default Navbar;

// transition 0.5 s and bg color
