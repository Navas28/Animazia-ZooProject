import React from "react";
import { MdOutlineCall } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
    return (
        <footer class="">
            <div class="container mx-auto p-0 md:p-8 xl:px-0">
                <div class="mx-auto max-w-7xl px-6 pb-10 pt-16">
                    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div class="space-y-4">
                            <div>
                                <div class="flex items-center space-x-2 text-2xl font-medium">
                                    <span class="text-white">ANIMAZIA</span>
                                </div>
                            </div>
                            <div class="max-w-md pr-16 text-md text-gray-200">
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
                            <div class="flex space-x-2 text-2xl text-white cursor-pointer">
                                <AiFillFacebook />
                                <AiFillInstagram />
                                <AiFillTwitterSquare />
                            </div>
                        </div>
                        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div class="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 class="text-md font-semibold leading-6 text-white">Quick Links</h3>
                                    <ul role="list" class="mt-6 space-y-4">
                                        <li>
                                            <a
                                                href="/aiplatform"
                                                class="text-md leading-6 text-gray-300 hover:text-gray-50"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/aialgorithms"
                                                class="text-md leading-6 text-gray-300 hover:text-gray-50"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/industryapplications"
                                                class="text-md leading-6 text-gray-300 hover:text-gray-50"
                                            >
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mt-10 md:mt-0">
                                    <h3 class="text-md font-semibold leading-6 text-white">Use Cases</h3>
                                    <ul role="list" class="mt-6 space-y-4">
                                        <li>
                                            <a
                                                href="/predictiveanalysis"
                                                class="text-md leading-6 text-gray-300 hover:text-gray-50"
                                            >
                                                Predictive Analysis
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/customerexperience"
                                                class="text-md leading-6 text-gray-300 hover:text-gray-50"
                                            >
                                                Customer Experience
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/automation"
                                                class="text-md leading-6 text-gray-300 hover:text-gray-50"
                                            >
                                                Automation
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 class="text-md font-semibold leading-6 text-white">Resources</h3>
                                    <ul role="list" class="mt-6 space-y-4">
                                        <li>
                                            <a href="/pricing" class="text-md leading-6 text-gray-300 hover:text-gray-50">
                                                Pricing
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/blog" class="text-md leading-6 text-gray-300 hover:text-gray-50">
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/casestudies"
                                                class="text-md leading-6 text-gray-300 hover:text-gray-50"
                                            >
                                                Case Studies
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/terms" class="text-md leading-6 text-gray-300 hover:text-gray-50">
                                                Terms of Service
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/privacy" class="text-md leading-6 text-gray-300 hover:text-gray-50">
                                                Privacy Policy
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mt-10 md:mt-0">
                                    <h3 class="text-md font-semibold leading-6 text-white">Company</h3>
                                    <ul role="list" class="mt-6 space-y-4">
                                        <li>
                                            <a href="/aboutus" class="text-md leading-6 text-gray-300 hover:text-gray-50">
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/careers" class="text-md leading-6 text-gray-300 hover:text-gray-50">
                                                Careers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contactus" class="text-md leading-6 text-gray-300 hover:text-gray-50">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
                        <div class="text-md text-center text-white">Copyright © 2025 Animazia</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
