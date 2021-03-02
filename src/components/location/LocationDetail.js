import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { LocationContext } from './LocationProvider'

export const LocationDetail = () => {
    const { getLocationById } = useContext(LocationContext)
    const [location, setLocation] = useState({})
    const history = useHistory()
    const { locationId } = useParams()

    useEffect(() => {
        getLocationById(locationId)
        .then(setLocation)
    }, [])

    return (
        <section className="location">
            <h2 className="location__name">{location.name}</h2>
            <address className="location__address">{location.address}</address>
            <h4>Employees</h4>
            <p className="location__employees">
                {
                    location.employees?.map(e => e.name).join(", ")
                }
            </p>
            <h4>Current Residents</h4>
            <p className="location__animals">
                {
                    location.animals?.map(a => a.name).join(", ")
                }
            </p>
            <button onClick={() => {
                history.push(`/locations/edit/${location.id}`)
            }}>Edit</button>
        </section>
    )
}