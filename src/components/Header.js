import React from "react";
import {Link} from 'react-router-dom'
import {Box, AppBar, Typography, Toolbar, Avatar} from "@mui/material";

function Header({user}){
    return(
        <AppBar position="static">
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Box display={"flex"} gap="16px">
                    <Link to={'/'}>
                        <img src="/houselogo-cont.png" alt="logo"/>
                    </Link>
                    <h1 className="title">your street</h1>
                </Box>

                <Link to={`/households/${user.household_id}`}>
                    <Avatar alt={`${user.first_name} ${user.last_name}`} src="/avatar.jpg" />
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header