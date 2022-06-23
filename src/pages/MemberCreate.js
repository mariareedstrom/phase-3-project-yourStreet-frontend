import React from "react";
import MemberForm from "../components/MemberForm";
import { useLocation, useHistory} from "react-router-dom";

const SERVER_API = process.env.REACT_APP_SERVER_API;

function MemberCreate(){
    const location = useLocation()
    const {householdId} = location.state
    const history = useHistory()

    if (!householdId) {
        throw "household_id is required"
    }

    function onSubmit(member){
        return fetch(`${SERVER_API}/members`, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(member)
            })
            .then(_ => {
                history.push(`/households/${householdId}`)
            })
    }

   const member = {
       first_name: "",
       last_name: "",
       age: "",
       profession: "",
       household_id: householdId,
   }

    return (
        <MemberForm onSubmit={onSubmit} member={member} />
    )
}

export default MemberCreate