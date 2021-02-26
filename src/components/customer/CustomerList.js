import React, { useContext, useEffect } from 'react'
import { CustomerCard } from './CustomerCard'
import { CustomerContext } from './CustomerProvider'

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log('CustomerList: useEffect - getCustomers')
        getCustomers()
    }, [])

    return (
        <div className="customers">
            {
                customers.map(customer => {
                    return <CustomerCard key={customer.id} customer={customer} />
                })
            }
        </div>
    )
}