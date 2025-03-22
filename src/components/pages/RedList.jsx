import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RedList = () => {
    const [threatenedAnimals, setThreatenedAnimals] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:2000/animals")  
            .then(response => setThreatenedAnimals(response.data)) // No filtering
            .catch(error => console.error("Error fetching animals:", error));
    }, []);

    return (
        <div>
            <h2>Red List - Threatened Animals</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                {threatenedAnimals.map(animal => (
                    <Link key={animal._id} to={`/animal/${animal._id}`}>
                        <img 
                            src={animal.image} 
                            alt={animal.name} 
                            width="200px" 
                            style={{ cursor: "pointer", borderRadius: "8px" }} 
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RedList;
