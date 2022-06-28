import React, {useEffect} from "react";
import MemberInput from "./MemberInput";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {Typography, Box, Button} from "@mui/material";


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

    const history = useHistory()

    function handleChangeMember(e) {
        const key = e.target.name.replace("member[0].", "")
        setMemberFormData({...memberFormData, [key]: e.target.value});
    }

    function handleFormSubmit(e){
        e.preventDefault()
        onSubmit(memberFormData)
    }

    function handleFromCancel(e){
        history.push(`/households/${memberFormData.household_id}`)
    }

    return (
        <Box
            component="form"
            onSubmit={handleFormSubmit}
            maxWidth="600px"
            width="100%"
        >
            <Typography gutterBottom component="h2" variant="h4">
                Add a new household member
            </Typography>

            <MemberInput onChange={handleChangeMember} value={memberFormData} index={0}/>

            <Box component="footer" display="flex" justifyContent="end" gap={1} margin={1}>
                <Button variant="outlined" type="submit" >
                    Submit
                </Button>
                <Button variant="contained" onClick={handleFromCancel} >
                    Cancel
                </Button>
            </Box>


        </Box>
    )
}

export default MemberForm