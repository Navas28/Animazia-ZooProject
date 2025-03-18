import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import forestLogo from "../assets/images/forest-logo.png";
import govLogo from "../assets/images/india-logo.png";
import minister from "../assets/images/minister-1.jpg";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";

const Testimonials = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);
    const [sliderInstance, setSliderInstance] = useState(null);

    useEffect(() => {
        if (!sliderRef.current) return;

        const keenSlider = new KeenSlider(sliderRef.current, {
            loop: true,
            defaultAnimation: {
                duration: 750,
            },
            slides: {
                origin: "center",
                perView: 1,
                spacing: 16,
            },
            breakpoints: {
                "(min-width: 640px)": {
                    slides: {
                        origin: "center",
                        perView: 1.5,
                        spacing: 16,
                    },
                },
                "(min-width: 768px)": {
                    slides: {
                        origin: "center",
                        perView: 1.75,
                        spacing: 16,
                    },
                },
                "(min-width: 1024px)": {
                    slides: {
                        origin: "center",
                        perView: 3,
                        spacing: 16,
                    },
                },
            },
            created(slider) {
                setCurrentSlide(slider.track.details.rel + 1);
                setTotalSlides(slider.slides.length);
                slider.slides[slider.track.details.rel].classList.remove("opacity-40");
            },
            slideChanged(slider) {
                slider.slides.forEach((slide) => slide.classList.add("opacity-40"));
                slider.slides[slider.track.details.rel].classList.remove("opacity-40");
                setCurrentSlide(slider.track.details.rel + 1);
            },
        });

        setSliderInstance(keenSlider);

        return () => {
            if (keenSlider) {
                keenSlider.destroy();
            }
        };
    }, []);

    const handlePrevious = () => {
        if (sliderInstance) {
            sliderInstance.prev();
        }
    };

    const handleNext = () => {
        if (sliderInstance) {
            sliderInstance.next();
        }
    };

    const testimonials = [
        {
            name: "Sidharth",
            text: "The team is passionate and dedicated to protecting nature. Their educational programs and community involvement show how much they care about making a positive impact.",
        },
        {
            name: "Rahul",
            text: "Their efforts to protect endangered animals are incredible. They work hard to provide safe environments and raise awareness about the importance of wildlife conservation.",
        },
        {
            name: "Sathya",
            text: "This organization is making a real difference by preserving natural habitats and promoting sustainable practices. It’s inspiring to see their commitment to a healthier planet.",
        },
        {
            name: "Avinash",
            text: "I learned so much about protecting nature through their events. They make it easy for everyone to get involved and support the mission of saving our environment.",
        },
    ];
    return (
        <section>
            <h1
                className="text-customeWhite text-center font-head text-4xl md:text-6xl font-bold"
                data-aos="fade-down"
                id="Team"
            >
                Reviews
            </h1>
            <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="text-center lg:mx-auto lg:w-3/5">
                    <div className="flex justify-center items-center">
                        <img data-aos="zoom-in" className="h-50 w-65" src={forestLogo} alt="" />
                        <img data-aos="zoom-in" className="h-30 w-35" src={govLogo} alt="" />
                    </div>
                    <div className="mt-6 lg:mt-10" data-aos="fade-down">
                        <p className="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium">
                            <span className="relative text-customeWhite font-para">
                                " Remarkable progress has been made in saving wildlife and protecting endangered species.
                                The dedication to preserving natural habitats and ensuring the well-being of animals is
                                truly inspiring. These efforts set an example of commitment to biodiversity and a
                                sustainable future for all living beings. "
                            </span>
                        </p>
                    </div>
                    <footer className="mt-6 flex justify-center" data-aos="fade-down">
                        <img className="h-20 w-30 rounded-xl" src={minister} alt="" />
                        <div className="ml-2 font-semibold font-subhead text-customeWhite tracking-wide">
                            Bhupender Yadav
                            <div className="text-sm text-customLightOrange font-para">
                                Minister of Environment and <br /> Forest India
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="mt-8">
                    <div ref={sliderRef} className="keen-slider">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="keen-slider__slide opacity-40 transition-opacity duration-500">
                                <div className="rounded-lg border-2 border-customLightGreen p-6  sm:p-8">
                                    <p className="mt-4 text-md  text-customeWhite italic">"{testimonial.text}"</p>
                                    <div>
                                        <p className="mt-0.5 text-lg font-medium text-customeWhite">{testimonial.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <button
                            aria-label="Previous slide"
                            onClick={handlePrevious}
                            className="text-customeWhite hover:text-customLightOrange text-2xl"
                        >
                            <TiArrowLeftOutline />
                        </button>
                        <p className="w-16 text-center text-sm text-customeWhite">
                            <span>{currentSlide}</span>/<span>{totalSlides}</span>
                        </p>
                        <button
                            aria-label="Next slide"
                            onClick={handleNext}
                            className="text-customeWhite hover:text-customLightOrange text-2xl"
                        >
                            <TiArrowRightOutline />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
