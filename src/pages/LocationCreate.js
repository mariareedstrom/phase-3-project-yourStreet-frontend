import React, {useEffect, useState} from "react";
import NewLocationForm from "../components/NewLocationForm";
import { useLocation, useHistory} from "react-router-dom";

const SERVER_API = process.env.REACT_APP_SERVER_API;

function LocationCreate(){
    const [neighborhoods, setNeighborhoods] = useState([])
    const location = useLocation()
    const {householdId} = location.state
    const history = useHistory()

    useEffect(() => {
            fetch(`${SERVER_API}/neighborhoods`)
                .then(res => res.json())
                .then(setNeighborhoods)
        }, []
    )

    function onSubmit(newL){
        return fetch(`${SERVER_API}/locations`, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(newL)
            })
            .then(res => res.json())
            .then(_data => {
                history.push(`/households/${householdId}`)
            })
    }

    return (
        <NewLocationForm onSubmit={onSubmit} householdId={householdId} neighborhoods={neighborhoods}/>
    )
}

export default LocationCreate