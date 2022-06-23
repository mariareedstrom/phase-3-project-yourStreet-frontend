
import {Switch, Route, Redirect} from "react-router-dom";
import Header from "./components/Header";

import NeighborhoodShow from "./pages/NeighborhoodShow";
import PageIndex from "./pages/PageIndex";
import NeighborhoodCreate from "./pages/NeighborhoodCreate"
import HouseholdCreate from "./pages/HouseholdCreate";
import LocationCreate from "./pages/LocationCreate";
import HouseholdShow from "./pages/HouseholdShow";
import MemberCreate from "./pages/MemberCreate";
import MemberEdit from "./pages/MemberEdit";



function App() {


  return (
    <main className="App">
        <Header />
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
    </main>
  );
}


export default App;
