import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Route404 from "../views/404"
import Home from "../views/Home";
import PokeDetailsPage from "../views/PokeDetailsPage";
const Routess = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />}>
                    </Route>
                <Route path="/pokemon/:id" element={<PokeDetailsPage/>}>
                    </Route>
                <Route path="*"element={<Route404 />}> 
                    </Route>
            </Routes>
        </Router>
    )
}
export default Routess;