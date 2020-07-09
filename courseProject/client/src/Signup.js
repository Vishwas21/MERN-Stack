import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            type: "signin",
            formFields: { name: "", email: "", pass: "" },
        };
    }

    changeType(type) {
        this.setState({ type });
    }

    // changeName(event) {
    //     this.setState({ name: event.target.value });
    // }

    changeFormFields(event, key) {
        let { formFields } = this.state;
        let tempObj = {};
        Object.assign(tempObj, formFields);
        tempObj[key] = event.target.value;
        this.setState({ formFields: tempObj });
    }

    formSubmit(event) {
        event.preventDefault();
        console.log(this.state.formFields);
    }

    render() {
        let { type, name } = this.state;
        return (
            <Grid
                container
                direction='column'
                alignItems='center'
                justify='center'
                style={{
                    height: "100vh",
                    width: "100%",
                    background: "#f1f1f1",
                }}
            >
                <Grid
                    item
                    container
                    spacing={4}
                    alignItems='center'
                    justify='center'
                    style={{ marginBottom: "2vh", width: "100%" }}
                >
                    <Grid item>
                        <Button
                            variant='outlined'
                            onClick={() => {
                                this.changeType("signup");
                            }}
                        >
                            Sign up
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant='outlined'
                            onClick={() => {
                                this.changeType("signin");
                            }}
                        >
                            Sign in
                        </Button>
                    </Grid>
                </Grid>
                {type === "signup" && (
                    <Grid
                        item
                        container
                        direction='column'
                        alignItems='center'
                        justify='center'
                        xs={5}
                        style={{ background: "white", padding: "5vh" }}
                    >
                        <form
                            style={{ width: "100%", textAlign: "center" }}
                            onSubmit={event => {
                                this.formSubmit(event);
                            }}
                        >
                            <input
                                type='text'
                                placeholder='Name'
                                value={name}
                                onChange={event => {
                                    this.changeFormFields(event, "name");
                                }}
                            />
                            <input
                                type='email'
                                placeholder='Email'
                                onChange={event => {
                                    this.changeFormFields(event, "email");
                                }}
                            />
                            <input
                                type='password'
                                placeholder='Password'
                                onChange={event => {
                                    this.changeFormFields(event, "pass");
                                }}
                            />
                            <div>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    type='submit'
                                >
                                    Sign Up!
                                </Button>
                            </div>
                        </form>
                    </Grid>
                )}

                {type === "signin" && (
                    <Grid
                        item
                        container
                        direction='column'
                        alignItems='center'
                        justify='center'
                        xs={5}
                        style={{ background: "white", padding: "5vh" }}
                    >
                        <form style={{ width: "100%", textAlign: "center" }}>
                            <input
                                type='email'
                                placeholder='Email'
                                onChange={event => {
                                    this.changeFormFields(event, "name");
                                }}
                            />
                            <input
                                type='password'
                                placeholder='Password'
                                onChange={event => {
                                    this.changeFormFields(event, "pass");
                                }}
                            />
                            <div>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    type='submit'
                                >
                                    Sign In!
                                </Button>
                            </div>
                        </form>
                    </Grid>
                )}
            </Grid>
        );
    }
}

export default Signup;
