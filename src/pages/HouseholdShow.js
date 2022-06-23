import React, { useEffect, useState} from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

const SERVER_API = process.env.REACT_APP_SERVER_API;

function HouseholdShow() {
    const [household, setHousehold] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)
    const householdId = useParams().id
    const {state} = useLocation()
    const {update} = state || {}

    useEffect(() => {
        fetch(`${SERVER_API}/households/${householdId}`)
            .then(res => res.json())
            .then(data => {
                setHousehold(data)
                setIsLoaded(true)
            })
    }, [householdId, update])

    if (!isLoaded) return <h3>Loading...</h3>



    function deleteMember(id) {
        fetch(`${SERVER_API}/members/${id}`, {
            method: "DELETE"
        })
            .then(_ => {
                const members = household.members.filter((member) => member.id !== id)
                setHousehold({...household, members})
            })
    }

    function deleteLocation(id) {
       return fetch(`${SERVER_API}/locations/${id}`, {
            method: "DELETE"
        })
    }

    return (
        <div>
            <header>
                <h3>Welcome to the</h3>
                <h2>{household.family_name}</h2>
            </header>
            <article>
                <header>
                    <h4>Members:</h4>
                </header>
                {
                    household.members.map((member) => {
                        return (
                            <section key={member.id}>
                                <h5>
                                    <span>{member.first_name} </span>
                                    <span>{member.last_name}</span>
                                </h5>
                                {(member.age) ? <span>age {member.age}</span> : ""}
                                {(member.profession) ? <div>{member.profession}</div> : ""}
                                <a href="#" onClick={() => deleteMember(member.id)}>Delete</a>
                                <Link to={`/members/${member.id}/edit`}>Edit</Link>
                            </section>
                        )
                    })
                }
                <footer>
                    <Link to={{pathname: '/members/new', state: {householdId: householdId}}}>
                        Add a Member
                    </Link>
                </footer>
            </article>
            <aside>
                <header>
                    <h4>Our homes</h4>
                </header>
                {
                    household.locations.map((location) => {
                        return (
                            <section key={location.id}>
                                <h5>{location.name}</h5>
                                <div>{location.address}</div>
                                <button onClick={() => deleteLocation(location.id)}>Delete</button>
                            </section>

                        )
                    })
                }
                <footer>
                    <Link to={{pathname: '/locations/new', state: {householdId: householdId}}}>
                        Add a home
                    </Link>
                </footer>

            </aside>

        </div>
    )
}

export default HouseholdShow