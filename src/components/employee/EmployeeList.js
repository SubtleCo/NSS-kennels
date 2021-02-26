import React, { useContext, useEffect } from 'react'
import { EmployeeCard } from './EmployeeCard'
import { EmployeeContext } from './EmployeeProvider'

export const EmployeeList = () => {
    const {employees, getEmployees} = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div className="employees">
            {
                employees.map(employee => <EmployeeCard key={employee.id} employee={employee} />)
            }
        </div>
    )
}