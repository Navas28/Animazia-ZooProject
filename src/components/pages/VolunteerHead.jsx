import React, { useState } from "react";
import { MapPin, Briefcase, FileText, Star, Clock, Coffee, BusFront, Clock3, HeartPulse } from "lucide-react";
import cover1 from "../../assets/images/cover-volunteer.jpg";
import cover2 from "../../assets/images/cover-volunteer-1.jpg";

const VolunteerHead = () => {
    const [openJob, setOpenJob] = useState(null);

    const jobs = [
        {
            id: 1,
            title: "Zookeeper",
            vacancies: 3,
            department: "Animal Care",
            location: "Wildlife Conservation Park",
            description:
                "Responsible for feeding, cleaning, and monitoring animals, ensuring their health, comfort, and safety. Develop and maintain daily care routines for diverse animal species.",
            qualifications:
                "Associate's degree in Animal Science or related field. Minimum 2 years of experience in animal care. Strong knowledge of animal behavior and welfare.",
            salary: "35,000 - 45,000 per month",
            benefits: ["Health Insurance", "Retirement Plan", "Paid Training", "Animal Care Discounts"],
        },
        {
            id: 2,
            title: "Veterinarian",
            vacancies: 1,
            department: "Medical Services",
            location: "Wildlife Conservation Park",
            description:
                "Provide comprehensive medical care to animals, conduct health examinations, perform surgeries, and develop preventive health strategies for diverse wildlife species.",
            qualifications:
                "Doctor of Veterinary Medicine (DVM) degree. State veterinary license. Specialized wildlife or exotic animal experience preferred.",
            salary: "75,000 - 95,000 per month",
            benefits: [
                "Comprehensive Health Coverage",
                "Continuing Education Fund",
                "Research Opportunities",
                "Retirement Benefits",
            ],
        },
        {
            id: 3,
            title: "Tour Guide",
            vacancies: 2,
            department: "Visitor Experience",
            location: "Wildlife Conservation Park",
            description:
                "Engage and educate visitors about wildlife, conservation efforts, and environmental sustainability. Lead interactive tours and provide memorable experiences.",
            qualifications:
                "Bachelor's degree in Biology, Environmental Science, or related field. Excellent communication and public speaking skills. Passion for wildlife conservation.",
            salary: "30,000 - 40,000 per month",
            benefits: ["Performance Bonuses", "Free Park Admission", "Professional Development", "Travel Opportunities"],
        },
        {
            id: 4,
            title: "Research Scientist",
            vacancies: 2,
            department: "Conservation Research",
            location: "Wildlife Conservation Park",
            description:
                "Lead cutting-edge research projects focusing on wildlife conservation, habitat preservation, and species recovery. Collaborate with international conservation organizations to develop and implement research strategies.",
            qualifications:
                "Ph.D. in Biology, Ecology, or related field. Minimum 5 years of research experience in wildlife conservation. Strong publication record and grant writing skills.",
            salary: "65,000 - 85,000 per month",
            benefits: ["Research Grants", "Conference Funding", "Laboratory Resources", "Collaborative Opportunities"],
        },
        {
            id: 5,
            title: "Environmental Educator",
            vacancies: 2,
            department: "Education and Outreach",
            location: "Wildlife Conservation Park",
            description:
                "Develop and implement environmental education programs for schools, community groups, and park visitors. Create engaging content that raises awareness about wildlife conservation, biodiversity, and ecological sustainability.",
            qualifications:
                "Master's degree in Environmental Education, Biology, or related field. Experience in curriculum development and public speaking. Passion for environmental advocacy.",
            salary: "40,000 - 50,000 per month",
            benefits: [
                "Educational Resources",
                "Community Engagement Opportunities",
                "Professional Development",
                "Sustainability Workshops",
            ],
        },
    ];
    const toggleJob = (jobId) => {
        setOpenJob(openJob === jobId ? null : jobId);
    };

    return (
        <div>
            <section className="py-10 pt-28">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
                        <div className="pr-12 sm:pr-0">
                            <div className="relative max-w-xs mb-12">
                                <img className="object-bottom rounded-xl" src={cover1} />

                                <img
                                    className="absolute origin-bottom-right scale-75 rounded-xl -bottom-12 -right-12"
                                    src={cover2}
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-customeWhite sm:text-4xl lg:text-5xl font-head">
                                Join Our Team Make an Impact
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-customLightGreen font-para sm:text-lg">
                                Looking for a rewarding career or volunteer opportunity? Join our team and contribute to
                                wildlife conservation, education, and animal care. Whether you're seeking a full-time role
                                or a chance to volunteer, we offer opportunities to make a difference. Explore available
                                positions and become part of our mission to protect and care for animals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 sm:py-16 lg:py-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
                        <div>
                            <div className="flex items-center justify-center  mx-auto">
                                <HeartPulse className="text-customLightOrange h-10 w-20 " />
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-customeWhite">Health Insurance</h3>
                        </div>

                        <div>
                            <div className="flex items-center justify-center   mx-auto ">
                                <Clock3 className="text-customLightOrange h-10 w-20 " />
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-customeWhite">Flexible Work Schedule</h3>
                        </div>

                        <div>
                            <div className="flex items-center justify-center  mx-auto">
                                <BusFront className="text-customLightOrange h-10 w-20 " />
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-customeWhite">Transportation Allowance</h3>
                        </div>

                        <div>
                            <div className="flex items-center justify-center mx-auto ">
                                <Coffee className="h-10 w-20 text-customLightOrange" />
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-customeWhite">Meal Allowance</h3>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-20 flex items-center justify-center p-4">
                <div className="w-full max-w-5xl  shadow-2xl rounded-2xl overflow-hidden border-2 border-white">
                    <div className="p-6">
                        {jobs.map((job) => (
                            <div
                                key={job.id}
                                className={`mb-4 border border-customLightOrange rounded-lg transition-all duration-300 ${
                                    openJob === job.id
                                        ? " scale-[1.02]"
                                        : " border-0 hover:border-2 hover:border-customLightOrange"
                                }`}
                            >
                                <button
                                    onClick={() => toggleJob(job.id)}
                                    className="w-full text-left p-5 flex items-center justify-between focus:outline-none group"
                                >
                                    <div>
                                        <h2 className="text-xl font-bold text-white group-hover:text-customLightOrange transition">
                                            {job.title}
                                        </h2>
                                        <div className="flex items-center text-white group-hover:text-customLightGreen mt-1">
                                            <Briefcase className="w-4 h-4 mr-2" />
                                            <span>{job.vacancies} Open Positions</span>
                                        </div>
                                    </div>
                                    <div
                                        className={`text-3xl font-bold transition-transform duration-300 ${
                                            openJob === job.id
                                                ? "text-customLightGreen rotate-180"
                                                : "text-customLightOrange rotate-0"
                                        }`}
                                    >
                                        {openJob === job.id ? "−" : "+"}
                                    </div>
                                </button>

                                {openJob === job.id && (
                                    <div className="px-5 pb-5">
                                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <div className="flex items-center mb-2">
                                                    <MapPin className="w-5 h-5 mr-2 text-customLightOrange" />
                                                    <span className="font-semibold text-white">{job.location}</span>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <Clock className="w-5 h-5 mr-2 text-customLightOrange" />
                                                    <span className="text-white">{job.department}</span>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <Star className="w-5 h-5 mr-2 text-customLightOrange" />
                                                    <span className="text-white">
                                                        Salary: &#8377;
                                                        {job.salary}
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-2 text-customLightGreen">Benefits</h3>
                                                <ul className="space-y-1">
                                                    {job.benefits.map((benefit, index) => (
                                                        <li key={index} className="flex items-center text-white">
                                                            <FileText className="w-4 h-4 mr-2 text-customLightOrange" />
                                                            {benefit}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="font-bold mb-2 text-customLightGreen">Job Description</h3>
                                            <p className="text-white">{job.description}</p>
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="font-bold mb-2 text-customLightGreen">Qualifications</h3>
                                            <p className="text-white">{job.qualifications}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerHead;
