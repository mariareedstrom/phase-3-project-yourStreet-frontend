import React from "react";
import {useState} from "react";


function NeighborhoodSelector({neighborhoods, onSubmit}){
    const [selectedNeighborhood, setSelectedNeighborhood] = useState({})

    function handleSelectNeighborhood(e){
        const selected = neighborhoods.find(n => n.name === e.target.value)
        setSelectedNeighborhood(selected)
        // console.log(selected)
    }

    function handleSubmit(e){
        e.preventDefault()
        // console.log(selectedNeighborhood)
        onSubmit(selectedNeighborhood)
    }

   return(
       <form onSubmit={handleSubmit}>
           <label> Neighborhood:
                <select name="neighborhood_id"
                        value={selectedNeighborhood.name}
                        onChange={handleSelectNeighborhood}>
                    <option>Select a neighborhood</option>
                    {neighborhoods.map(n => <option value={n.name} key={n.id}>{n.name}</option>)}
                 </select>
            </label>
           <input type="submit" value="Search"/>
       </form>
   )

}

export default NeighborhoodSelector;