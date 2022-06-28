import React, { useEffect, useState} from "react";
import {useHistory, Link} from "react-router-dom";

import { Box } from "@mui/material";

import NeighborhoodSelector from "../components/NeighborhoodSelector";

const SERVER_API = process.env.REACT_APP_SERVER_API;

function PageIndex(){
    const [neighborhoods, setNeighborhoods] = useState([])
    const history = useHistory();


    const onSubmit = ({id}) => {
        history.push(`/neighborhoods/${id}`)
    }

    useEffect(() => {
            fetch(`${SERVER_API}/neighborhoods`)
                .then(res => res.json())
                .then(setNeighborhoods)
        }, []
    )

    return(
        <>
            <Box sx={{flex: 1, maxInlineSize: "50%", alignSelf: "center"}}>
                <NeighborhoodSelector neighborhoods={neighborhoods} onSubmit={onSubmit} />
            </Box>
            <Box sx={{flex: 1, maxInlineSize: "50%", alignSelf: "center"}}>
                <img src="houselogo.png" alt="logo" style={{width: "100%"}}/>
            </Box>
        </>
    )

}

export default PageIndex