import React, { useEffect, useState } from "react";
import MemberCard from "./MemberCard";

function HouseholdCard({household, address}){
    const [members, setMembers] = useState([])
    const SERVER_API = process.env.REACT_APP_SERVER_API;
    const {family_name, family_photo, id} = household



    useEffect(() => {
        fetch(`${SERVER_API}/members?household_id=${id}`)
            .then(resp => resp.json())
            .then((data) => setMembers(data))
    }, [household])



    return (
        <div>
            <h4>{family_name}</h4>
            <p>Address: {address}</p>
            <h5> Household Members:
            {
                members.map((member) =>
                    (
                        <MemberCard memberInfo={member} key={member.id}/>

                    )
                )
            }
            </h5>

        </div>

    )
}

export default HouseholdCard