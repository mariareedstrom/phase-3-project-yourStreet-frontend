import React from 'react'
import {useHistory} from "react-router-dom";
import NewHouseholdForm from "../components/NewHouseholdForm";


function HouseholdCreate(){
    const SERVER_API = process.env.REACT_APP_SERVER_API;
    const history = useHistory()

    function onSubmit(newH){




        return fetch(`${SERVER_API}/households`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newH)
        })
            .then(res => res.json())
            .then(data => history.push(`/households/${data.id}`))
    }


    return(
        <NewHouseholdForm onSubmit={onSubmit}/>

    )

}

export default HouseholdCreate