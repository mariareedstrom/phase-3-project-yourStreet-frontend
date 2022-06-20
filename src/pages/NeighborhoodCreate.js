import React from "react";
import NewNeighborhoodForm from "../components/NewNeighborhoodForm";

function NeighborhoodCreate(){
    const SERVER_API = process.env.REACT_APP_SERVER_API;

function onSubmit(newN){
    console.log(newN)
    fetch(`${SERVER_API}/neighborhoods`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(newN)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}


    return(
        <NewNeighborhoodForm onSubmit={onSubmit}/>
    )
}

export default NeighborhoodCreate