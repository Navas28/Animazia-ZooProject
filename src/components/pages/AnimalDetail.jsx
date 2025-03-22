
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
    <div>
          <h2>{animal.name}</h2>
            <p><strong>Species:</strong> {animal.species}</p>
            <p><strong>Status:</strong> {animal.status}</p>
            <p><strong>Habitat:</strong> {animal.habitat}</p>
            <img src={animal.image} alt={animal.name} width="300px" />
    </div>
  )
}

export default AnimalDetail