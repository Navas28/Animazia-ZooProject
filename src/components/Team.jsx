import React from "react";
import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";
import team5 from "../assets/images/team-5.jpg";
import team6 from "../assets/images/team-7.jpg";

const Team = () => {
    return (
        <section class="py-10 sm:py-16 lg:py-24">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div class="max-w-2xl mx-auto text-center">
                    <h1
                        className="text-customeWhite text-center font-head text-4xl md:text-6xl font-bold mb-8"
                        data-aos="fade-down"
                        id="Team"
                    >
                        Our Team
                    </h1>
                </div>

                <div class="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-5 gap-x-0 font-para">
                    <div>
                        <img class="object-cover mx-auto rounded-lg w-34 h-34" src={team1} alt="" data-aos="zoom-in" />
                        <p class="mt-8 text-lg  leading-tight text-customeWhite tracking-wider font-semibold">
                            Dr. Meera Nair
                        </p>
                        <p class="mt-1 text-base leading-tight text-customLightOrange">Wildlife Veterinarian</p>
                    </div>

                    <div class="hidden lg:block"></div>

                    <div>
                        <img class="object-cover mx-auto rounded-lg w-34 h-34" src={team5} alt="" data-aos="zoom-in" />
                        <p class="mt-8 text-lg font-semibold leading-tight text-customeWhite tracking-wider">Priya Iyer</p>
                        <p class="mt-1 text-base leading-tight text-customLightOrange">Chairman</p>
                    </div>

                    <div class="hidden lg:block"></div>

                    <div>
                        <img class="object-cover mx-auto rounded-lg w-34 h-34" src={team2} alt="" data-aos="zoom-in" />
                        <p class="mt-8 text-lg font-semibold leading-tight text-customeWhite tracking-wider">
                            Arjun Sharma
                        </p>
                        <p class="mt-1 text-base leading-tight text-customLightOrange">Conservation Biologist</p>
                    </div>

                    <div class="hidden lg:block"></div>

                    <div>
                        <img class="object-cover mx-auto rounded-lg w-34 h-34" src={team3} alt="" data-aos="zoom-in" />
                        <p class="mt-8 text-lg font-semibold leading-tight text-customeWhite tracking-wider">Rohan Gupta</p>
                        <p class="mt-1 text-base leading-tight text-customLightOrange">Animal Behavior Specialist</p>
                    </div>

                    <div class="hidden lg:block"></div>

                    <div>
                        <img class="object-cover mx-auto rounded-lg w-34 h-34" src={team4} alt="" data-aos="zoom-in" />
                        <p class="mt-8 text-lg font-semibold leading-tight text-customeWhite tracking-wider">Kabir Das</p>
                        <p class="mt-1 text-base leading-tight text-customLightOrange">Volunteer Manager</p>
                    </div>

                    <div class="hidden lg:block"></div>
                    <div class="hidden lg:block"></div>
                    <div class="hidden lg:block"></div>

                    <div>
                        <img class="object-cover mx-auto rounded-lg w-34 h-34" src={team6} alt="" data-aos="zoom-in" />
                        <p class="mt-8 text-lg font-semibold leading-tight text-customeWhite tracking-wider">
                            Anjali Deshmukh
                        </p>
                        <p class="mt-1 text-base leading-tight text-customLightOrange">Fundraising Coordinator</p>
                    </div>

                    <div class="hidden lg:block"></div>
                </div>
            </div>
        </section>
    );
};

export default Team;
