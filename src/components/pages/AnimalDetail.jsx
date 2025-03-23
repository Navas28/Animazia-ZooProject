
import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const AnimalDetail = () => {
    const {id} = useParams() // Get animal ID from URL
    const [animal,setAnimal] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:2000/animals/${id}`)
            .then(response => setAnimal(response.data))
            .catch(error => console.error("Error fetching animal details:", error));
    }, [id]);

    if (!animal) return <p>Loading...</p>;

    
  return (
    <div className='bg-white mt-28'>
          <h2>{animal.name}</h2>
            <p><strong>Status:</strong> {animal.status || "Not available"} </p>
            <p><strong>Hieght:</strong> {animal.height || "Not available"}</p>
            <p><strong>Weight:</strong> {animal.weight || "Not available"}</p>
            <p><strong>Habitat:</strong> {animal.habitat || "Not available"}</p>
            <p><strong>Places:</strong> {animal.places || "Not available"}</p>
            <p><strong>Scientific Name:</strong> {animal.scientificName || "Not available"}</p>
            <p><strong>Population:</strong> {animal.population || "Not available"}</p>
            <p><strong>Description:</strong> {animal.description}</p>

            <div>
    {animal.moreImg?.map((img, index) => (
      <img key={index} src={img} alt={`${animal.name} ${index + 1}`} width="300px" />
    ))}
  </div>
    </div>
  )
}

export default AnimalDetail