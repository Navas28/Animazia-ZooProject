import axios from "axios";
import { BriefcaseBusiness, PhoneCall, SendHorizontal, Vibrate } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaReddit, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null);

    const handleSubscribe = async (event) => {
        event.preventDefault();
        setStatus(null);

        try {
            const response = await axios.post("https://backend-zoo.onrender.com/subscribe", { email });
            setStatus({ type: "success", message: response.data.message });
            setEmail("");
            setTimeout(() => setStatus(null), 3000);
        } catch (error) {
            if (error.response?.status === 409) {
                setStatus({ type: "warning", message: "This Email is Already Subscribed." });
            } else {
                setStatus({ type: "error", message: "Subscription Failed. Try Again." });
            }
            setTimeout(() => setStatus(null), 3000);
        }
    };

    return (
        <footer className="mt-auto border-t-2 border-white w-full">
            <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <div className="col-span-full  lg:col-span-1 text-white">
                        <a
                            className="flex-none text-xl font-semibold text-customLightOrange  focus:outline-hidden focus:opacity-80"
                            href="#"
                        >
                            Animazia
                        </a>
                        <p className="flex gap-4 mt-6">
                            <BriefcaseBusiness className="text-customLightGreen" /> Haryana , India{" "}
                        </p>
                        <p className="flex gap-4 mt-3">
                            <SendHorizontal className="text-customLightGreen" />
                            animazia@gmail.com
                        </p>
                        <p className="flex gap-4 mt-3">
                            <Vibrate className="text-customLightGreen" />
                            +91 89237135617
                        </p>
                        <p className="flex gap-4 mt-3">
                            <PhoneCall className="text-customLightGreen" />
                            0495-28384-2983
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold text-customLightOrange">Navigation</h4>

                        <div className="mt-3 grid space-y-3">
                            <p>
                                <a
                                    className="inline-flex gap-x-2 text-white hover:text-customLightGreen font-para focus:outline-hidden focus:text-gray-200"
                                    href="#"
                                >
                                    Home
                                </a>
                            </p>
                            <p>
                                <Link
                                    to="/blog"
                                    className="inline-flex gap-x-2 font-para text-white hover:text-customLightGreen focus:outline-hidden focus:text-gray-200 "
                                >
                                    Eco Journel
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="/redlist"
                                    className="inline-flex gap-x-2 font-para text-white hover:text-customLightGreen focus:outline-hidden focus:text-gray-200 "
                                >
                                    Red List
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="/volunteer"
                                    className="inline-flex gap-x-2 font-para text-white hover:text-customLightGreen focus:outline-hidden focus:text-gray-200 "
                                >
                                    Volunteer
                                </Link>
                                <span className="inline-block ms-1 text-xs bg-customLightOrange text-customeGreen font-semibold py-1 px-2 rounded-lg">
                                    We're hiring
                                </span>
                            </p>
                            <p>
                                <Link
                                    to="/events"
                                    className="inline-flex gap-x-2 font-para text-white hover:text-customLightGreen focus:outline-hidden focus:text-gray-200 "
                                >
                                    Events
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold text-customLightOrange">Quick Links </h4>

                        <div className="mt-3 grid space-y-3">
                            <p>
                                {" "}
                                <a
                                    className="inline-flex gap-x-2 font-para text-white hover:text-customLightGreen focus:outline-hidden focus:text-gray-200 "
                                    href="#About"
                                >
                                    About
                                </a>
                            </p>
                            <p>
                                <a
                                    className="inline-flex gap-x-2 font-para text-white hover:text-customLightGreen focus:outline-hidden focus:text-gray-200 "
                                    href="#Mission"
                                >
                                    Programs
                                </a>
                            </p>
                            <p>
                                <a
                                    className="inline-flex gap-x-2 font-para text-white hover:text-customLightGreen focus:outline-hidden focus:text-gray-200 "
                                    href="#TicketBooking"
                                >
                                    Ticket Booking
                                </a>
                            </p>
                            <p>
                                <a
                                    className="inline-flex gap-x-2 font-para text-white hover:text-customLightGreen focus:outline-hidden focus:text-gray-200 "
                                    href="#ContactForm"
                                >
                                    Contact Form
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <h4 className="font-semibold text-customLightOrange">Stay up to date</h4>

                        <form onSubmit={handleSubscribe}>
                            <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2">
                                <div className="w-full">
                                    <label htmlFor="hero-input" className="sr-only">
                                        Subscribe
                                    </label>
                                    <input
                                        type="email"
                                        id="hero-input"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                        className="py-2.5 sm:py-3 px-4 block w-full border-transparent rounded-lg sm:text-sm  bg-customeGreen text-white font-bold focus:bg-customeGreen
                                        "
                                        autoComplete="off"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-customLightOrange text-black hover:bg-white hover:border hover:border-black cursor-pointer focus:outline-hidden"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>

                        {status?.type === "success" && (
                            <div
                                data-aos="zoom-in"
                                className="mt-4 flex overflow-hidden rounded-lg bg-customMediumGreen text-lg"
                            >
                                <div className="flex items-center justify-center w-12 bg-white">
                                    <IoIosCheckmarkCircle className="text-3xl text-customMediumGreen" />
                                </div>
                                <div className="px-4 py-2 -mx-3">
                                    <div className="mx-3">
                                        <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                                            Success
                                        </span>
                                        <p className="text-sm text-gray-600 dark:text-gray-200">{status.message}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {status?.type === "warning" && (
                            <div
                                data-aos="zoom-in"
                                className="mt-4 flex w-full overflow-hidden bg-yellow-500 rounded-lg text-lg"
                            >
                                <div className="flex items-center justify-center w-12 bg-white">
                                    <IoWarningOutline className="text-yellow-500 text-3xl" />
                                </div>
                                <div className="px-4 py-2 -mx-3">
                                    <div className="mx-3">
                                        <span className="font-semibold text-white">Error</span>
                                        <p className="text-sm text-gray-600 dark:text-gray-200">{status.message}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {status?.type === "error" && (
                            <div
                                data-aos="zoom-in"
                                className="mt-4 flex w-full overflow-hidden bg-red-700 rounded-lg text-lg"
                            >
                                <div className="flex items-center justify-center w-12 bg-white">
                                    <MdErrorOutline className="text-red-700 text-3xl" />
                                </div>
                                <div className="px-4 py-2 -mx-3">
                                    <div className="mx-3">
                                        <span className="font-semibold text-white">Error</span>
                                        <p className="text-sm text-gray-600 dark:text-gray-200">{status.message}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
                    <div className="flex flex-wrap justify-between items-center gap-2">
                        <p className="text-sm text-white">© 2025 Animazia Pvt.Ltd.</p>
                    </div>

                    <div>
                        <a
                            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                            href="#"
                        >
                            <FaFacebookF size={20} />
                        </a>
                        <a
                            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                            href="#"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                            href="#"
                        >
                            <FaYoutube size={20} />
                        </a>
                        <a
                            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                            href="#"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                        <a
                            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                            href="#"
                        >
                            <FaReddit size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
