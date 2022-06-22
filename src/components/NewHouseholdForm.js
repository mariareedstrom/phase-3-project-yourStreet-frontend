import React, { useState, useRef } from 'react'

function NewHouseholdMembersForm({membersFormData, onMembersUpdated}) {
    const memberList = membersFormData.map((memberFormData, index) => {
        return (
            <li key={`members[${index}]`} style={{ marginBottom: "16px" }}>
                <label>First Name:</label>
                <input
                    type="text"
                    name={`member[${index}].first_name`}
                    aria-label="first name"
                    value={memberFormData.first_name}
                    required
                    onChange={handleChangeMember}
                ></input>
                <label>Last Name:</label>
                <input
                    type="text"
                    name={`member[${index}].last_name`}
                    aria-label="last name"
                    value={memberFormData.last_name}
                    required
                    onChange={handleChangeMember}
                ></input>
                <label>Age:</label>
                <input
                    type="integer"
                    name={`member[${index}].age`}
                    aria-label="age"
                    value={memberFormData.age}
                    onChange={handleChangeMember}
                ></input>
                <label>Profession:</label>
                <input
                    type="text"
                    name={`member[${index}].profession`}
                    aria-label="profession"
                    value={memberFormData.profession}
                    onChange={handleChangeMember}
                ></input>
            </li>
        );
    });

    const memberListRef = useRef(null);

    function serializeMembers() {
        return Array.from(memberListRef.current.querySelectorAll("li")).map(
            (elem, i) => {
                return {
                    first_name: elem.querySelector(`[name="member[${i}].first_name"]`).value,
                    last_name: elem.querySelector(`[name="member[${i}].last_name"]`).value,
                    age: elem.querySelector(`[name="member[${i}].age"]`).value,
                    profession: elem.querySelector(`[name="member[${i}].profession"]`).value
                }
            }
        );
    }

    function handleChangeMember(e) {
        // updates values
        const members = serializeMembers();
        onMembersUpdated(members);
    }

    function handleAddMember(e) {
        // adds values
        const members = serializeMembers();
        onMembersUpdated([...members, {
            first_name: "",
            last_name: "",
            age: "",
            profession: ""
        }]);
    }

    return (
        <div>
            <ul ref={memberListRef}>
                {memberList}
            </ul>

            <button type="button" onClick={handleAddMember}>
                + Add Member
            </button>
        </div>
    );
}

function NewHouseholdForm({onSubmit}){
    const [householdFormData, setHouseholdFormData] = useState({
        family_name: "",
        members: [{
            first_name: "",
            last_name: "",
            age: "",
            profession: ""
        }]
    })

    function handleFormChange(e){
        setHouseholdFormData({...householdFormData, family_name: e.target.value})
    }

    function onMembersUpdated(members){
        setHouseholdFormData({...householdFormData, members})
    }

    function handleSubmitForm(e){
        e.preventDefault()
        const members = householdFormData.members.filter(
            ({first_name, last_name}) => first_name !== "" && last_name !== ""
        );
        onSubmit({...householdFormData, members}).then(() => {
            setHouseholdFormData({
                family_name: "",
                members: [{
                    first_name: "",
                    last_name: "",
                    age: "",
                    profession: ""
                }]
            })
        })
    }

    return(
        <form onSubmit={handleSubmitForm}>
            <label>Household Name</label>
            <input
            type="text"
            name="name"
            aria-label="family name"
            value={householdFormData.family_name}
            onChange={handleFormChange}
            ></input>

            <label><h3>Members</h3></label>
            <NewHouseholdMembersForm
                membersFormData={householdFormData.members}
                onMembersUpdated={onMembersUpdated}
            />
            <button type="submit" >
                Submit
            </button>
        </form>
    )
}

export default NewHouseholdForm