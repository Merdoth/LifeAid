/* eslint indent:0 */
/* eslint arrow-parens:0 */
/* eslint consistent-return:0 */
/* eslint arrow-body-style:0 */
/* eslint react/destructuring-assignment:0 */
/* eslint object-shorthand:0 */
/* eslint react/no-access-state-in-setstate:0 */
/* eslint prefer-template:0 */
/* eslint no-console:0 */
import axios from 'axios';
import React from 'react';
import {
    CssBaseline, Grid, Paper, Typography, TextField, Button
} from '@material-ui/core';
import './dashboard.scss';
import ArticleLists from './ArticleLists';

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            description: '',
            image: '',
            intro: '',
            outputMessage: '',
            title: '',
            video: '',
        };
    }

    componentDidMount() {
        axios.get('/api/v1/aids')
            .then(res => {
                this.setState((prevState) => {
                    return { articles: prevState.articles.concat(res.data.data.aids) };
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    deleteArticle = (key) => {
        if (key) {
            axios.delete('/api/v1/aids/' + key)
                .then(() => {
                    window.location = '/dashboard';
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    handlePublish = e => {
        e.preventDefault();
        const {
            description, image, intro, title, video,
        } = this.state;
        if (title !== '' && description !== '' && intro !== '' && video !== '' && image !== '') {
            const bodyFormData = new FormData();
            // bodyFormData.set('description', description);
            bodyFormData.append('image', image);
            // bodyFormData.set('intro', intro);
            // bodyFormData.set('title', title);
            // bodyFormData.set('video', video);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            };
            axios.post('/api/v1/aid', bodyFormData, config)
                .then(res => {
                    this.setState({ outputMessage: res.message });
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
        const {
            articles, description, image, intro, title, video, outputMessage,
        } = this.state;
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
                            <form name="form" className="form" noValidate>
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
                                            {outputMessage
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
                                  value={title}
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
                                  value={intro}
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
                                  value={description}
                                  onChange={e => this.handleOnChange(e)}
                                />
                                <TextField
                                  variant="outlined"
                                  margin="normal"
                                  required
                                  fullWidth
                                  id="url"
                                  label="Video URL"
                                  name="video"
                                  autoComplete="text"
                                  type="url"
                                  value={video}
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
                                  type="file"
                                  autoFocus
                                  value={image}
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
                    <br />
                    <ArticleLists articles={articles} delete={this.deleteArticle} />
                </Grid>
            </div>
        );
    }
}

export default DashboardPage;
