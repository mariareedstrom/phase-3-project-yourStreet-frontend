import React, { useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'

const SERVER_API = process.env.REACT_APP_SERVER_API;

function HouseholdShow(){
    const [household, setHousehold] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)
    const householdId = useParams().id

    useEffect(() => {
        fetch(`${SERVER_API}/households/${householdId}`)
            .then(res => res.json())
            .then(data => {
                setHousehold(data)
                setIsLoaded(true)
            })
        },[householdId])

    if(!isLoaded) return <h3>Coming soon</h3>

    return(
        <div>
            <header>
                <h3>{household.family_name}</h3>
            </header>
            <article>
                <header>
                    <h4>Members </h4>
                </header>
                {
                    household.members.map( (member)=> {
                        return (
                            <section key={member.id}>
                                <h5>
                                    <span>{member.first_name}</span>
                                    <span>{member.last_name}</span>
                                </h5>
                                {(member.age) ? <span>age {member.age}</span> : ""}
                                {(member.profession) ? <div>{member.profession}</div> : ""}
                            </section>
                        )
                    })
                }
            </article>
            <aside>
                <header>
                    <h4>Homes </h4>
                </header>
                {
                    household.locations.map((location) => {
                        return (
                            <section key={location.id}>
                                <h5>{location.name}</h5>
                                <div>{location.address}</div>
                            </section>
                        )
                    })
                }
                <footer>
                    <Link to={{pathname: '/locations/new', state: {householdId: householdId}}} >
                        Add a home
                    </Link>
                </footer>

            </aside>

        </div>
    )
}

export default HouseholdShow