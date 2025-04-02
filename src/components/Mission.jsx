import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import mission1 from "../assets/images/mission-1.jpg";
import mission2 from "../assets/images/mission-2.jpg";
import mission3 from "../assets/images/mission-3.jpg";
import mission4 from "../assets/images/mission-4.jpeg";
import mission5 from "../assets/images/mission-pond.jpg";
import mission6 from "../assets/images/mission-Tours.jpg";

const Mission = () => {
    return (
        <div id="Mission">
             <h1
                className="text-customeWhite text-center font-head text-4xl md:text-6xl font-bold mb-8"
                data-aos="fade-down" 
            >
                Programs
            </h1>
             <Swiper
            direction={"vertical"}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
            mousewheel={true}
            pagination={{
                clickable: true,
            }}
            modules={[Mousewheel, Pagination, Autoplay]}
            className="mySwiper  w-[95%] max-h-[500px] sm:max-h-[750px] h-full rounded-xl" data-aos="fade-down"
        >
            <SwiperSlide className="text-center flex justify-center items-center ">
                <img className="object-cover w-full h-full" src={mission1} alt="" />
                <div className="absolute  inset-0 flex  justify-start items-start text-customeGreen  p-8">
                    <span className="bg-customLightOrange text-black rounded px-2 py-1 font-subhead">12-05-2024</span>
                </div>
                <div className="absolute w-full sm:max-w-[600px]  inset-0 flex flex-col justify-end items-start text-white sm:p-15 ">
                    <h2 className="text-xl sm:text-3xl font-bold px-2 ml-2 sm:ml-0 sm:px-0 mb-2 bg-black/30 rounded-lg font-subhead">Forest Conservation and  animal Protection  Program</h2>
                    <p className="text-lg font-para">
                    Forest conservation and animal protection are vital for maintaining biodiversity and preserving natural habitats. Protecting wildlife helps maintain ecological balance and ensures a healthier planet for future generations.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center">
                <img className="object-cover w-full h-full" src={mission2} alt="" />
                <div className="absolute  inset-0 flex  justify-start items-start text-customeGreen  p-8">
                    <span className="bg-customLightOrange text-black rounded px-2 py-1 font-subhead">02-07-2024</span>
                </div>
                <div className="absolute w-full sm:max-w-[600px]  inset-0 flex flex-col justify-end items-start text-white sm:p-15 ">
                    <h2 className="text-xl sm:text-3xl font-bold mb-2 bg-black/50 rounded-lg font-subhead px-2 ml-2 sm:ml-0 sm:px-0">Understanding Forests and Conservation Methods</h2>
                    <p className="text-lg font-para">
                    Forests are essential for life on Earth. They provide oxygen, shelter wildlife, and maintain the climate. Conservation methods include planting trees, protecting endangered species, and reducing deforestation. These actions help preserve natural ecosystems and support biodiversity.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center">
                <img className="object-cover w-full h-full" src={mission3} alt="" />
                <div className="absolute  inset-0 flex  justify-start items-start text-customeGreen  p-8">
                    <span className="bg-customLightOrange rounded px-2 py-1 font-subhead">05-06-2024</span>
                </div>
                <div className="absolute w-full sm:max-w-[600px]  inset-0 flex flex-col justify-end items-start text-white sm:p-15 ">
                    <h2 className="text-xl sm:text-3xl font-bold mb-2 bg-black/50 rounded-lg font-subhead px-4 ml-6 sm:ml-0">Celebrate World Natural Day Together</h2>
                    <p className="text-lg font-para">
                    World Natural Day highlights the importance of protecting our environment. Planting trees helps restore forests, improves air quality, and supports wildlife. Every tree planted brings us closer to a greener and healthier planet.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center">
                <img className="object-cover w-full h-full" src={mission4} alt="" />
                <div className="absolute  inset-0 flex  justify-start items-start text-customeGreen  p-8">
                    <span className="bg-customLightOrange text-black rounded px-2 py-1 font-subhead">22-07-2024</span>
                </div>
                <div className="absolute w-full sm:max-w-[600px]  inset-0 flex flex-col justify-end items-start text-white sm:p-15 px-2 sm:px-8">
                    <h2 className="text-xl sm:text-3xl font-bold mb-2 bg-black/40 rounded-lg font-subhead px-7">Sustainable Land Protection on Hills and Soil</h2>
                    <p className="text-lg font-para">
                    Effective land protection on hills is essential to prevent soil erosion and landslides caused by heavy rainfall. Implementing methods such as afforestation, terracing, and advanced drainage systems helps maintain soil integrity and preserve the natural landscape.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center">
                <img className="object-cover w-full h-full" src={mission5} alt="" />
                <div className="absolute  inset-0 flex  justify-start items-start text-customeGreen  p-8">
                    <span className="bg-customLightOrange text-black rounded px-2 py-1 font-subhead">16-11-2024</span>
                </div>
                <div className="absolute w-full sm:max-w-[600px]  inset-0 flex flex-col justify-end items-start text-white sm:p-15 ">
                    <h2 className="text-xl sm:text-3xl  ml-6 sm:ml-0  font-bold mb-2 bg-black/50 rounded-lg font-subhead px-3">Water Resource Management in Forest</h2>
                    <p className="text-lg font-para">
                    Water Resource Management refers to the planning, developing, distributing, and managing water resources efficiently to meet environmental, social, and economic needs. It involves practices to ensure sustainable water use, protect natural ecosystems, and provide clean water for agriculture, industry, and communities.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center">
                <img className="object-cover w-full h-full" src={mission6} alt="" />
                <div className="absolute  inset-0 flex  justify-start items-start text-customeGreen  p-8">
                    <span className="bg-customLightOrange  text-black rounded px-2 py-1 font-subhead">02-26-2025</span>
                </div>
                <div className="absolute w-full sm:max-w-[600px]  inset-0 flex flex-col justify-end items-start text-white sm:p-15 ">
                    <h2 className="text-xl sm:text-3xl font-bold mb-2 px-2 ml-6 sm:ml-0 sm:px-0 bg-black/30 rounded-lg font-subhead">Experiencing Animals in Their Natural Habitat</h2>
                    <p className="text-lg font-para">
                    A wild safari offers a unique opportunity to observe animals in their natural forest environment. It promotes wildlife conservation while allowing visitors to experience the beauty of untouched ecosystems. Safaris provide a safe, guided way to see diverse species like lions, elephants, and other wildlife in their natural behaviors.
                    </p>
                </div>
            </SwiperSlide>

            <div className="custom-pagination absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2"></div>
        </Swiper>
        </div>
       
    );
};

export default Mission;
