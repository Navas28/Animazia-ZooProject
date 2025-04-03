import axios from "axios";
import { TriangleAlert } from "lucide-react";
import React, { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

const EventRegistration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        participants: 1,
        requests: "",
    });

    const [status, setStatus] = useState(null);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:2000/event-register", formData);
            setStatus({ type: "success", message: response.data.message });

            setFormData({ name: "", email: "", phone: "", participants: "" });
            setTimeout(() => setStatus(null), 3000);
        } catch (error) {
            setStatus({ type: "error", message: error.response?.data?.error || "Something went wrong" });
            setTimeout(() => setStatus(null), 3000);
        }
    };
    return (
        <div className="max-w-xl mx-auto  p-8 rounded-xl shadow-lg border border-green-100 mt-28 mb-5">
    
            {status?.type === "success" && (
                <div
                    data-aos="zoom-in"
                    className="mb-4 flex w-full  overflow-hidden rounded-lg bg-customMediumGreen text-lg"
                >
                    <div className="flex items-center justify-center w-12 bg-white">
                        <IoIosCheckmarkCircle className="text-3xl text-customMediumGreen" />
                    </div>
                    <div className="px-4 py-2 -mx-3">
                        <div className="mx-3">
                            <span className="font-semibold text-emerald-500 dark:text-emerald-400">Success</span>
                            <p className="text-sm text-gray-600 dark:text-gray-200">{status.message}</p>
                        </div>
                    </div>
                </div>
            )}
            {status?.type === "error" && (
                <div data-aos="zoom-in" className="mb-4 flex w-full overflow-hidden bg-red-700 rounded-lg text-lg">
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
            <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-2"> Registration</h2>
                <p className="text-white">Reserve your spot for an unforgettable wildlife experience!</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className=" p-6 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-customLightOrange font-medium mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-customeWhite text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder:text-white"
                                placeholder="Enter Your name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-customLightOrange font-medium mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-customeWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white focus:border-transparent placeholder:text-white"
                                placeholder="abc@gmail.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-customLightOrange font-medium mb-2">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-customeWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white focus:border-transparent placeholder:text-white"
                                placeholder="+91 0000-0000"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="participants" className="block text-customLightOrange font-medium mb-2">
                                Number of Participants <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    name="participants"
                                    value={formData.participants}
                                    onChange={handleChange}
                                    min="1"
                                    className="w-full px-4 py-3 border border-customeWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white focus:border-transparent"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="requests" className="block text-customLightOrange font-medium mb-2">
                            Special Requests or Accommodations
                        </label>
                        <textarea
                            id="requests"
                            name="requests"
                            value={formData.requests}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-3 border border-customeWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white"
                            placeholder="Please let us know if you have any dietary restrictions, accessibility needs, or other special requests."
                        ></textarea>
                    </div>
                </div>

                <div className="p-5 bg-amber-50 rounded-lg border-l-4 border-[#e9d502] shadow-sm">
                    <p className="text-amber-800 font-medium mb-1">
                        Important Note <TriangleAlert className="inline text-amber-700" />
                    </p>
                    <p className="text-amber-700 text-sm">
                        This form is for registration purposes only. After submission, you will receive an email with
                        payment instructions and additional details about your zoo adventure.
                    </p>
                </div>

                <button
                    type="submit"
                    className="w-full bg-white text-customeGreen py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-customLightOrange hover:text-white cursor-pointer hover:scale-102 ease-in-out duration-500 transition-colors font-medium text-lg shadow-md"
                >
                    Register Now
                </button>

                <p className="text-center text-customLightGreen text-sm mt-4">
                    <span className="text-red-500">*</span> By registering, you agree to our terms of service and privacy
                    policy.
                </p>
            </form>
        </div>
    );
};

export default EventRegistration;
