/* eslint indent:0 */
/* eslint consistent-return:0 */
/* eslint react/destructuring-assignment:0 */
import axios from 'axios';
import React from 'react';
import {
    CssBaseline, Grid, Paper,
    Typography, TextField, Button
} from '@material-ui/core';
import './dashboard.scss';

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            image: '',
            intro: '',
            outputMessage: '',
            title: '',
            video: '',
        };
    }

    handlePublish = e => {
        e.preventDefault();
        if (this.state.title !== '' && this.state.description !== ''
        && this.state.intro !== '') {
            const data = {
                description: this.state.description,
                image: this.state.image,
                intro: this.state.intro,
                title: this.state.title,
                video: this.state.video,
            };
            console.log(data);
            axios.post('/api/v1/aid', data)
                .then(() => {
                    window.location = '/dashboard';
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    handleOnChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {
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
                                            {'Publish Aid Article'}
                                        </h2>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item>
                                        <h4>
                                            {this.state.outputMessage
                                                ? 'You have Successful Published the Article.'
                                                : ''}
                                        </h4>
                                    </Grid>
                                </Grid>
                                <TextField
                                  variant="outlined"
                                  margin="normal"
                                  required
                                  fullWidth
                                  id="title"
                                  label="Aid Title"
                                  name="title"
                                  autoComplete="text"
                                  type="text"
                                  value={this.state.title}
                                  onChange={e => this.handleOnChange(e)}
                                />
                                <TextField
                                  id="introduction"
                                  label="Introduction"
                                  name="intro"
                                  fullWidth
                                  required
                                  multiline
                                  rowsMax="10"
                                  margin="normal"
                                  variant="outlined"
                                  type="text"
                                  value={this.state.intro}
                                  onChange={e => this.handleOnChange(e)}
                                />
                                <TextField
                                  id="description"
                                  label="Description"
                                  name="description"
                                  fullWidth
                                  required
                                  multiline
                                  rowsMax="10"
                                  margin="normal"
                                  variant="outlined"
                                  type="text"
                                  value={this.state.description}
                                  onChange={e => this.handleOnChange(e)}
                                />
                                <TextField
                                  variant="outlined"
                                  margin="normal"
                                  required
                                  fullWidth
                                  id="url"
                                  label="Video URL"
                                  name="videoUrl"
                                  autoComplete="text"
                                  type="url"
                                  value={this.state.video}
                                  onChange={e => this.handleOnChange(e)}
                                />
                                <TextField
                                  variant="outlined"
                                  margin="normal"
                                  required
                                  fullWidth
                                  id="image"
                                  label="Image"
                                  name="image"
                                  autoComplete="text"
                                  type="file"
                                  accept="/image*"
                                  autoFocus
                                  value={this.state.image}
                                  onChange={e => this.handleOnChange(e)}
                                />
                                <Button
                                  type="submit"
                                  fullWidth
                                  variant="contained"
                                  color="primary"
                                  className="submit"
                                  onClick={e => this.handlePublish(e)}
                                >
                                Publish
                                </Button>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default DashboardPage;
