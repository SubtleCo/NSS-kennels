import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { CustomerContext } from '../customer/CustomerProvider'
import { LocationContext } from '../location/LocationProvider'
import { AnimalContext } from './AnimalProvider'

export const AnimalForm = () => {
    const { addAnimal, getAnimalById, updateAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)


    const [animal, setAnimal] = useState({
        name: "",
        breed: "",
        locationId: 0,
        customerId: 0
    })

    const [isLoading, setIsLoading] = useState(true)
    const { animalId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newAnimal = { ...animal }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newAnimal[event.target.id] = selectedVal

        setAnimal(newAnimal)
    }

    const handleClickSaveAnimal = (event) => {
        event.preventDefault()

        const locationId = animal.locationId
        const customerId = animal.customerId

        if (locationId === 0 || customerId === 0) {
            window.alert("Please select a location and a customer")
        } else {
            setIsLoading(true)
            if (animalId) {
                updateAnimal(animal)
                    .then(() => history.push(`/animals/detail/${animal.id}`))
            } else {
                addAnimal(animal)
                    .then(() => history.push('/animals'))
            }
        }
    }

    useEffect(() => {
        getCustomers().then(getLocations)
            .then(() => {
                if (animalId) {
                    getAnimalById(animalId)
                        .then(animal => {
                            setAnimal(animal)
                            setIsLoading(false)
                        })
                } else {
                    setIsLoading(false)
                }
            })
    }, [])

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">{animalId ? "Edit" : "Add New"} Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Animal name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal name" value={animal.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Animal breed:</label>
                    <input type="text" id="breed" onChange={handleControlledInputChange} required className="form-control" placeholder="Animal breed" value={animal.breed} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customerId">Customer: </label>
                    <select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a customer</option>
                        {customers.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={handleClickSaveAnimal}>
                {animalId ? "Save Animal" : "Add Animal"}
            </button>
        </form>
    )
}