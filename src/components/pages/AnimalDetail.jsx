import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AnimalDetail = () => {
    const { id } = useParams();
    const [animal, setAnimal] = useState(null);

    const statusColors = {
        "critically endangered": "text-red-700",
        endangered: "text-red-500",
        vulnerable: "text-orange-600",
    };

    useEffect(() => {
        const fetchAnimalDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:2000/animals/${id}`);
                setAnimal(response.data);
            } catch (error) {
                console.error("Error fetching animal details:", error);
            }
        };

        fetchAnimalDetails();
    }, [id]);

    if (!animal) return null;

    return (
        <div className="container mx-auto px-4 py-8 max-w-8xl mt-28">
            <div className="w-full  shadow-lg rounded-lg overflow-hidden border-2 border-white">
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-3xl  font-subhead text-customLightOrange mb-2">{animal.name}</h1>
                    <p className="text-white italic">{animal.scientificName || "Scientific Name Not Available"}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 p-6">
                    <div>
                        <h2 className="text-xl font-semibold text-customLightOrange mb-4 border-customeWhite border-b pb-2 font-para">
                            Animal Details
                        </h2>
                        <div className="space-y-3">
                            {[
                                {
                                    label: "Status",
                                    value: animal.status,
                                    isStatus: true,
                                },
                                { label: "Height", value: animal.height },
                                { label: "Weight", value: animal.weight },
                                { label: "Habitat", value: animal.habitat },
                                { label: "Places", value: animal.places },
                                { label: "Population", value: animal.population },
                            ].map((detail, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between border-white border-b pb-2 last:border-b-0 font-subhead"
                                >
                                    <span className="font-medium text-white">{detail.label}:</span>
                                    <span
                                        className={` ${
                                            detail.isStatus
                                                ? statusColors[detail.value.toLowerCase()] || "text-white"
                                                : "text-white"
                                        }`}
                                    >
                                        {detail.value || "Not Available"}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold font-para text-customLightOrange border-customeWhite mb-4 border-b pb-2">
                            Description
                        </h2>
                        <p className="text-white font-para leading-relaxed">
                            {animal.description || "No description available."}
                        </p>
                    </div>
                </div>

                {animal.moreImg && animal.moreImg.length > 0 && (
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-customLightOrange font-para mb-4 border-white border-b pb-2">
                            Gallery
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {animal.moreImg.map((img, index) => (
                                <div key={index} className="overflow-hidden rounded-lg">
                                    <img
                                        src={img}
                                        alt={`${animal.name} ${index + 1}`}
                                        className="w-full h-48 object-cover cursor-pointer hover:scale-103 duration-500 ease-in-out"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AnimalDetail;
