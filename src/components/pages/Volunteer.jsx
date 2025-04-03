import React, { useEffect, useState } from "react";
import VolunteerHead from "./VolunteerHead";
import axios from "axios";
import { IoIosAlert, IoIosCheckmarkCircle } from "react-icons/io";

const Volunteer = () => {
    const [status, setStatus] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        jobRole: "",
        availability: "",
        qualification: "",
        resume: null,
    });

    const [errors, setErrors] = useState({});

    const jobRoles = ["Zoo Keeper", "Veterinarian", "Tour Guide", "Research Scientist", "Environmental Educator"];
    const availabilityOptions = ["Immediate", "15 Days", "1 Month", "3 Months"];

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters long";
        }

        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailFormat.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        const phoneFormat = /^[0-9]{10}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!phoneFormat.test(formData.phone)) {
            newErrors.phone = "Phone number must be 10 digits";
        }

        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
        } else if (formData.address.trim().length < 5) {
            newErrors.address = "Address must be at least 5 characters long";
        }

        if (!formData.jobRole) {
            newErrors.jobRole = "Please select a job role";
        }

        if (!formData.availability) {
            newErrors.availability = "Please select availability";
        }

        if (!formData.qualification.trim()) {
            newErrors.qualification = "Qualification is required";
        }

        if (!formData.resume) {
            newErrors.resume = "Please upload a resume";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData((prev) => ({ ...prev, resume: file }));
        if (errors.resume) {
            setErrors((prev) => ({ ...prev, resume: "" }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validateForm()) {
            const form = new FormData();
            for (let key in formData) {
                form.append(key, formData[key]);
            }
            try {
                const response = await axios.post("https://backend-zoo.onrender.com/job-apply", form, {
                    headers: { "Content-Type": "multipart/form-data" },
                });

                setStatus({
                    type: "success",
                    message: response.data.message,
                });

                setTimeout(() => {
                    setStatus(null);
                }, 3000);

                event.target.reset();
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    jobRole: "",
                    availability: "",
                    qualification: "",
                    resume: null,
                });
            } catch (error) {
                setStatus({
                    type: "error",
                    message: error.response?.data?.message || "Something went wrong!",
                });

                setTimeout(() => {
                    setStatus(null);
                }, 3000);
            }
        }
    };
    return (
        <div>
            <VolunteerHead />
            <div className="flex items-center justify-center p-4">
                <div className=" rounded-lg p-15 max-w-5xl w-full">
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
                                    <span className="font-semibold text-emerald-500 dark:text-emerald-400">Success</span>
                                    <p className="text-sm text-gray-600 dark:text-gray-200">{status.message}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {status?.type === "error" && (
                        <div
                            data-aos="zoom-in"
                            className="mb-8 flex w-full max-w-sm overflow-hidden rounded-lg bg-red-100 text-lg"
                        >
                            <div className="flex items-center justify-center w-12 bg-white">
                                <IoIosAlert className="text-3xl text-red-500" />
                            </div>

                            <div className="px-4 py-2 -mx-3">
                                <div className="mx-3">
                                    <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
                                    <p className="text-sm text-gray-600 dark:text-gray-200">{status.message}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-7">
                        <div className="relative">
                            <input
                                name="name"
                                type="text"
                                placeholder=""
                                value={formData.name}
                                onChange={handleChange}
                                className={`text-white border-b border-gray-300 py-1 focus:border-b-2 focus:border-customLightGreen transition-colors focus:outline-none peer bg-inherit w-full text-lg ${
                                    errors.name
                                        ? "border-red-500 focus:ring-red-300"
                                        : "border-gray-300 focus:ring-blue-300"
                                }`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            <label
                                htmlFor="username"
                                className=" text-customLightOrange absolute -top-6 text-lg left-0 cursor-text peer-focus:text-lg peer-focus:-top-7 transition-all peer-focus:text-customLightGreen peer-placeholder-shown:top-1 peer-placeholder-shown:text-2xl font-head"
                            >
                                Name
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                name="email"
                                type="email"
                                placeholder=""
                                value={formData.email}
                                onChange={handleChange}
                                className={`text-white border-b border-gray-300 py-1 focus:border-b-2 focus:border-customLightGreen transition-colors focus:outline-none peer bg-inherit w-full ${
                                    errors.email
                                        ? "border-red-500 focus:ring-red-300"
                                        : "border-gray-300 focus:ring-blue-300"
                                }`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            <label
                                htmlFor="username"
                                className="text-customLightOrange absolute -top-6 text-lg left-0 cursor-text peer-focus:text-lg peer-focus:-top-7 transition-all peer-focus:text-customLightGreen peer-placeholder-shown:top-1 peer-placeholder-shown:text-2xl font-head"
                            >
                                Email
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                name="phone"
                                type="text"
                                placeholder=""
                                value={formData.phone}
                                onChange={handleChange}
                                className={`text-white  border-b border-gray-300 py-1 focus:border-b-2 focus:border-customLightGreen transition-colors focus:outline-none peer bg-inherit w-full ${
                                    errors.phone
                                        ? "border-red-500 focus:ring-red-300"
                                        : "border-gray-300 focus:ring-blue-300"
                                }`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            <label
                                htmlFor="username"
                                className="text-customLightOrange absolute -top-6 text-lg left-0 cursor-text peer-focus:text-lg peer-focus:-top-7 transition-all peer-focus:text-customLightGreen peer-placeholder-shown:top-1 peer-placeholder-shown:text-2xl font-head"
                            >
                                Phone
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                name="address"
                                type="text"
                                placeholder=""
                                value={formData.address}
                                onChange={handleChange}
                                className={`text-white border-b border-gray-300 py-1 focus:border-b-2 focus:border-customLightGreen transition-colors focus:outline-none peer bg-inherit w-full ${
                                    errors.address
                                        ? "border-red-500 focus:ring-red-300"
                                        : "border-gray-300 focus:ring-blue-300"
                                }`}
                            />
                            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                            <label
                                htmlFor="username"
                                className="text-customLightOrange absolute -top-6 text-lg left-0 cursor-text peer-focus:text-lg peer-focus:-top-7 transition-all peer-focus:text-customLightGreen peer-placeholder-shown:top-1 peer-placeholder-shown:text-2xl font-head"
                            >
                                Address
                            </label>
                        </div>

                        <div>
                            <select
                                name="jobRole"
                                value={formData.jobRole}
                                onChange={handleChange}
                                className={` border-b border-gray-300 py-1 focus:border-b-2 focus:border-customLightGreen transition-colors focus:outline-none peer bg-inherit w-full text-2xl  ${
                                    formData.jobRole ? "text-white text-lg" : "text-customLightOrange font-head "
                                }
                                ${
                                    errors.jobRole
                                        ? "border-red-500 focus:ring-red-300"
                                        : "border-gray-300 focus:ring-blue-300"
                                }`}
                            >
                                <option value="" className="text-customLightOrange bg-gray-700">
                                    Select Job Role
                                </option>
                                {jobRoles.map((role) => (
                                    <option className="text-lg bg-gray-700 text-white" key={role} value={role}>
                                        {role}
                                    </option>
                                ))}
                            </select>
                            {errors.jobRole && <p className="text-red-500 text-sm mt-1">{errors.jobRole}</p>}
                        </div>

                        <div>
                            <select
                                name="availability"
                                value={formData.availability}
                                onChange={handleChange}
                                className={` border-b border-gray-300 py-1 focus:border-b-2 focus:border-customLightGreen transition-colors focus:outline-none peer bg-inherit w-full text-2xl  ${
                                    formData.availability ? "text-white text-lg" : "text-customLightOrange font-head"
                                }
                                ${
                                    errors.availability
                                        ? "border-red-500 focus:ring-red-300"
                                        : "border-gray-300 focus:ring-blue-300"
                                }`}
                            >
                                <option value="" className="text-customLightOrange bg-gray-700">
                                    Select Availability
                                </option>
                                {availabilityOptions.map((option) => (
                                    <option className="text-lg bg-gray-700 text-white" key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability}</p>}
                        </div>

                        <div className="relative">
                            <input
                                name="qualification"
                                type="text"
                                placeholder=""
                                value={formData.qualification}
                                onChange={handleChange}
                                className={`text-white border-b border-gray-300 py-1 focus:border-b-2 focus:border-customLightGreen transition-colors focus:outline-none peer bg-inherit w-full ${
                                    errors.qualification
                                        ? "border-red-500 focus:ring-red-300"
                                        : "border-gray-300 focus:ring-blue-300"
                                }`}
                            />
                            {errors.qualification && <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>}
                            <label
                                htmlFor="qualification"
                                className="text-customLightOrange absolute -top-6 text-lg left-0 cursor-text peer-focus:text-lg peer-focus:-top-7 transition-all peer-focus:text-customLightGreen peer-placeholder-shown:top-1 peer-placeholder-shown:text-2xl font-head"
                            >
                                Qualification
                            </label>
                        </div>

                        <div className="mx-auto">
                            <label htmlFor="example1" className="mb-1 block text-2xl font-head text-customLightOrange">
                                Upload file
                            </label>
                            <input
                                id="example1"
                                type="file"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className={`mt-2 block w-full text-md file:mr-4 file:rounded-md file:border-0 file:bg-white file:py-2  file:px-4 file:text-sm text-white file:text-customeGreen focus:outline-none cursor-pointer ${
                                    errors.resume ? "border-red-500" : "border-gray-300"
                                }`}
                            />{" "}
                            {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white font-bold font-head text-2xl text-customeGreen py-2 rounded-md hover:bg-customLightOrange hover:text-white cursor-pointer hover:scale-102 ease-in-out duration-500"
                        >
                            Apply
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;
