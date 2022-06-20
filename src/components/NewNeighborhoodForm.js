import React, {useState} from "react";

function NewNeighborhoodForm({onSubmit}) {
const [formData, setFormData] = useState({
    name: ""
})
    function handleFormChange(e){
        setFormData({ name: e.target.value });
    }

    function handleSubmitForm(e){
        e.preventDefault()
        onSubmit(formData)
    }

    return(
        <form onSubmit={handleSubmitForm}>
            <label>Neighborhood Name</label>
            <input
            type="text"
            name="name"
            aria-label="name"
            value={formData.name}
            onChange={handleFormChange}
            ></input>
        </form>

    )
}

export default NewNeighborhoodForm