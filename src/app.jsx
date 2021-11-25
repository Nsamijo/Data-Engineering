import React from "react";
import Navigation from "./components/navigation/Navigation";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/about/about";

function App() {
    return (
        <Router>
            <div className="App">
                    <Navigation/>
                <div className="Content">
                    <Switch>
                        <Route path="/About">
                            <About/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;