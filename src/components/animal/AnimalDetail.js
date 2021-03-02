import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { AnimalContext } from './AnimalProvider'

export const AnimalDetail = () => {
    const { getAnimalById, deleteAnimal } = useContext(AnimalContext)

    const [animal, setAnimal] = useState({})

    const { animalId } = useParams()
    const history = useHistory()

    useEffect(() => {
        console.log("useEffect", animalId)
        getAnimalById(animalId)
            .then(setAnimal)
    }, [])

    const handleRelease = () => {
        deleteAnimal(animal.id)
        .then(() => {
            history.push("/animals")
        })
    }

    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">{animal.breed}</div>
            <div className="animal__location">Location: {animal.location?.name}</div>
            <div className="animal__owner">Customer: {animal.customer?.name}</div>
            <button onClick={handleRelease}>Release Animal</button>
        </section>
    )
}