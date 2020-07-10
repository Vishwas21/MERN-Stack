import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Cockpit from "./Cockpit";
import Servers from "./Servers";
import Example from "./Example";
import Signup from "./Signup";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

// Function Component -------------------------------------------------
// function App() {
//     return (
//         <div className='App'>
//             Vishwas Here! I will be using an expression here 10 * 10 = {18 * 15}
//         </div>
//     );
// }
// Function Component -------------------------------------------------

// Class Component -------------------------------------------------
class App extends Component {
    multiply(a, b) {
        return a * b;
    }

    render() {
        return (
            // <React.Fragment>
            //     {/* <div className='App'>
            //         <h4>Here it is :)</h4>
            //         <div>
            //             Vishwas Here! I will be using an expression here 10 * 10
            //             = {this.multiply(22, 23)}
            //         </div>

            //         <div>
            //             <Home />
            //         </div>
            //     </div>
            //     <div>
            //         <Cockpit />
            //     </div>
            //     <div>
            //         <Servers />
            //     </div> */}
            //     {/* <Example /> */}

            //     <Signup />
            // </React.Fragment>

            <Router>
                <Grid container direction='column'>
                    <Header />

                    <Switch>
                        <Route exact path='/'>
                            <Signup />
                        </Route>
                        <Route exact path='/dashboard'>
                            <Dashboard />
                        </Route>
                        <Route exact path='/profile'>
                            <Profile />
                        </Route>
                    </Switch>
                </Grid>
            </Router>
        );
    }
}
// Class Component -------------------------------------------------

export default App;
