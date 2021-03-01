import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"


export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)


    useEffect(() => {
        console.log("AnimalList: useEffect - getAnimals")
        getLocations()
            .then(getCustomers)
            .then(getAnimals)
    }, [])

    return (
        <div className="animals">
            {console.log("AnimalList: Render", animals)}
            {
                animals.map(animal => {
                    const customer = customers.find(cust => cust.id === animal.customerId)
                    const location = locations.find(l => l.id === animal.locationId)
                    return <AnimalCard key={animal.id}
                        animal={animal}
                        location={location}
                        customer={customer} />
                })
            }
        </div>
    )
}