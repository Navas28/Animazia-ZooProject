import React from "react";

// Import all images
import animal1 from "../assets/images/animal-1.jpg";
import animal2 from "../assets/images/animal-2.jpg";
import animal3 from "../assets/images/animal-3.jpg";
import animal4 from "../assets/images/animal-4.jpg";
import animal5 from "../assets/images/animal-5.jpg";
import animal6 from "../assets/images/animal-6.jpg";
import animal7 from "../assets/images/animal-7.jpg";
import animal8 from "../assets/images/animal-8.jpg";
import animal9 from "../assets/images/animal-9.jpg";

const images = [
    { id: 1, src: animal1 },
    { id: 2, src: animal2 },
    { id: 3, src: animal3 },
    { id: 4, src: animal4 },
    { id: 5, src: animal5 },
    { id: 6, src: animal6 },
    { id: 7, src: animal7 },
    { id: 8, src: animal8 },
    { id: 9, src: animal9 },
];
const About = () => {
    return (
        <div
            className="-mt-40 flex flex-col items-center justify-center md:px-20 lg:px-32 p-14 w-full min-h-screen overflow-hidden"
            id="About"
        >
            <h1 className="text-customeWhite text-4xl font-head md:text-6xl font-bold mb-8" data-aos="fade-down">
                About Us
            </h1>
            <div className="flex flex-col md:flex-row items-start justify-between w-full gap-8">
                <div className="md:w-1/2">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3" data-aos="fade-down">
                        {images.map((image) => (
                            <img
                                key={image.id}
                                className="object-cover w-full rounded-lg h-40 border-2 border-white cursor-pointer"
                                src={image.src}
                                alt="animal image"
                            />
                        ))}
                    </div>
                </div>

                <div className="md:w-1/2 p-4" data-aos="fade-down">
                    <p className="text-customeWhite font-para text-lg">
                        At <span className="text-customLightOrange">Animazia</span> , our goal is to inspire and educate visitors about wildlife. We focus on conservation
                        and protecting endangered species. Our mission is to promote awareness and appreciation for the
                        animal kingdom. We offer a variety of educational programs for schools and families. These programs
                        include hands-on activities, animal encounters, and guided tours. <br /> Our interactive exhibits
                        allow visitors to learn about various animals in engaging ways. We host special events throughout
                        the year, such as animal enrichment days, behind-the-scenes tours, and community conservation
                        workshops. These activities provide unique opportunities to connect with wildlife and learn how we
                        can help. Together, we can protect our planet’s incredible species and ensure their survival for
                        years to come.
                    </p>

                    <div>
                        <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto ">
                            <div className="border border-neutral-800 rounded-xl">
                                <div className="p-4 lg:p-8 bg-mediumGreen rounded-xl">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                                        <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                                            <svg
                                                className="shrink-0 size-6 sm:size-12 text-[#ff0] mx-auto"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="48"
                                                height="48"
                                                viewBox="0 0 48 48"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M27.125 4.665C36.542.9 41.39 9.436 42.705 15.585m-1.618 1.235c2.211 5.069-.186 9.907-1.029 14.898m-1.764 1.256C36.073 36.954 27.623 42.481 24 45m.177-39.343C18.204-.631 10.75 5.344 7.589 12.154m2.294.538C6.798 16.787 4.216 23.255 5.75 28.487m2.898 1.257c.753 5.38 8.751 10.038 11.47 14.18m9.754-11.12c1.448-2.207.583-5.624 2.97-7.343c1.61-1.04 4.347-.169 5.035-2.484c.275-1.75-2.585-3.72-3.35-5.111c-2.065-2.292-2.004-4.424-4.637-6.221c-2.054-1.37-3.811.623-5.6 1.232c-1.637-.465-2.57-2.708-4.503-2.387c-2.681.656-3.42 3.645-4.942 5.622c-1.354 1.759-4.224 3.369-3.712 5.529c.504 2.124 4.859 1.011 5.706 3.218c1.905 2.653 1.183 5.286 2.606 7.528c1.08 1.702 2.07 6.654 4.33 4.222c.614.577 1.915.558 2.267.089c1.689 1.01 2.831-2.372 3.83-3.894"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M26.973 27.46a24 24 0 0 1-1.281.938c-.197.112-.42.305-.624.086a4.7 4.7 0 0 1-1.41-1.152c-.107-.17-.36-.342-.356-.533c.21-.058.438-.055.656-.08c.402-.007.805.017 1.207.018c.449.053.903.021 1.351.087c.297.044.603.06.89.149c.105.114-.203.216-.255.327a7 7 0 0 1-.178.16m-6.64-8.898c-.227-.129-.497-.152-.753-.158c-.3.01-.543.218-.728.434a1.1 1.1 0 0 0-.162.964c.134.35.403.667.772.776c.246.09.55.098.758-.083c.333-.253.53-.666.552-1.08c0-.114-.018-.228-.058-.393s-.183-.354-.38-.46Zm9.472 2.478a.7.7 0 0 0 .695-.221c.391-.399.607-1.041.368-1.572c-.119-.281-.413-.422-.7-.469c-.383-.143-.835.043-1.038.39c-.211.286-.346.654-.245 1.008c.08.452.482.783.92.864m-4.496 7.995l-.3 2.747s.624.268 1.937-.501c1.313-.77 1.42-1.382 1.42-1.382"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M25.036 31.776s-1.08-.113-2.03-.861c-.952-.75-1.167-1.317-1.167-1.317"
                                                    strokeWidth="1"
                                                />
                                            </svg>

                                            <div className="mt-3 sm:mt-5">
                                                <h3 className="text-lg sm:text-3xl font-semibold text-white font-subhead">
                                                    2,000+
                                                </h3>
                                                <p className="mt-1 text-sm sm:text-base text-neutral-400 font-para">Animals</p>
                                            </div>
                                        </div>

                                        <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                                            <div className="flex justify-center items-center -space-x-5">
                                                <svg
                                                    className="shrink-0 size-6 sm:size-11 text-[#ff0] mx-auto"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M7 22v-5H2v-4h6.45l1.7 2.55q.125.2.35.325t.475.125q.325 0 .6-.2t.375-.5l1.35-4.05l.85 1.3q.15.2.375.325T15 13h7v4h-5v5zm3.7-9.25l-.875-1.3q-.125-.2-.35-.325T9 11H2V7h5V2h10v5h5v4h-6.475l-1.7-2.55q-.125-.2-.35-.325T13 8q-.325 0-.587.2t-.363.5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="mt-3 sm:mt-5">
                                                <h3 className="text-lg sm:text-3xl font-semibold text-white font-subhead">
                                                    24 / 7
                                                </h3>
                                                <p className="mt-1 text-sm sm:text-base text-neutral-400 font-para">
                                                    Care for the animals
                                                </p>
                                            </div>
                                        </div>

                                        <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                                            <svg
                                                className="shrink-0 size-6 sm:size-11 text-[#ff0] mx-auto"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M18 6q-.825 0-1.412-.587T16 4t.588-1.412T18 2t1.413.588T20 4t-.587 1.413T18 6m-1 16v-8q0-1-.513-1.8t-1.312-1.25l.875-2.575q.2-.625.738-1T18 7t1.213.375t.737 1L22.5 16H20v6zm-4.5-10.5q-.625 0-1.062-.437T11 10t.438-1.062T12.5 8.5t1.063.438T14 10t-.437 1.063t-1.063.437M5.5 6q-.825 0-1.412-.587T3.5 4t.588-1.412T5.5 2t1.413.588T7.5 4t-.587 1.413T5.5 6m-2 16v-7H2V9q0-.825.588-1.412T4 7h3q.825 0 1.413.588T9 9v6H7.5v7zm7.5 0v-4h-1v-4q0-.625.438-1.062T11.5 12.5h2q.625 0 1.063.438T15 14v4h-1v4z"
                                                />
                                            </svg>
                                            <div className="mt-3 sm:mt-5">
                                                <h3 className="text-lg sm:text-3xl font-semibold text-white font-subhead">
                                                    1M+
                                                </h3>
                                                <p className="mt-1 text-sm sm:text-base text-neutral-400 font-para">
                                                    Visitors annually
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
