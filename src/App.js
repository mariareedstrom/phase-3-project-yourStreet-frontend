
import {useEffect, useState} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import { Container } from "@mui/material";

import Header from "./components/Header";

import NeighborhoodShow from "./pages/NeighborhoodShow";
import PageIndex from "./pages/PageIndex";
import NeighborhoodCreate from "./pages/NeighborhoodCreate"
import HouseholdCreate from "./pages/HouseholdCreate";
import LocationCreate from "./pages/LocationCreate";
import HouseholdShow from "./pages/HouseholdShow";
import MemberCreate from "./pages/MemberCreate";
import MemberEdit from "./pages/MemberEdit";

const SERVER_API = process.env.REACT_APP_SERVER_API;

function App() {
    const [user, setUser] = useState(null)

    // I don't have "user", so I fake it
    useEffect(() => {
        fetch(`${SERVER_API}/members?first_name=Phil&last_name=Dunphy`)
            .then(res => res.json())
            .then((members) => setUser(members[0]))
        }, []
    )

    if (!user) return;

    return (
        <main className="App" style={{height: "100vh", display: "flex", flexDirection: "column"}}>
            <Header user={user}/>
            <Container maxWidth="lg" sx={{height: "100%", display: "flex", gap: "16px", alignItems:"start"}}>
                <Switch>
                    <Route exact path = '/neighborhoods/new'>
                        <NeighborhoodCreate />
                    </Route>
                    <Route exact path ='/neighborhoods/:id' >
                        <NeighborhoodShow  />
                    </Route>
                    <Route exact path ='/households/new' >
                        <HouseholdCreate  />
                    </Route>
                    <Route exact path = '/households/:id'>
                        <HouseholdShow />
                    </Route>
                    <Route exact path = '/locations/new'>
                        <LocationCreate />
                    </Route>
                    <Route exact path = '/members/new'>
                        <MemberCreate />
                    </Route>
                    <Route exact path = '/members/:id/edit'>
                        <MemberEdit />
                    </Route>
                    <Route path ='/'>
                        <PageIndex />
                    </Route>
                    <Route>
                        <Redirect to='/' />
                    </Route>
                </Switch>
            </Container>

        </main>
    );
}


export default App;
