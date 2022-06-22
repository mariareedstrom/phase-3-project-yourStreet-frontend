import React from "react";
import {useState} from "react";


function NeighborhoodSelector({neighborhoods, onSubmit}){
    const [selectedNeighborhood, setSelectedNeighborhood] = useState({})

    function handleSelectNeighborhood(e){
        const selected = neighborhoods.find(n => n.id === parseInt(e.target.value))
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
           <label> View A Neighborhood:
                <select name="neighborhood_id"
                        value={selectedNeighborhood.id}
                        onChange={handleSelectNeighborhood}>
                    <option>Select a neighborhood</option>
                    {neighborhoods.map(n => <option value={n.id} key={n.id}>{n.name}</option>)}
                 </select>
            </label>
           <input type="submit" value="Select"/>
       </form>
   )

}

export default NeighborhoodSelector;