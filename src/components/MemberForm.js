import React, {useEffect} from "react";
import MemberInput from "./MemberInput";
import {useState} from "react";


function MemberForm({onSubmit, member}){
    const [memberFormData, setMemberFormData] = useState({
        first_name: member.first_name,
        last_name: member.last_name,
        age: member.age,
        profession: member.profession,
        household_id: member.household_id,
    })

    useEffect(() => {
        setMemberFormData({
            first_name: member.first_name,
            last_name: member.last_name,
            age: member.age,
            profession: member.profession,
            household_id: member.household_id,
            id: member.id
        })
    },[member])

    function handleChangeMember(e) {
        const key = e.target.name.replace("member[0].", "")
        setMemberFormData({...memberFormData, [key]: e.target.value});
    }

    function handleFormSubmit(e){
        e.preventDefault()
        onSubmit(memberFormData)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <MemberInput onChange={handleChangeMember} value={memberFormData} index={0}/>
            <button type="submit" >
                Submit
            </button>
        </form>
    )
}

export default MemberForm