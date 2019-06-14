/* eslint indent:0 */
import axios from 'axios';
import React, { useState } from 'react';
import {
    CssBaseline, Grid, Paper,
    Typography, TextField, Button, Link
} from '@material-ui/core';
import { TEXT_FIELD } from '../constants';
import './register.scss';

const RegisterPage = () => {
    const [userEmail, setEmail] = useState('');
    const [userFirstName, setFirstName] = useState('');
    const [userLastName, setLastName] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userPhonerNumber, setphoneNumber] = useState('');
    const [message, setMessage] = useState('');

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
                    setphoneNumber('');
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
                                            ? 'Your Registration was Successfuls. You can Login '
                                            : ''}
                                    </h4>
                                </Grid>
                            </Grid>
                            {
                                TEXT_FIELD.map(({
                                    label, name, id, type, autoFocus, value, handler,
                                }) => (
                                    <TextField
                                      key={id}
                                      variant="outlined"
                                      margin="normal"
                                      required
                                      fullWidth
                                      label={label}
                                      name={name}
                                      type={type}
                                      autoFocus={autoFocus}
                                      value={value}
                                      onChange={handler}
                                      /* i used {e => {handler}(e.target.value)} but show error */
                                    />
                                ))
                            }
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
