import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { LocationContext } from '../location/LocationProvider'
import { EmployeeContext } from './EmployeeProvider'

export const EmployeeForm = () => {
    const { addEmployee, getEmployeeById, updateEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0
    })

    const [isLoading, setIsLoading] = useState(true)
    const { employeeId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = e => {
        const newEmployee = { ...employee }
        let selectedVal = e.target.value

        if (e.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newEmployee[e.target.id] = selectedVal
        setEmployee(newEmployee)
    }

    const handleClickSave = e => {
        e.preventDefault()

        if (employee.locationId === 0) {
            window.alert("Please select a location")
        } else {
            setIsLoading(true)
            if (employeeId) {
                updateEmployee(employee)
                    .then(() => history.push(`/employees/detail/${employee.id}`))
            } else {
                addEmployee(employee)
                    .then(() => history.push(`/employees`))
            }
        }
    }

    useEffect(() => {
        getLocations()
            .then(() => {
                if (employeeId) {
                    getEmployeeById(employeeId)
                        .then(employee => {
                            setEmployee(employee)
                            setIsLoading(false)
                        })
                } else { 
                    setIsLoading(false)
                }
            })
    }, [])

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">{employeeId ? "Edit" : "Add"} Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee Name" value={employee.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                   <label htmlFor="locationId">Assign to location:</label>
                   <select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={handleClickSave}>
                {employeeId ? "Save" : "Add"} Employee
            </button>
        </form>
    )

}