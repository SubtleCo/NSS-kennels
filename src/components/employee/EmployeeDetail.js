import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { EmployeeContext } from './EmployeeProvider'

export const EmployeeDetail = () => {
    const { getEmployeeById } = useContext(EmployeeContext)
    const { employeeId } = useParams()
    const history = useHistory()
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        getEmployeeById(employeeId)
        .then(setEmployee)
    }, [])

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">{employee.location?.name}</div>
        </section>
    )
}