
import {Switch, Route, Redirect} from "react-router-dom";
import Header from "./components/Header";

import NeighborhoodShow from "./pages/NeighborhoodShow";
import PageIndex from "./pages/PageIndex";
import NeighborhoodCreate from "./pages/NeighborhoodCreate"

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
