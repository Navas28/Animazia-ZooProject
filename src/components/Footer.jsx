import React from "react";
import { MdOutlineCall } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="">
            <div className="container mx-auto p-0 md:p-8 xl:px-0">
                <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center space-x-2 text-2xl font-medium">
                                    <span className="text-white">ANIMAZIA</span>
                                </div>
                            </div>
                            <div className="max-w-md pr-16 text-md text-gray-200">
                                203 Street - North <br />
                                Gujarath, India - 4548503 <br />
                                <div className="flex flex-row gap-3 mt-5">
                                    <MdOutlineCall className="text-xl" />
                                    0478-47859-2773
                                </div>
                                <div className="flex flex-row gap-3">
                                    <SiMinutemailer className="text-xl" />
                                    animaziaorg@gmail.com
                                </div>
                            </div>
                            <div className="flex space-x-2 text-2xl text-white cursor-pointer">
                                <AiFillFacebook />
                                <AiFillInstagram />
                                <AiFillTwitterSquare />
                            </div>
                        </div>
                        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-md font-semibold leading-6 text-white">Quick Links</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        <li>
                                            <a
                                                href="/aiplatform"
                                                className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/aialgorithms"
                                                className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/industryapplications"
                                                className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                            >
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-md font-semibold leading-6 text-white">Use Cases</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        <li>
                                            <a
                                                href="/predictiveanalysis"
                                                className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                            >
                                                Predictive Analysis
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/customerexperience"
                                                className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                            >
                                                Customer Experience
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/automation"
                                                className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                            >
                                                Automation
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-md font-semibold leading-6 text-white">Resources</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        <li>
                                            <a href="/pricing" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                                                Pricing
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/blog" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/casestudies"
                                                className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                            >
                                                Case Studies
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/terms" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                                                Terms of Service
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/privacy" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                                                Privacy Policy
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-md font-semibold leading-6 text-white">Company</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        <li>
                                            <a href="/aboutus" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/careers" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                                                Careers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contactus" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
                        <div className="text-md text-center text-white">Copyright © 2025 Animazia</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
