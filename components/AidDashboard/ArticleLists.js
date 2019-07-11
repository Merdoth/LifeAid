/* eslint arrow-parens:0 */
/* eslint arrow-body-style:0 */
/* eslint no-lone-blocks:0 */
/* eslint react/prefer-stateless-function:0 */
/* eslint no-underscore-dangle:0 */
/* eslint react/prop-types:0 */
/* eslint react/destructuring-assignment:0 */
import React from 'react';
import {
    Grid, Paper, Typography, Button,
    Table, TableBody, TableHead, TableRow, TableCell
} from '@material-ui/core';

export default class ArticleLists extends React.Component {
    displayArticles = (articles) => {
        return (
            <TableRow key={articles._id}>
                <TableCell>{articles._id}</TableCell>
                <TableCell>{articles.title}</TableCell>
                <TableCell>
                    <Button onClick={() => this.delete(articles._id)}>Delete</Button>
                </TableCell>
            </TableRow>
        );
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        const { articles } = this.props;
        const listArticles = articles.map(this.displayArticles);
        return (
            <Grid item xs={12} sm={12} component={Paper} elevation={6} square>
                <div className="paper">
                    <Typography component="h1" variant="h5">
                        Articles
                    </Typography>
                    <Grid container>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Title</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listArticles}
                            </TableBody>
                        </Table>
                    </Grid>
                </div>
            </Grid>
        );
    }
}
