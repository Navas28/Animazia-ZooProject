import axios from "axios";
import React, { useState } from "react";
import { RiServiceLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMiscellaneousServices, MdErrorOutline } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi";
import { IoIosCheckmarkCircle } from "react-icons/io";


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://backend-zoo.onrender.com/contact", formData);
            setFormData({ name: "", email: "", message: "" });
            setStatus({ message: "Success! Thank You for your Message", type: "success" });

            setTimeout(() => {
                setStatus(null);
            }, 3000);
        } catch (error) {
            setStatus({ message: "Error! Somthing Went Wrong.", type: "error" });
            console.log("Error Submitting Form", error);

            setTimeout(() => {
                setStatus(null);
            }, 3000);
        }
    };
    return (
        <div className="mt-15" id="ContactForm">
            <section className="relative">
                <h1
                    className="text-customeWhite text-center font-head text-4xl md:text-6xl font-bold"
                    data-aos="fade-down"
                    id="Team"
                >
                    Contact Us
                </h1>

                <div className="container my-20 mx-auto px-2 md:px-4">
                    <section>
                        <div className="flex flex-wrap">
                            <form
                                onSubmit={handleSubmit}
                                className="w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
                            >
                                {status?.type === "success" && (
                                    <div
                                        data-aos="zoom-in"
                                        className="mb-4 flex w-full max-w-sm overflow-hidden rounded-lg bg-customMediumGreen text-lg"
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

                                {status?.type === "error" && (
                                    <div
                                        data-aos="zoom-in"
                                        className="mb-4 flex w-full max-w-sm overflow-hidden bg-red-700 rounded-lg text-lg"
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

                                <div className="mb-3 w-full">
                                    <label className="block font-medium mb-[2px] text-customLightOrange text-lg">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="px-2 py-2 border w-full outline-none rounded-md text-white placeholder:text-white"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="mb-3 w-full">
                                    <label className="block font-medium mb-[2px]  text-customLightOrange text-lg">
                                        Email
                                    </label>
                                    <input
                                        className="px-2 py-2 border w-full outline-none rounded-md text-white placeholder:text-white"
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div className="mb-3 w-full">
                                    <label className="block font-medium mb-[2px]  text-customLightOrange text-lg">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        cols="50"
                                        placeholder="Type here..."
                                        className="px-2 py-2 border rounded-[5px] w-full outline-none placeholder:text-white text-white"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="mb-6 inline-block w-full rounded bg-white px-6 py-2.5 font-medium uppercase leading-normal text-customeGreen hover:scale-102 duration-500 ease-in-out hover:bg-customLightOrange hover:text-white cursor-pointer"
                                >
                                    Send
                                </button>
                            </form>

                            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                                <div className="flex flex-wrap">
                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md p-4 text-3xl text-customLightOrange">
                                                    <LuPhoneCall />
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 text-lg text-customeWhite font-bold font-subhead tracking-wider">
                                                    Customer Service
                                                </p>
                                                <p className="text-customLightGreen font-para">animaziahelp203@gmail.com</p>
                                                <p className="text-customLightGreen  font-subhead">+91 8954248907</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md text-4xl text-customLightOrange p-4">
                                                    <RiServiceLine />
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 text-lg text-customeWhite font-bold font-subhead tracking-wider">
                                                    Donations
                                                </p>
                                                <p className="text-customLightGreen font-para">supportus90@gmail.com</p>
                                                <p className="text-customLightGreen  font-subhead">+91 90578980915</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                        <div className="align-start flex">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md  p-4 text-4xl text-customLightOrange">
                                                    <MdOutlineMiscellaneousServices />
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 text-lg text-customeWhite font-bold font-subhead tracking-wider">
                                                    Technical Support
                                                </p>
                                                <p className="text-customLightGreen font-para">techsupport@gmail.com</p>
                                                <p className="text-customLightGreen  font-subhead">+91 785367289</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                        <div className="align-start flex">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md  p-4 text-4xl text-customLightOrange">
                                                    <HiOutlineTicket />
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 text-lg text-customeWhite font-bold font-subhead tracking-wider">
                                                    Booking Service
                                                </p>
                                                <p className="text-customLightGreen font-para">booking089@gmail.com</p>
                                                <p className="text-customLightGreen  font-subhead">+91 8135672356</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default ContactForm;
