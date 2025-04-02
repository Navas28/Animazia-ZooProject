import axios from "axios";
import { BriefcaseBusiness, PhoneCall, SendHorizontal, Vibrate } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaReddit, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubscribe = async (event) => {
        event.preventDefault();
        setMessage("");

        try {
            const response = await axios.post("http://localhost:2000/subscribe", { email });
            setMessage(response.data.message);
            setEmail("");
        } catch (error) {
            setMessage("Subscription failed. Try again.");
        }
    };

    return (
        <footer class="mt-auto bg-gray-900 w-full dark:bg-neutral-950">
            <div class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <div class="col-span-full  lg:col-span-1 text-white">
                        <a
                            class="flex-none text-xl font-semibold text-white  focus:outline-hidden focus:opacity-80"
                            href="#"
                            
                        >
                            Animazia
                        </a>
                        <p className="flex gap-4 mt-6"><BriefcaseBusiness /> Haryana , India </p>
                        <p className="flex gap-4 mt-3"><SendHorizontal />animazia@gmail.com</p>
                        <p className="flex gap-4 mt-3"><Vibrate />+91 89237135617</p>
                        <p className="flex gap-4 mt-3"><PhoneCall />0495-28384-2983</p>
                    </div>

                    <div class="col-span-1">
                        <h4 class="font-semibold text-gray-100">Navigation</h4>

                        <div class="mt-3 grid space-y-3">
                            <p>
                                <a
                                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200"
                                    href="#"
                                >
                                    Home
                                </a>
                            </p>
                            <p>
                                <Link
                                    to="/blog"
                                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 "
                                >
                                    Eco Journel
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="/redlist"
                                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 "
                                >
                                    Red List
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="/volunteer"
                                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 "
                                >
                                    Volunteer
                                </Link>
                                <span class="inline-block ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                                    We're hiring
                                </span>
                            </p>
                            <p>
                                <Link
                                    to="/events"
                                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 "
                                >
                                    Events
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div class="col-span-1">
                        <h4 class="font-semibold text-gray-100">Quick Links </h4>

                        <div class="mt-3 grid space-y-3">
                            <p> <a
                                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#About"
                                >
                                   About
                                </a>
                                
                            </p>
                            <p>
                                <a
                                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#Mission"
                                >
                                    Programs
                                </a>
                            </p>
                            <p>
                                <a
                                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#TicketBooking"
                                >
                                    Ticket Booking
                                </a>
                            </p>
                            <p>
                            <a
                                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#ContactForm"
                                >
                                   Contact Form
                                </a>
                            </p>
                         
                        </div>
                    </div>

                    <div class="col-span-2">
                        <h4 class="font-semibold text-gray-100">Stay up to date</h4>

                        <form onSubmit={handleSubscribe}>
                            <div class="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
                                <div class="w-full">
                                    <label for="hero-input" class="sr-only">
                                        Subscribe
                                    </label>
                                    <input
                                        type="email"
                                        id="hero-input"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                        class="py-2.5 sm:py-3 px-4 block w-full border-transparent rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    class="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Subscribe
                                </button>
                            </div>
                            <p class="mt-3 text-sm text-gray-400">New UI kits or big discounts. Never spam.</p>
                        </form>
                        {message && <p className="text-green-600 mt-2">{message}</p>}
                    </div>
                </div>

                <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
                    <div class="flex flex-wrap justify-between items-center gap-2">
                        <p class="text-sm text-gray-400 dark:text-neutral-400">© 2025 Animazia Pvt.Ltd.</p>
                    </div>

                    <div>
                        <a
                            class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                            href="#"
                        >
                            <FaFacebookF size={20}/>
                        </a>
                        <a
                            class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                            href="#"
                        >
                           <FaTwitter size={20} />
                        </a>
                        <a
                            class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                            href="#"
                        >
                            <FaYoutube size={20} />
                        </a>
                        <a
                            class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                            href="#"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                        <a
                            class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
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
