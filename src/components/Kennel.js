import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import { ApplicationViews } from "./ApplicationViews"
import { CustomerCard } from "./customer/Customer"
import { EmployeeCard } from "./employee/Employee"
import "./Kennel.css"
import { LocationCard } from "./location/Location"
import { NavBar } from "./nav/NavBar"
import { PropsAndState } from "./PropsAndState"
export const Kennel = () => {
    return (
        <>
           <NavBar />
           <ApplicationViews />
        </>
    )
}
