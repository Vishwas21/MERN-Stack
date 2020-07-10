import React, { Component } from "react";
import { get, callAPI } from "./services";
import { Grid, Typography } from "@material-ui/core";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = { waiting: true, authorised: false };
    }

    componentDidMount() {
        let authToken = get("auth");
        if (!authToken) {
            this.setState({ waiting: false, authorised: false });
            return;
        }
        callAPI(
            "auth",
            "get",
            () => {
                this.setState({ waiting: false, authorised: true });
            },
            () => {
                this.setState({ waiting: false, authorised: false });
            }
        );
    }

    render() {
        let { waiting, authorised } = this.state;
        return (
            <React.Fragment>
                {waiting && (
                    <Grid
                        container
                        justify='center'
                        alignItems='center'
                        style={{ height: "100vh", width: "100%" }}
                    >
                        <Grid item>
                            <Typography variant='h4'>
                                Please wait while we check you authorization
                            </Typography>
                        </Grid>
                    </Grid>
                )}
                {!waiting && !authorised && (
                    <Grid
                        container
                        justify='center'
                        alignItems='center'
                        style={{ height: "100vh", width: "100%" }}
                    >
                        <Grid item>
                            <Typography variant='h4'>
                                Sorry!! We could not authorise you mate. Sign In
                                again maybe?
                            </Typography>
                        </Grid>
                    </Grid>
                )}
                {!waiting && authorised && this.props.children}
            </React.Fragment>
        );
    }
}

export default Auth;
