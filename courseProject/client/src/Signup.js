import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import { callAPI, set } from "./services";

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
            error: false,
            errorMessage: "",
        };
    }

    changeType(type) {
        let formFields = {
            name: { val: "", err: false },
            email: { val: "", err: false },
            pass: { val: "", err: false },
        };
        this.setState({ type, formFields, error: false, errorMessage: "" });
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

    handleSignUp(data) {
        console.log("Sign Up Successful!! Here is your Token : ", data);

        // Store the token in Local Storage
        set("auth", data.data.token);

        // Redirect to the next page
        this.props.history.push("dashboard");
    }

    handelError(err) {
        this.setState({
            error: true,
            errorMessage: "Hey, We could not log you in!",
        });
    }

    handleSignIn(data) {
        console.log("Sign In Successful!! Here is your Token : ", data);

        // Store the token in Local Storage
        set("auth", data.data.token);

        // Redirect to the next page
        this.props.history.push("dashboard");
    }

    formSubmit(event) {
        event.preventDefault();

        let { formFields, type } = this.state;
        let tempObj = {};
        tempObj.email = formFields.email.val;
        tempObj.pass = formFields.pass.val;

        if (type === "signup") {
            tempObj.name = formFields.name.val;
            callAPI(
                "user",
                "post",
                this.handleSignUp.bind(this),
                this.handelError.bind(this),
                tempObj
            );
        } else if (type === "signin") {
            callAPI(
                "auth",
                "post",
                this.handleSignIn.bind(this),
                this.handelError.bind(this),
                tempObj
            );
        }
    }

    render() {
        let { type, formFields, error, errorMessage } = this.state;
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
                        style={{
                            background: "white",
                            padding: "5vh",
                            marginBottom: "40px",
                        }}
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
                        style={{
                            background: "white",
                            padding: "5vh",
                            marginBottom: "40px",
                        }}
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
                {error && (
                    <Grid
                        item
                        container
                        justify='space-between'
                        alignItems='center'
                        className='bigError'
                    >
                        <Grid item>{errorMessage}</Grid>
                        <Grid item>
                            <Button
                                variant='outlined'
                                color='primary'
                                onClick={() => {
                                    this.setState({
                                        error: false,
                                        errorMessage: "",
                                    });
                                }}
                            >
                                Close
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        );
    }
}

export default Signup;
