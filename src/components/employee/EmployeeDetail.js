import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { EmployeeContext } from './EmployeeProvider'

export const EmployeeDetail = () => {
    const { getEmployeeById, deleteEmployee } = useContext(EmployeeContext)
    const { employeeId } = useParams()
    const history = useHistory()
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        getEmployeeById(employeeId)
            .then(setEmployee)
    }, [])

    const handleDelete = () => {
        deleteEmployee(employee.id)
        .then(() => history.push(`/employees`))
    }

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">{employee.location?.name}</div>
            <button onClick={() => {
                history.push(`/employees/edit/${employee.id}`)
            }}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </section>
    )
}