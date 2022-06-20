import React, { useEffect, useState} from "react";
import HouseholdCard from '../components/HouseholdCard'
import {useParams} from "react-router-dom";

const SERVER_API = process.env.REACT_APP_SERVER_API;

function NeighborhoodShow(){
    const [neighborhood, setNeighborhood] = useState({})
    const [isLoaded, setIsLoaded] = useState(null)

    const neighborhoodId = useParams().id

    useEffect(() => {
        fetch(`${SERVER_API}/neighborhoods/${neighborhoodId}`)
            .then(res => res.json())
            .then((data) => {
                setNeighborhood(data)
                setIsLoaded(true)
            })
    }, [neighborhoodId])

    if(!isLoaded) return <h3>Everybody needs good neighbors, we're getting yours!</h3>

    return(
        <div>

            <h3>This is the {neighborhood.name} neighborhood page</h3>
            {neighborhood.locations.map((l) => {
                return (<HouseholdCard household={l.household} address={l.address} key={l.household.id}/>)
            })}

        </div>
    )

}

export default NeighborhoodShow