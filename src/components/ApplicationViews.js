import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomerCard } from "./customer/Customer"
import { LocationCard } from "./location/Location"
import { EmployeeCard } from "./employee/Employee"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/animals">
                <AnimalCard />
            </Route>

            <Route path="/locations">
                <LocationCard />
            </Route>

            <Route path="/customers">
                <CustomerCard />
            </Route>

            <Route path="/employees">
                <EmployeeCard />
            </Route>
        </>
    )
}