import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import {Button, Typography, TextField, InputLabel, Select, MenuItem, Box} from "@mui/material";


function NewLocationForm({onSubmit, householdId, neighborhoods}){
    const [locationFormData, setLocationFormData] = useState({
        name: "",
        address: "",
        household_id: householdId,
        neighborhood_id: ''
    })

    if (!locationFormData.household_id) {
        throw "household_id is required"
    }

const history = useHistory()

    function handleFormChange(e){
        setLocationFormData({... locationFormData, [e.target.name]: e.target.value})
    }

    function handleFormSubmit(e){
        e.preventDefault()
        onSubmit(locationFormData).then(() => {
              setLocationFormData(
                  {
                      name: "",
                      address: "",
                      household_id: householdId,
                      neighborhood_id: ''
                  })
        })
    }

    function handleFormCancel(e){
        history.push(`/households/${householdId}`)
    }


    return (
        <Box
            component= "form"
            onSubmit={handleFormSubmit}
            maxWidth="600px"
            width="100%"
        >
            <Typography gutterBottom component="h2" variant="h4">
                Add a new home
            </Typography>

            <InputLabel id="neighborhood-label">Select a neighborhood</InputLabel>
            <Select
                labelId="neighborhood-label"
                name="neighborhood_id"
                label="Select a neighborhood"
                value={locationFormData.neighborhood_id}
                onChange={handleFormChange}
                margin="dense"
                fullWidth
                >
                {neighborhoods.map(n => <MenuItem value={n.id} key={n.id}>{n.name}</MenuItem>)}
            </Select>

            <TextField
                required
                type="text"
                id="outlined-basic"
                label="Name"
                name="name"
                aria-label="location_name"
                value={locationFormData.name}
                onChange={handleFormChange}
                margin="dense"
                fullWidth
            ></TextField>

            <TextField
                required
                type="text"
                id="outlined-basic"
                label="Address"
                name="address"
                aria-label="address"
                value={locationFormData.address}
                onChange={handleFormChange}
                margin="dense"
                fullWidth
            ></TextField>

            <input
                type="hidden"
                name="household_id"
                value={locationFormData.household_id}
                onChange={handleFormChange}
            ></input>

            <Box component="footer" display="flex" justifyContent="end" gap={1} margin={1}>
                <Button variant="outlined" type="submit" >
                    Submit
                </Button>
                <Button variant="contained" onClick={handleFormCancel} >
                    Cancel
                </Button>`
            </Box>

            </Box>

    )
}

export default NewLocationForm