import React from "react"

function MemberInput({onChange, value, index=0}){

    return (
        <>
            <label>First Name:</label>
            <input
                type="text"
                name={`member[${index}].first_name`}
                aria-label="first name"
                value={value.first_name}
                required
                onChange={onChange}
            ></input>
            <label>Last Name:</label>
            <input
                type="text"
                name={`member[${index}].last_name`}
                aria-label="last name"
                value={value.last_name}
                required
                onChange={onChange}
            ></input>
            <label>Age:</label>
            <input
                type="integer"
                name={`member[${index}].age`}
                aria-label="age"
                value={value.age}
                onChange={onChange}
            ></input>
            <label>Profession:</label>
            <input
                type="text"
                name={`member[${index}].profession`}
                aria-label="profession"
                value={value.profession}
                onChange={onChange}
            ></input>
        </>
    )
}

export default MemberInput