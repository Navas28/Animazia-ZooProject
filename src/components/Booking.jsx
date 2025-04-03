import axios from "axios";
import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Booking = () => {
    const buyFunction = async (bookingType) => {
        let response = await axios.post("https://backend-zoo.onrender.com/ticketbooking/payment", { bookingType });

        if (response && response.status === 200) {
            window.location.href = response.data.url;
        }
    };
    return (
        <div id="TicketBooking">
             <h1
                className="text-customeWhite text-center font-head text-4xl md:text-6xl font-bold"
                data-aos="fade-down"
            >
                Book Now
            </h1>
            <div className="sm:flex sm:flex-col sm:align-center p-10">
                <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 md:max-w-[1600px] md:mx-auto xl:grid-cols-4">
                    <div className="bg-white rounded-xl hover:scale-102 duration-500 ease-in-out">
                        <div className="p-6">
                            <h2 className="text-xl sm:text-3xl  leading-6 font-bold text-customMediumGreen font-subhead">Standard</h2>
                            <p className="mt-4">
                                <span className="text-4xl font-bold text-customMediumGreen tracking-tighter">&#8377; 200</span>

                                <span className="text-base font-medium">/head</span>
                            </p>
                        </div>
                        <div className="pb-8 px-6">
                            <h3 className="text-sm font-bold text-customMediumGreen tracking-wide uppercase">
                                What's included
                            </h3>
                            <ul role="list" className="mt-4 space-y-3 font-para">
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700">General admission</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700"> Access to all animal enclosures</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700">Free zoo map & self-guided tour</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700">Public feeding sessions</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700"> Picnic & kids’ play area</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700"> Relaxation spots</span>
                                </li>
                                <button
                                    onClick={() => buyFunction("standard")}
                                    className="mt-8 block w-full bg-customLightOrange rounded-md py-2 text-md font-semibold text-white  text-center cursor-pointer"
                                >
                                    Book Now
                                </button>
                            </ul>
                            <p className="mt-4 text-sm leading-tight font-para">
                                <span className="text-xl text-red-600">*</span> Special Offers for Students & Individuals
                                with Disabilities!
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl hover:scale-102 duration-500 ease-in-out">
                        <div className="p-6">
                            <h2 className="text-xl sm:text-3xl leading-6 font-bold text-customMediumGreen font-subhead">Premium</h2>
                            <p className="mt-4">
                                <span className="text-4xl font-bold text-customMediumGreen tracking-tighter">&#8377; 500</span>

                                <span className="text-base font-medium">/head</span>
                            </p>
                        </div>
                        <div className="pb-8 px-6">
                            <h3 className="text-sm font-bold text-customMediumGreen tracking-wide uppercase">
                                What's included
                            </h3>
                            <ul role="list" className="mt-4 space-y-3 font-para">
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700">All Standard benefits</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700">Guided group tour</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700">Priority seating at shows</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700">One animal photo</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700">Petting zoo access</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700">Discounts on food & gifts</span>
                                </li>
                                <button
                                    onClick={() => buyFunction("premium")}
                                    className="mt-8 block w-full bg-customLightOrange rounded-md py-2 text-sm font-semibold text-white text-center cursor-pointer"
                                >
                                    Book Now
                                </button>
                            </ul>
                            <p className="mt-4 text-sm leading-tight font-para">
                                <span className="text-xl text-red-600">*</span> Special Offers for Students & Individuals
                                with Disabilities!
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl hover:scale-102 duration-500 ease-in-out">
                        <div className="p-6">
                            <h2 className="text-xl sm:text-3xl leading-6 font-bold text-customMediumGreen font-subhead">VIP</h2>
                            <p className="mt-4">
                                <span className="text-4xl font-bold text-customMediumGreen tracking-tighter">&#8377; 800</span>
                                <span className="text-base font-medium">/head</span>
                            </p>
                        </div>
                        <div className="pb-8 px-6">
                            <h3 className="text-sm font-bold text-customMediumGreen tracking-wide uppercase">
                                What's included
                            </h3>
                            <ul role="list" className="mt-4 space-y-3 font-para">
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700"> All Premium benefits</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700">Private guided tour</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700">Hands-on feeding experience</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700"> VIP seating at all shows</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700"> Free meal at the zoo café</span>
                                </li>
                                <li className="flex space-x-3 ">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700"> Meet & greet with trainers</span>
                                </li>
                                <button
                                    onClick={() => buyFunction("vip")}
                                    className="mt-8 block w-full bg-customLightOrange rounded-md py-2 text-sm font-semibold text-white text-center cursor-pointer"
                                >
                                    Book Now
                                </button>
                            </ul>
                            <p className="mt-4 text-sm leading-tight font-para">
                                <span className="text-xl text-red-600">*</span> Special Offers for Students & Individuals
                                with Disabilities!
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl hover:scale-102 duration-500 ease-in-out">
                        <div className="p-6">
                            <h2 className="text-xl sm:text-3xl leading-6 font-bold text-customMediumGreen font-subhead">Deluxe</h2>
                            <p className="mt-4">
                                <span className="text-4xl font-bold text-customMediumGreen tracking-tighter">&#8377; 1000</span>

                                <span className="text-base font-medium">/head</span>
                            </p>
                        </div>
                        <div className="pb-8 px-6">
                            <h3 className="text-sm font-bold text-customMediumGreen tracking-wide uppercase">
                                What's included
                            </h3>
                            <ul role="list" className="mt-4 space-y-3 font-para">
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700">All VIP benefits</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700">Behind-the-scenes tour</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700">Exclusive animal encounter</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700"> Private golf cart tour</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700"> Fine dining inside the zoo</span>
                                </li>
                                <li className="flex space-x-3">
                                    <IoCheckmarkDoneOutline className="text-xl text-customLightGreen" />
                                    <span className="text-base text-slate-700"> Special souvenir package</span>
                                </li>
                                <button
                                    onClick={() => buyFunction("deluxe")}
                                    className="mt-8 block w-full bg-customLightOrange rounded-md py-2 text-sm font-semibold text-white text-center cursor-pointer"
                                >
                                    Book Now
                                </button>
                            </ul>
                            <p className="mt-4 text-sm leading-tight font-para">
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
