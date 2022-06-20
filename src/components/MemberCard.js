import React from "react";

function MemberCard({memberInfo}){
const { first_name, last_name, age, profession } = memberInfo


    return(
    <div>
        <h4>{last_name}, {first_name}</h4>
        <h5>age: {age}</h5>
        <p>profession: {profession}</p>
    </div>
    )
}

export default MemberCard