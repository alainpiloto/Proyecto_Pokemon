import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Route404 from "../views/404"
import Home from "../views/Home";
import PokeDetailsPage from "../views/PokeDetailsPage";
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                  
                    <Home />
                </Route>
                <Route path="/pokemon/:id">
                    <PokeDetailsPage/>
                </Route>
                <Route>
                    <Route404 />
                </Route>
            </Switch>
        </Router>
    )
}
export default Routes;