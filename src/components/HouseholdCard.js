import React from "react";
import { Link } from "react-router-dom";
import MemberCard from "./MemberCard";



function HouseholdCard({household, address}){
    const {family_name, family_photo, id} = household




    return (
        <div>
            <Link to={`/households/${id}`}>
                <h4>{family_name}</h4>
            </Link>
            <p>Address: {address}</p>

        </div>

    )
}

export default HouseholdCard