import React, { useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Box, Button, Card, CardActions, CardContent, Grid, Typography} from '@mui/material'

const SERVER_API = process.env.REACT_APP_SERVER_API;

function NeighborhoodShow(){
    const [neighborhood, setNeighborhood] = useState({})
    const [isLoaded, setIsLoaded] = useState(null)

    const neighborhoodId = useParams().id

    useEffect(() => {
        fetch(`${SERVER_API}/neighborhoods/${neighborhoodId}`)
            .then(res => res.json())
            .then((data) => {
                setNeighborhood(data)
                setIsLoaded(true)
            })
    }, [neighborhoodId])

    if(!isLoaded) return <h3>Loading...</h3>

    return (
        <Box sx={{width: "100%"}} >
            <Typography component="h2" variant="h4" sx={{margin: "16px 0"}}>
                Welcome to the {neighborhood.name} neighborhood page
            </Typography>
            <Grid container spacing={2} sx={{marginBottom: '16px'}}>
            {
                neighborhood.locations.map((l) => {
                return (
                    <Grid item key={l.id} >
                        <Card sx={{minWidth: "175px"}}>
                            <CardContent>
                                <Typography component="h4" variant="h6" gutterBottom>
                                                <span style={{marginRight: "8px"}}>
                                                    {l.household.family_name}
                                                </span>
                                </Typography>

                                <Typography variant="body2" sx={{minHeight: "50px"}}>
                                    {l.address}
                                </Typography>

                                <CardActions sx={{justifyContent: "end"}}>
                                    <Button component={Link} to={`/households/${l.household.id}`}>View Details</Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
            </Grid>
        </Box>
    )

}

export default NeighborhoodShow