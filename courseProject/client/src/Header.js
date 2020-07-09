import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class Header extends Component {
    render() {
        return (
            <Grid item style={{ background: "#f1f1f1" }}>
                <h2>Header Here </h2>
            </Grid>
        );
    }
}

export default Header;
