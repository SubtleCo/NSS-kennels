import React, { useContext, useEffect } from 'react'
import { LocationCard } from './LocationCard'
import { LocationContext } from './LocationProvider'

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="locations">
            {
                locations.map(location => <LocationCard key={location.id} location={location} />)
            }
        </div>
    )
}