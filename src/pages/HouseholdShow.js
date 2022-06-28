import React, { useEffect, useState} from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import {
    Card,
    CardContent,
    Box,
    Typography,
    Button,
    Grid,
    CardActions,
    List,
    ListItem,
    IconButton,
    ListItemText
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'

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


    function refreshHousehold(key, id) {
        const data = household[key].filter((item) => item.id !== id)
        setHousehold({...household, [key]: data})
    }

    function deleteMember(id) {
        fetch(`${SERVER_API}/members/${id}`, {
            method: "DELETE"
        })
            .then(_ => refreshHousehold("members", id))
    }

    function deleteLocation(id) {
       return fetch(`${SERVER_API}/locations/${id}`, {
            method: "DELETE"
        })
           .then(_ => refreshHousehold("locations", id))
    }

    return (
        <Box sx={{width: "100%"}} >
            <Typography component="h2" variant="h4" gutterBottom sx={{marginTop: '16px'}}>
                Welcome to the {household.family_name}
            </Typography>

            <article>
                <Typography component="h3" variant="h5" gutterBottom sx={{marginTop: '16px'}}>
                    Here lives
                </Typography>
                <Grid container spacing={2} sx={{marginBottom: '16px'}}>
                    {
                        household.members.map((member) => {
                            return (
                                <Grid item key={member.id} >
                                    <Card sx={{minWidth: "175px"}}>
                                        <CardContent>

                                            <Typography component="h4" variant="h6" gutterBottom >
                                                <span style={{marginRight: "8px"}}>
                                                    {member.first_name} {member.last_name}
                                                </span>
                                                <Typography component="span" color="text.secondary">
                                                    {member.age}
                                                </Typography>
                                            </Typography>

                                            <Typography variant="body2" sx={{minHeight: "50px"}}>
                                                {member.first_name}'s profession is {member.profession}.
                                            </Typography>


                                            <CardActions sx={{justifyContent: "end"}}>
                                                <Button onClick={() => deleteMember(member.id)}>Delete</Button>
                                                <Button component={Link} to={`/members/${member.id}/edit`}>Edit</Button>
                                            </CardActions>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    }


                </Grid>

                <footer style={{textAlign: "end"}}>
                    <Button variant="outlined" component={Link} to={{pathname: '/members/new', state: {householdId: householdId}}}>add a member</Button>
                </footer>
            </article>

            <List dense={true}>

                <Typography component="h3" variant="h5">
                    Our homes
                </Typography>
                {
                    household.locations.map((location) => {
                        return (
                            <ListItem
                                secondaryAction={

                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteLocation(location.id)}>
                                        <DeleteIcon />
                                    </IconButton>

                                } key={location.id} >
                                <ListItemText
                                    primaryTypographyProps={{component: 'h4', variant: "h6"}}
                                    primary={location.name}
                                    secondaryTypographyProps={{component: 'div'}}
                                    secondary={
                                        <>
                                            {location.address}
                                            <div>
                                                <Link to={`/neighborhoods/${location.neighborhood_id}`}>
                                                    Neighborhood
                                                </Link>
                                            </div>
                                        </>
                                    }
                                />
                            </ListItem>

                        )
                    })
                }
                <footer style={{ textAlign: "end" }}>
                    <Button variant="outlined" component={Link} to={{pathname: '/locations/new', state: {householdId: householdId}}}>
                        Add a home
                    </Button>

                </footer>

            </List>
        </Box>
    )
}

export default HouseholdShow