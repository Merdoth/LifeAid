/* eslint react/jsx-indent-props:0 */
/* eslint arrow-parens:0 */
/* eslint react/no-unused-state:0 */
/* eslint space-before-function-paren:0 */
import axios from 'axios';
import React, { useState } from 'react';
import {
    CssBaseline, Grid, Paper,
    Typography, TextField, Button, Link
} from '@material-ui/core';
import useStyles from './RegisterStyle';

const RegisterPage = () => {
    const [userEmail, setEmail] = useState('');
    const [userFirstName, setFirstName] = useState('');
    const [userLastName, setLastName] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userPhonerNumber, setphoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userEmail !== '' && userFirstName !== '' && userLastName !== ''
        && userPassword !== '' && userPhonerNumber !== '') {
            const data = {
                email: userEmail,
                firstName: userFirstName,
                lastName: userLastName,
                password: userPassword,
                phoneNumber: userPhonerNumber,
            };
            axios.post('/api/v1/user', data)
                .then(res => {
                    setEmail('');
                    setFirstName('');
                    setLastName('');
                    setPassword('');
                    setphoneNumber('');
                    setMessage('Registration Successful. You can Login');
                    console.log(res.data);
                })
                .catch((error) => {
                    setMessage(error);
                    console.log(error);
                });
        }
    };

    const classes = useStyles();

    return (
        <div>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container>
                                <Grid item>
                                    <h2>
                                        {'Become a Member'}
                                    </h2>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <h4>
                                        {message ? 'Your Registration was Successful. You can Login ' : ''}
                                    </h4>
                                </Grid>
                            </Grid>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={userEmail}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="first_name"
                                label="First Name"
                                name="text"
                                autoComplete="text"
                                value={userFirstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="last_name"
                                label="Last Name"
                                name="text"
                                autoComplete="text"
                                value={userLastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={userPassword}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="phone_number"
                                label="Phone Number"
                                name="number"
                                autoComplete="text"
                                value={userPhonerNumber}
                                onChange={(e) => setphoneNumber(e.target.value)}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={(e) => handleSubmit(e)}
                            >
                            Sign Up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        {'Already have an account? Login'}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default RegisterPage;
