import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Cockpit from "./Cockpit";
import Servers from "./Servers";
import Example from "./Example";
import Signup from "./Signup";

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
            <React.Fragment>
                {/* <div className='App'>
                    <h4>Here it is :)</h4>
                    <div>
                        Vishwas Here! I will be using an expression here 10 * 10
                        = {this.multiply(22, 23)}
                    </div>

                    <div>
                        <Home />
                    </div>
                </div>
                <div>
                    <Cockpit />
                </div>
                <div>
                    <Servers />
                </div> */}
                {/* <Example /> */}

                <Signup />
            </React.Fragment>
        );
    }
}
// Class Component -------------------------------------------------

export default App;
