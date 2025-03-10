import React from "react";
import featureCard from "../assets/images/features-bg.jpg";

const Features = () => {
    const features = [
        "Wildlife Diversity",
        "Interactive Zones",
        "Conservation Efforts",
        "Educational Programs",
        "Kid-Friendly Areas",
        "Animal Shows",
        "Dining & Shopping",
        "Seasonal Events",
        "Rare Animal Encounters",
        "Safari Tours",
        "Adoption Programs",
        "Virtual Zoo",
    ];
    return (
        <>
            <h1
                className="text-customeWhite text-center font-head text-4xl md:text-6xl font-bold mb-8"
                data-aos="fade-down"  id="Features"
            >
                Features
            </h1>
            <div className="max-w-[85rem] px-4  py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div
                    className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32"
                    data-aos="fade-down"
                >
                    <div>
                        <img className="rounded-xl" src={featureCard} alt="Features Image" />
                    </div>

                    <div className="mt-5 sm:mt-10 lg:mt-0">
                        <div className=" xl:mb-[160px]">
                            <div className="space-y-2 md:space-y-4">
                                <h2 className="font-bold text-3xl lg:text-4xl text-customoff font-subhead">
                                    Explore Our Unique Features
                                </h2>
                                <p className="text-customoff font-para">
                                    we offer a variety of exciting features designed to enhance your experience and connect
                                    you with the animal kingdom. Explore everything we have to offer during your visit!
                                </p>
                            </div>

                            <ul className="space-y-2 mt-3 sm:space-y-4 xl:mt-9">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex gap-x-3">
                                        <span className="mt-0.5 size-5 flex justify-center items-center rounded-full text-customLightGreen font-para">
                                            <svg
                                                className="shrink-0 size-3.5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        <div className="grow">
                                            <span className="text-sm sm:text-base font-bold text-customLightGreen">
                                                {feature}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
