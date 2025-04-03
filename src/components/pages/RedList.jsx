import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RedList = () => {
    const [threatenedAnimals, setThreatenedAnimals] = useState([]);

    useEffect(() => {
        axios
            .get("https://backend-zoo.onrender.com/animals")
            .then((response) => setThreatenedAnimals(response.data)) 
            .catch((error) => console.error("Error fetching animals:", error));
    }, []);

    return (
        <div className="grid sm:grid-cols-2  md:grid-cols-3  xl:grid-cols-4  gap-5 px-8 mt-28 mb-5">
            {threatenedAnimals.map((animal) => (
                <Link key={animal._id} to={`/animal/${animal._id}`}>
                    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-md h-[300px] mx-auto group hover:scale-102 duration-500 ease-in-out">
                        <img src={animal.image} alt={animal.name} className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/40 to-transparent opacity-30 transition-opacity duration-500 group-hover:opacity-80"></div>
                        <div className="absolute inset-0 flex flex-col justify-end px-8 pb-8 opacity-0 group-hover:opacity-100 hover:scale-105 ease-in-out duration-500">
                            <h3 className="text-3xl text-center font-bold text-white">{animal.name}</h3>
                            <p className="text-sm text-center leading-6 text-gray-300">{animal.status}</p>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
};

export default RedList;
