import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Grid
                item
                container
                style={{ background: "#fff", padding: "10px 20px" }}
                justify='flex-end'
                spacing={4}
            >
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
