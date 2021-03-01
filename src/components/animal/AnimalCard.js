import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, customer, location }) => {
    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <p className="animal__breed">{animal.breed}</p>
            <p className="animal__location">Location: {location.name}</p>
            <p className="animal__customer">Customer: {customer.name}</p>

        </section>
    )
}