import React, {useEffect, useState } from "react";
import MemberForm from "../components/MemberForm";
import { useParams, useHistory } from "react-router-dom";

const SERVER_API = process.env.REACT_APP_SERVER_API;

function MemberEdit(){
    const memberId = useParams().id
    const history = useHistory()


    const [member, setMember] = useState({
        first_name: "",
        last_name: "",
        age: "",
        profession: "",
        household_id: null,
        id: null
    })

    useEffect(() => {
        fetch(`${SERVER_API}/members/${memberId}`)
            .then(res => res.json())
            .then((data) => setMember(data))
    }, [memberId])

    function onSubmit(member){
        return fetch(`${SERVER_API}/members/${member.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(member)
            })
            .then(res => res.json())
            .then(data => {
                history.push({
                    pathname: `/households/${member.household_id}`,
                    state: {
                        update: true
                    }
                })
            })
    }

    return (
        <MemberForm onSubmit={onSubmit} member={member} />
    )
}

export default MemberEdit