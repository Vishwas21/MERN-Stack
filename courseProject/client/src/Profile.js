import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import { callAPI } from "./services";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { profiles: [] };
    }

    componentDidMount() {
        callAPI(
            "profile/all",
            "get",
            data => {
                this.setState({ profiles: data.data });
            },
            () => {
                console.log("Error!");
            }
        );
    }

    render() {
        let { profiles } = this.state;
        return (
            <React.Fragment>
                <Grid
                    container
                    style={{
                        height: "90vh",
                        width: "100%",
                        paddingLeft: "10px",
                    }}
                >
                    {!(profiles.length > 0) && (
                        <Grid
                            item
                            container
                            direction='column'
                            justify='center'
                            alignItems='center'
                        >
                            <Grid item>
                                <Typography variant='h4'>
                                    Please wait while we load the profiles ...
                                </Typography>
                            </Grid>
                        </Grid>
                    )}
                    {profiles.length > 0 && (
                        <Grid
                            item
                            container
                            direction='row'
                            style={{ padding: "20px" }}
                        >
                            {profiles.map((profile, index) => {
                                return (
                                    <Grid
                                        item
                                        container
                                        direction='column'
                                        xs={2}
                                        key={`${profile.user.name}-${index}`}
                                    >
                                        <Grid item>
                                            <img
                                                src={profile.user.avatar}
                                            ></img>
                                        </Grid>
                                        <Grid item>{profile.user.name}</Grid>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    )}
                </Grid>
            </React.Fragment>
        );
    }
}

export default Profile;
