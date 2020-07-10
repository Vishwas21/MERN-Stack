import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Grid
                item
                container
                style={{
                    background: "#fff",
                    padding: "10px 20px",
                    width: "100%",
                }}
                justify='flex-end'
                spacing={4}
            >
                <Grid item> Welcome, {this.props.name}</Grid>
                <Grid item>
                    <NavLink to='/' exact activeClassName='activeLink'>
                        Sign Up
                    </NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/profile' exact activeClassName='activeLink'>
                        Profile
                    </NavLink>
                </Grid>
            </Grid>
        );
    }
}

export default Header;
