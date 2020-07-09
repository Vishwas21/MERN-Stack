import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class MainContent extends Component {
    render() {
        return (
            <Grid item container style={{ height: "85vh" }}>
                <Grid item style={{ background: "cyan" }} xs={2}>
                    Left Menu Here!!
                </Grid>

                <Grid
                    item
                    container
                    justify='center'
                    alignItems='center'
                    style={{ background: "lightBlue" }}
                    xs={10}
                >
                    <Grid
                        item
                        style={{
                            background: "white",
                            height: "30vh",
                            width: "30vh",
                        }}
                    >
                        Center Content
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default MainContent;
