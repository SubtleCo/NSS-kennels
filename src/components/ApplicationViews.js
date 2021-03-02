import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { LocationForm } from "./location/LocationForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <EmployeeProvider>

                            <Route exact path="/animals">
                                <AnimalList />
                            </Route>

                            <Route path="/animals/create">
                                <AnimalForm />
                            </Route>

                            <Route path="/animals/edit/:animalId(\d+)">
                                <AnimalForm />
                            </Route>

                            <Route exact path="/animals/detail/:animalId(\d+)">
                                <AnimalDetail />
                            </Route>

                            <Route exact path="/locations">
                                <LocationList />
                            </Route>

                            <Route exact path="/locations/detail/:locationId(\d+)">
                                <LocationDetail />
                            </Route>

                            <Route exact path="/locations/edit/:locationId(\d+)">
                                <LocationForm />
                            </Route>

                            <Route path="/customers">
                                <CustomerList />
                            </Route>

                            <Route exact path="/employees">
                                <EmployeeList />
                            </Route>

                            <Route exact path="/employees/detail/:employeeId(\d+)">
                                <EmployeeDetail />
                            </Route>

                        </EmployeeProvider>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>




        </>
    )
}