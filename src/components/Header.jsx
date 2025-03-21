import React from "react";
import Navbar from "./Navbar";
import bgImg from "../assets/images/hero-2.avif";
const Header = () => {
    return (
        <div className="min-h-screen  bg-customeGreen flex items-center w-full overflow-hidden" id="Home">
            <div class="flex flex-wrap">
                <div class="w-full sm:w-8/12 mb-10">
                    <div class="container mx-auto h-full sm:p-10">
                        <Navbar />
                        <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                            <div class="w-full">
                                <h1 class="text-4xl lg:text-6xl font-bold font-head text-customeWhite">
                                    Find your <span class="text-green-700">greeny</span> stuff for your room
                                </h1>
                                <div class="w-20 h-2 bg-customeWhite my-4"></div>
                                <p class="text-xl mb-10 text-customeWhite font-para">
                                    Step into a world where wildlife thrives and nature comes to life. Explore diverse
                                    habitats that mirror the natural environments of animals from around the globe. Discover
                                    rare and exotic species, learn about conservation efforts, and experience the beauty of
                                    the animal kingdom up close. Every visit supports the protection and preservation of
                                    wildlife, ensuring a future where these incredible creatures continue to flourish.
                                </p>
                                <button class="bg-customeWhite text-customMediumGreen text-xl font-medium px-4 py-2 rounded cursor-pointer hover:scale-105 duration-500 ease-in-out hover:bg-customMediumGreen hover:text-customeWhite">
                                    Donate
                                </button>
                            </div>
                        </header>
                    </div>
                </div>
                <img src={bgImg} alt="Leafs" class="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
            </div>
        </div>
    );
};

export default Header;
