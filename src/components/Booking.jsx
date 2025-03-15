import axios from "axios";
import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Booking = () => {
    const buyFunction = async (bookingType) => {
        let response = await axios.post("http://localhost:3000/payment", { bookingType });

        if (response && response.status === 200) {
            window.location.href = response.data.url;
        }
    };
    return (
        <div>
             <h1
                className="text-customeWhite text-center font-head text-4xl md:text-6xl font-bold"
                data-aos="fade-down"  id="Booking"
            >
                Book Now
            </h1>
            <div class="sm:flex sm:flex-col sm:align-center p-10">
                <div class="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 md:max-w-[1600px] md:mx-auto xl:grid-cols-4">
                    <div class="bg-customeWhite rounded-xl hover:scale-102 duration-500 ease-in-out">
                        <div class="p-6">
                            <h2 class="text-xl sm:text-3xl  leading-6 font-bold text-customMediumGreen">Standard</h2>
                            <p class="mt-4">
                                <span class="text-4xl font-bold text-customMediumGreen tracking-tighter">&#8377; 200</span>

                                <span class="text-base font-medium">/head</span>
                            </p>
                        </div>
                        <div class="pb-8 px-6">
                            <h3 class="text-sm font-bold text-customMediumGreen tracking-wide uppercase">
                                What's included
                            </h3>
                            <ul role="list" class="mt-4 space-y-3">
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700">General admission</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700"> Access to all animal enclosures</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700">Free zoo map & self-guided tour</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700">Public feeding sessions</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700"> Picnic & kids’ play area</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700"> Relaxation spots</span>
                                </li>
                                <button
                                    onClick={() => buyFunction("standard")}
                                    class="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center cursor-pointer"
                                >
                                    Book Now
                                </button>
                            </ul>
                            <p class="mt-4 text-sm leading-tight">
                                <span className="text-xl text-red-600">*</span> Special Offers for Students & Individuals
                                with Disabilities!
                            </p>
                        </div>
                    </div>

                    <div class="bg-customeWhite rounded-xl hover:scale-102 duration-500 ease-in-out">
                        <div class="p-6">
                            <h2 class="text-xl sm:text-3xl leading-6 font-bold text-customMediumGreen">Premium</h2>
                            <p class="mt-4">
                                <span class="text-4xl font-bold text-customMediumGreen tracking-tighter">&#8377; 500</span>

                                <span class="text-base font-medium">/head</span>
                            </p>
                        </div>
                        <div class="pb-8 px-6">
                            <h3 class="text-sm font-bold text-customMediumGreen tracking-wide uppercase">
                                What's included
                            </h3>
                            <ul role="list" class="mt-4 space-y-3">
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700">All Standard benefits</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700">Guided group tour</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700">Priority seating at shows</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700">One animal photo</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700">Petting zoo access</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700">Discounts on food & gifts</span>
                                </li>
                                <button
                                    onClick={() => buyFunction("premium")}
                                    class="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center cursor-pointer"
                                >
                                    Book Now
                                </button>
                            </ul>
                            <p class="mt-4 text-sm leading-tight">
                                <span className="text-xl text-red-600">*</span> Special Offers for Students & Individuals
                                with Disabilities!
                            </p>
                        </div>
                    </div>

                    <div class="bg-customeWhite rounded-xl hover:scale-102 duration-500 ease-in-out">
                        <div class="p-6">
                            <h2 class="text-xl sm:text-3xl leading-6 font-bold text-customMediumGreen">VIP</h2>
                            <p class="mt-4">
                                <span class="text-4xl font-bold text-customMediumGreen tracking-tighter">&#8377; 800</span>
                                <span class="text-base font-medium">/head</span>
                            </p>
                        </div>
                        <div class="pb-8 px-6">
                            <h3 class="text-sm font-bold text-customMediumGreen tracking-wide uppercase">
                                What's included
                            </h3>
                            <ul role="list" class="mt-4 space-y-3">
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700"> All Premium benefits</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700">Private guided tour</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700">Hands-on feeding experience</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700"> VIP seating at all shows</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700"> Free meal at the zoo café</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700"> Meet & greet with trainers</span>
                                </li>
                                <button
                                    onClick={() => buyFunction("vip")}
                                    class="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center cursor-pointer"
                                >
                                    Book Now
                                </button>
                            </ul>
                            <p class="mt-4 text-sm leading-tight">
                                <span className="text-xl text-red-600">*</span> Special Offers for Students & Individuals
                                with Disabilities!
                            </p>
                        </div>
                    </div>

                    <div class="bg-customeWhite rounded-xl hover:scale-102 duration-500 ease-in-out">
                        <div class="p-6">
                            <h2 class="text-xl sm:text-3xl leading-6 font-bold text-customMediumGreen">Deluxe</h2>
                            <p class="mt-4">
                                <span class="text-4xl font-bold text-customMediumGreen tracking-tighter">&#8377; 1000</span>

                                <span class="text-base font-medium">/head</span>
                            </p>
                        </div>
                        <div class="pb-8 px-6">
                            <h3 class="text-sm font-bold text-customMediumGreen tracking-wide uppercase">
                                What's included
                            </h3>
                            <ul role="list" class="mt-4 space-y-3">
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700">All VIP benefits</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700">Behind-the-scenes tour</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700">Exclusive animal encounter</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700"> Private golf cart tour</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700"> Fine dining inside the zoo</span>
                                </li>
                                <li class="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span class="text-base text-slate-700"> Special souvenir package</span>
                                </li>
                                <button
                                    onClick={() => buyFunction("deluxe")}
                                    class="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center cursor-pointer"
                                >
                                    Book Now
                                </button>
                            </ul>
                            <p class="mt-4 text-sm leading-tight">
                                <span className="text-xl text-red-600">*</span> Special Offers for Students & Individuals
                                with Disabilities!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
