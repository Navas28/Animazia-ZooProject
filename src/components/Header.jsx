import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/images/hero-2.avif";
const Header = () => {
    return (
        <div className="min-h-screen  bg-customeGreen flex items-center w-full overflow-hidden" id="Home">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-8/12 ">
                    <div className="mx-auto h-full sm:p-10">
                        <header className=" px-4 sm:flex mt-20 items-center h-full lg:mt-0 mb-10 sm:mb-0">
                            <div className="w-full">
                                <h1 className="text-4xl lg:text-6xl font-bold font-head text-customeWhite">
                                    Find your <span className="text-green-700">greeny</span> stuff for your room
                                </h1>
                                <div className="w-20 h-2 bg-customeWhite my-4"></div>
                                <p className="text-xl mb-10 text-customeWhite font-para">
                                    Step into a world where wildlife thrives and nature comes to life. Explore diverse
                                    habitats that mirror the natural environments of animals from around the globe. Discover
                                    rare and exotic species, learn about conservation efforts, and experience the beauty of
                                    the animal kingdom up close. Every visit supports the protection and preservation of
                                    wildlife, ensuring a future where these incredible creatures continue to flourish.
                                </p>
                                <button className="bg-customeWhite text-customeGreen text-xl font-medium px-4 py-2 rounded cursor-pointer hover:scale-102 duration-500 ease-in-out hover:bg-customLightOrange hover:text-customeWhite font-para">
                                    <Link to="/donation">Donate</Link>
                                </button>
                            </div>
                        </header>
                    </div>
                </div>
                <img src={bgImg} alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12 mb-30 2xl:mb-10" />
            </div>
        </div>
    );
};

export default Header;
