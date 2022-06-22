import React, { useState } from "react";
import {useHistory} from "react-router-dom";


function NewLocationForm({onSubmit, householdId, neighborhoods}){
    const [locationFormData, setLocationFormData] = useState({
        name: "",
        address: "",
        household_id: householdId,
        neighborhood_id: ''
    })

    if (!locationFormData.household_id) {
        throw "household_id is required"
    }

    const history = useHistory()

    function handleFormChange(e){
        setLocationFormData({... locationFormData, [e.target.name]: e.target.value})
    }

    function handleFormSubmit(e){
        e.preventDefault()
        onSubmit(locationFormData).then(() => {
              setLocationFormData(
                  {
                      name: "",
                      address: "",
                      household_id: householdId,
                      neighborhood_id: ''
                  })
        })
        history.push(`/households/${householdId}`)
    }


    return (
        <form onSubmit={handleFormSubmit}>
            <label>Neighborhood</label>
            <select name="neighborhood_id"
                    value={locationFormData.neighborhood_id}
                    onChange={handleFormChange}>
                <option>Select a neighborhood</option>
                {neighborhoods.map(n => <option value={n.id} key={n.id}>{n.name}</option>)}
            </select>
            <label>Location Name</label>
            <input
                type="text"
                name="name"
                aria-label="location_name"
                value={locationFormData.name}
                onChange={handleFormChange}
            ></input>
            <label>Address: </label>
            <input
                type="text"
                name="address"
                aria-label="address"
                value={locationFormData.address}
                onChange={handleFormChange}
            ></input>
            <input
                type="hidden"
                name="household_id"
                value={locationFormData.household_id}
                onChange={handleFormChange}
            ></input>
            <button type="submit" >
                Submit
            </button>
        </form>
    )
}

export default NewLocationForm