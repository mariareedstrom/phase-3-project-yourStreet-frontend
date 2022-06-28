import React from "react";
import {FormControl, Select, MenuItem, InputLabel} from "@mui/material";


function NeighborhoodSelector({neighborhoods, onSubmit}){

    function handleSelectNeighborhood(e){
        const selected = neighborhoods.find(n => n.id === parseInt(e.target.value))
        onSubmit(selected)
    }

   return(
       <FormControl fullWidth>
           <InputLabel id="neighborhood-label">View A Neighborhood</InputLabel>
           <Select
               labelId="neighborhood-label"
               name="neighborhood_id"
               label="Select a neighborhood"
               onChange={handleSelectNeighborhood}
           >
               {neighborhoods.map(n => <MenuItem value={n.id} key={n.id}>{n.name}</MenuItem>)}
           </Select>
       </FormControl>

   )

}

export default NeighborhoodSelector;