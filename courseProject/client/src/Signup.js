import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import axios from "axios";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            type: "signin",
            formFields: {
                name: { val: "", err: false },
                email: { val: "", err: false },
                pass: { val: "", err: false },
            },
        };
    }

    changeType(type) {
        let formFields = {
            name: { val: "", err: false },
            email: { val: "", err: false },
            pass: { val: "", err: false },
        };
        this.setState({ type, formFields });
    }

    // changeName(event) {
    //     this.setState({ name: event.target.value });
    // }

    checkError(val, key) {
        switch (key) {
            case "name":
                return !/^[a-zA-z ]+$/.test(val);
            case "email":
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    val
                );
            case "pass":
                return !(val.length >= 8);
            default:
                return false;
        }
    }

    changeFormFields(event, key) {
        this.errorStatus = this.checkError(event.target.value, key);
        let { formFields } = this.state;
        let tempObj = {};
        Object.assign(tempObj, formFields);
        tempObj[key].val = event.target.value;
        tempObj[key].err = this.errorStatus;
        this.setState({ formFields: tempObj });
    }

    formSubmit(event) {
        event.preventDefault();
        console.log(this.state.formFields);

        let { formFields, type } = this.state;
        let tempObj = {};
        tempObj.email = formFields.email.val;
        tempObj.pass = formFields.pass.val;

        if (type === "signup") {
            tempObj.name = formFields.name.val;
            axios
                .post("http://localhost:5000/api/user", tempObj)
                .then(responseData => {
                    console.log(responseData);
                })
                .catch(err => {
                    console.log(err);
                });
        } else if (type === "signin") {
            axios
                .post("http://localhost:5000/api/auth", tempObj)
                .then(responseData => {
                    console.log(responseData);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    render() {
        let { type, formFields } = this.state;
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
                    style={{ marginBottom: "1vh", width: "100%" }}
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
                            <div>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    value={formFields.name.val}
                                    onChange={event => {
                                        this.changeFormFields(event, "name");
                                    }}
                                />
                                {formFields.name.err && (
                                    <div className='errorMessage'>
                                        Please enter a valid name!
                                    </div>
                                )}
                            </div>

                            <div>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    value={formFields.email.val}
                                    onChange={event => {
                                        this.changeFormFields(event, "email");
                                    }}
                                />
                                {formFields.email.err && (
                                    <div className='errorMessage'>
                                        Please enter a valid email!
                                    </div>
                                )}
                            </div>

                            <div>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    value={formFields.pass.val}
                                    onChange={event => {
                                        this.changeFormFields(event, "pass");
                                    }}
                                />
                                {formFields.pass.err && (
                                    <div className='errorMessage'>
                                        Password must be 8 characters long!
                                    </div>
                                )}
                            </div>

                            <div>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    type='submit'
                                >
                                    <b>Sign Up</b>
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
                        <form
                            style={{ width: "100%", textAlign: "center" }}
                            onSubmit={event => {
                                this.formSubmit(event);
                            }}
                        >
                            <div>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    value={formFields.email.val}
                                    onChange={event => {
                                        this.changeFormFields(event, "email");
                                    }}
                                />
                                {formFields.email.err && (
                                    <div className='errorMessage'>
                                        Please enter a valid email!
                                    </div>
                                )}
                            </div>

                            <input
                                type='password'
                                placeholder='Password'
                                value={formFields.pass.val}
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
                                    <b>Sign In</b>
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
