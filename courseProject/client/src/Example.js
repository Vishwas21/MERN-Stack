import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

class Example extends Component {
    render() {
        return (
            <Grid container direction='column'>
                <Header />

                <MainContent />

                <Footer />
            </Grid>
        );
    }
}

export default Example;
