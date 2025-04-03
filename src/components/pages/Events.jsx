import React, { useState } from "react";
import { Calendar, Clock, Users, ChevronRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import animalDay from "../../assets/images/animalDay.jpg";
import worldWildLife from "../../assets/images/world-wildLife.jpg";
import zooKeeper from "../../assets/images/zooKeeper.jpg";
import zooTour from "../../assets/images/zooTour.jpg";
import winterWild from "../../assets/images/winterWild.jpeg";
import penquinDay from "../../assets/images/penguinDay.jpg";
import zooNight from "../../assets/images/zooNight.jpg";
import lightsafari from "../../assets/images/lightsafari.jpg";
import primateSymposium from "../../assets/images/primateSymposium.webp";
import boozoo from "../../assets/images/booZoo.webp";
import nightSafari from "../../assets/images/nightSafari.jpg";
import conservation from "../../assets/images/conservation.jpg";
import sleepover from "../../assets/images/sleepover.jpg";
import reptileEncounter from "../../assets/images/reptileEncounter.jpg";
import photography from "../../assets/images/photography.jpeg";
import giraffday from "../../assets/images/giraffday.avif";
import bigCat from "../../assets/images/bigCat.jpg";
import enrichment from "../../assets/images/enrichment.jpg";
import conservationLucture from "../../assets/images/conservationLucture.png";
import summercamp from "../../assets/images/summercamp.jpg";

const Events = () => {
    const [activeTab, setActiveTab] = useState("upcoming");

    const events = {
        upcoming: [
            {
                id: 1,
                title: "Night Safari Experience",
                description:
                    "Explore the zoo after dark and discover nocturnal animals in their active hours. Guided tour with special night vision equipment provided.",
                date: "April 15, 2025",
                time: "7:00 PM - 10:00 PM",
                image: nightSafari,
            },
            {
                id: 2,
                title: "Conservation Workshop",
                description:
                    "Join our conservation experts and learn how we're protecting endangered species. Interactive sessions and behind-the-scenes access to our conservation facilities.",
                date: "May 2, 2025",
                time: "9:00 AM - 1:00 PM",
                image: conservation,
            },
            {
                id: 3,
                title: "Family Zoo Sleepover",
                description:
                    "Spend the night at the zoo! Includes evening tour, animal encounters, dinner, breakfast, and sleeping near our aquarium exhibit.",
                date: "May 20, 2025",
                time: "6:00 PM - 8:00 AM",
                image: sleepover,
            },
            {
                id: 4,
                title: "Reptile Encounter",
                description:
                    "Get up close with our scaled friends! Handle friendly snakes, lizards and turtles under expert supervision. Great for all ages.",
                date: "June 5, 2025",
                time: "11:00 AM - 3:00 PM",
                image: reptileEncounter,
            },
            {
                id: 5,
                title: "Photography Workshop",
                description:
                    "Learn wildlife photography techniques from professional photographers. Includes special access to exhibits for optimal shooting conditions.",
                date: "June 12, 2025",
                time: "8:00 AM - 12:00 PM",
                image: photography,
            },
            {
                id: 6,
                title: "World Giraffe Day",
                description:
                    "Special activities centered around our tallest residents. Includes giraffe feeding, conservation talks, and children's activities.",
                date: "June 21, 2025",
                time: "10:00 AM - 4:00 PM",
                image: giraffday,
            },
            {
                id: 7,
                title: "Big Cat Breakfast",
                description:
                    "Start your day by watching our lions, tigers and leopards enjoy their morning meal while our experts explain feeding behaviors.",
                date: "July 8, 2025",
                time: "7:30 AM - 9:00 AM",
                image: bigCat,
            },
            {
                id: 8,
                title: "Animal Enrichment Workshop",
                description:
                    "Help create enrichment items for our animals and watch as they interact with your creations. A fun, educational family activity.",
                date: "July 15, 2025",
                time: "1:00 PM - 4:00 PM",
                image: enrichment,
            },
            {
                id: 9,
                title: "Conservation Lecture Series",
                description:
                    "Renowned wildlife biologists discuss current conservation challenges and solutions. This month's topic: Rainforest Preservation.",
                date: "July 22, 2025",
                time: "6:00 PM - 8:00 PM",
                image: conservationLucture,
            },
            {
                id: 10,
                title: "Summer Zoo Camp",
                description:
                    "Week-long day camp for children ages 8-12. Activities include animal interactions, conservation projects, and behind-the-scenes zoo experiences.",
                date: "August 3-7, 2025",
                time: "9:00 AM - 3:00 PM",
                image: summercamp,
            },
        ],
        completed: [
            {
                id: 11,
                title: "Animal Enrichment Day",
                description:
                    "Visitors participated in hands-on activities, helping zookeepers create enrichment toys and puzzles for animals. This event highlighted the importance of mental stimulation for animal well-being, allowing guests to observe how different species interact with their custom-made enrichments",
                date: "March 10, 2025",
                participants: 120,
                image: animalDay,
            },
            {
                id: 12,
                title: "World Wildlife Day Celebration",
                description:
                    "A day dedicated to wildlife conservation, featuring expert talks, interactive exhibits, and engaging activities for families. Visitors learned about endangered species, conservation programs, and ways they can contribute to protecting global biodiversity. Special workshops on sustainable living, eco-friendly crafts for kids",
                date: "March 3, 2025",
                participants: 350,
                image: worldWildLife,
            },
            {
                id: 13,
                title: "Zoo Keeper For A Day",
                description:
                    "Selected participants got an exclusive behind-the-scenes experience of a zookeeper’s daily routine. They assisted with feeding schedules, habitat maintenance, and even interacted with some of the zoo's friendly residents. A once-in-a-lifetime experience for wildlife enthusiasts! ",
                date: "February 22, 2025",
                participants: 25,
                image: zooKeeper,
            },
            {
                id: 14,
                title: "Valentine's Day Special Tour",
                description:
                    "A romantic evening tour featuring animals with unique courtship rituals. Guests learned about species known for lifelong partnerships, including penguins, wolves, and swans. The event ended with a candle-lit dinner and exclusive photo opportunities with zoo ambassadors.",
                date: "February 14, 2025",
                participants: 46,
                image: zooTour,
            },
            {
                id: 15,
                title: "Winter Wildlife Festival",
                description:
                    "A celebration of animals that thrive in cold climates! Guests enjoyed live demonstrations featuring Arctic foxes, snow leopards, and reindeer. Special warm beverage stations, winter-themed crafts, and extended nighttime viewing of nocturnal species made it a magical winter experience.",
                date: "January 28, 2025",
                participants: 215,
                image: winterWild,
            },
            {
                id: 16,
                title: "Penguin Awareness Weekend",
                description:
                    "A fun and educational event focused on penguin conservation. Visitors attended feeding demonstrations, met conservation experts, and participated in an interactive penguin exhibit. Kids also had the opportunity to make penguin crafts and take part in a scavenger hunt",
                date: "January 20, 2025",
                participants: 180,
                image: penquinDay,
            },
            {
                id: 17,
                title: "New Year's Eve Night Tour",
                description:
                    "A special after-hours tour featuring animal encounters, guided night walks, and a midnight champagne toast under the stars. Guests learned about nocturnal animals and celebrated the New Year with a spectacular firework display over the zoo",
                date: "December 31, 2024",
                participants: 75,
                image: zooNight,
            },
            {
                id: 18,
                title: "Holiday Lights Safari",
                description:
                    "The zoo transformed into a glowing winter wonderland with thousands of twinkling lights. Visitors walked through beautifully illuminated trails, enjoyed seasonal treats, and watched special animal presentations. A festive experience for the whole family.",
                date: "December 15-23, 2024",
                participants: 1250,
                image: lightsafari,
            },
            {
                id: 19,
                title: "Primate Conservation Symposium",
                description:
                    "A scientific gathering featuring top researchers discussing the latest advancements in primate conservation. Attendees gained insight into habitat preservation, behavioral studies, and efforts to combat illegal wildlife trade. The event concluded with a Q&A session with conservationists.",
                date: "November 18, 2024",
                participants: 85,
                image: primateSymposium,
            },
            {
                id: 20,
                title: "Boo at the Zoo",
                description:
                    "An annual Halloween tradition featuring trick-or-treat stations, costume contests, and spooky-themed animal presentations. Guests learned about nocturnal creatures like owls and bats, while enjoying haunted trails and glow-in-the-dark decorations throughout the zoo.",
                date: "October 29-31, 2024",
                participants: 980,
                image: boozoo,
            },
        ],
    };
    return (
        <div className="max-w-6xl mx-auto px-4 mt-28 mb-10">
            <div className="flex justify-center mb-10">
                <div className="inline-flex rounded-lg bg-gray-100 p-1">
                    <button
                        onClick={() => setActiveTab("upcoming")}
                        className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                            activeTab === "upcoming"
                                ? "bg-green-600 text-white shadow-md"
                                : "text-gray-700 hover:text-green-700"
                        }`}
                    >
                        Upcoming Events
                    </button>
                    <button
                        onClick={() => setActiveTab("completed")}
                        className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                            activeTab === "completed"
                                ? "bg-green-600 text-white shadow-md"
                                : "text-gray-700 hover:text-green-700"
                        }`}
                    >
                        Past Events
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {events[activeTab].map((event) => (
                    <div
                        key={event.id}
                        className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row border-2 border-customLightOrange"
                    >
                        <div className="md:w-1/3 relative">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-[250px] object-cover transition-transform duration-500 hover:scale-105"
                            />
                            {activeTab === "completed" && (
                                <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                                    <Check size={12} className="mr-1" /> Completed
                                </div>
                            )}
                        </div>

                        <div className="p-5 md:w-2/3 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold font-para text-white mb-3">{event.title}</h3>

                                <div className="flex items-center text-white mb-3">
                                    <Calendar size={18} className="mr-2 text-customLightOrange" />
                                    <span className="text-sm font-subhead">{event.date}</span>
                                </div>

                                {activeTab === "upcoming" && event.time && (
                                    <div className="flex items-center text-white mb-3">
                                        <Clock size={18} className="mr-2 text-customLightOrange" />
                                        <span className="text-sm font-subhead">{event.time}</span>
                                    </div>
                                )}

                                {activeTab === "completed" && (
                                    <div className="flex items-center text-gray-600 mb-3">
                                        <Users size={18} className="mr-2 text-customLightOrange" />
                                        <span className="text-sm text-white font-subhead">
                                            {event.participants} Participants
                                        </span>
                                    </div>
                                )}

                                <p className="text-white tracking-wider my-3 text-sm font-para">{event.description}</p>
                            </div>

                            {activeTab === "upcoming" && (
                                <button className="mt-2.5 inline-flex items-center justify-center font-medium  bg-white text-customeGreen w-3/12 py-2 rounded-lg hover:bg-customLightOrange hover:text-white hover:scale-102 duration-500 ease-in-out">
                                    <Link to="/eventRegister">Book Now</Link>
                                    <ChevronRight size={16} className="ml-1 hidden sm:block" />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
