/* eslint indent:0 */
import axios from 'axios';
import React, { useState } from 'react';
import {
    CssBaseline, Grid, Paper,
    Typography, TextField, Button, Link
} from '@material-ui/core';
// import { TEXT_FIELD } from '../constants';
import './register.scss';

const RegisterPage = () => {
    const [userEmail, setEmail] = useState('');
    const [userFirstName, setFirstName] = useState('');
    const [userLastName, setLastName] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userPhonerNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const getStateFunction = (e, field) => {
        // const { value } = e.target.value;
        if (field.name === 'email') {
            setEmail(e.target.value);
        } else if (field.name === 'first_name') {
            setFirstName(e.target.value);
        } else if (field.name === 'last_name') {
            setLastName();
        } else if (field.name === 'password') {
            setPassword();
        } else if (field.name === 'phone_number') {
            setPhoneNumber();
        }
    };

    const handleSubmit = e => {
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
                .then(() => {
                    setMessage('Registration Successful. You can Login');
                    setEmail('');
                    setFirstName('');
                    setLastName('');
                    setPassword('');
                    setPhoneNumber('');
                })
                .catch(error => {
                    setMessage(error);
                });
        }
    };

    return (
        <div>
            <Grid container component="main" className="root">
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className="image" />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className="paper">
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className="form" noValidate>
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
                                        {message
                                            ? 'Your Registration was Successful. You can Login '
                                            : ''}
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
                              onChange={e => setEmail(e.target.value)}
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
                              onChange={e => setFirstName(e.target.value)}
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
                              onChange={e => setLastName(e.target.value)}
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
                              onChange={e => setPassword(e.target.value)}
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
                              onChange={e => setPhoneNumber(e.target.value)}
                            />
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              className="submit"
                              onClick={e => handleSubmit(e)}
                            >
                            Sign Up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <br />
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
