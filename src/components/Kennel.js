import React from "react"
import "./Kennel.css"
export const Kennel = () => {
    let testString = "abcde"
    let testArray = testString.split("")
    return (
        <>
            <h2>Nashville Kennels</h2>
            {testArray.map(item => <h4>This is a letter: {item}</h4>)}
            <small>Loving care when you're not there.</small>
            <address>
                <div>Visit Us at the Nashville North Location</div>
                <hr></hr>
                <div>500 Puppy Way</div>
            </address>
        </>
    )
}
