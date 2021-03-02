import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { LocationContext } from './LocationProvider'

export const LocationForm = () => {
    const { addLocation, updateLocation, getLocationById } = useContext(LocationContext)

    const [location, setLocation] = useState({
        name: "",
        address: ""
    })

    const [isLoading, setIsLoading] = useState(true)
    const { locationId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = e => {
        const newLocation = { ...location }
        let selectedVal = e.target.value
        newLocation[e.target.id] = selectedVal
        setLocation(newLocation)
    }

    const handleClickSave = e => {
        e.preventDefault()
        setIsLoading(true)
        if (locationId) {
            updateLocation(location)
                .then(() => history.push(`/locations/detail/${location.id}`))
        } else {
            addLocation(location)
                .then(() => history.push(`/locations`))
        }
    }

    useEffect(() => {
        if (locationId) {
            getLocationById(locationId)
                .then(location => {
                    setLocation(location)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">{locationId ? "Edit" : "Add"} Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location Name" value={location.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Location Address:</label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location Address" value={location.address} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={handleClickSave}>
                {locationId ? "Save Location" : "Add Location"}
            </button>
        </form>
    )
}