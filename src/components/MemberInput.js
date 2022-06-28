import React from "react"
import { TextField, Container } from '@mui/material'

function MemberInput({onChange, value, index=0}){

    return (
        <>
            <TextField
                required
                type="text"
                id="outlined-basic"
                label="First Name"
                aria-label="first-name"
                variant="outlined"
                name={`member[${index}].first_name`}

                value={value.first_name}
                onChange={onChange}
                margin="dense"
                fullWidth
            ></TextField>

            <TextField
                required
                type="text"
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                name={`member[${index}].last_name`}

                value={value.last_name}
                onChange={onChange}
                margin="dense"
                fullWidth
            ></TextField>

            <TextField

                type="text"
                id="outlined-basic"
                label="Age"
                variant="outlined"
                name={`member[${index}].age`}

                value={value.age}
                onChange={onChange}
                margin="dense"
                fullWidth
            ></TextField>

            <TextField

                type="text"
                id="outlined-basic"
                label="Profession"
                variant="outlined"
                name={`member[${index}].profession`}

                value={value.profession}
                onChange={onChange}
                margin="dense"
                fullWidth
            ></TextField>
        </>
    )
}

export default MemberInput