/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint react/jsx-filename-extension: 0 */
/* eslint react/jsx-no-literals: 0 */
/* eslint arrow-body-style: 0 */
/* eslint arrow-parens: 0 */
/* eslint func-names: 0 */
/* eslint react/no-unused-state: 0 */
// eslint-disable-next-line react/destructuring-assignment

import React from 'react';
import axios from 'axios';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: null,
            picture: null,
            userId: null,
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/user')
            .then(res => this.setState({
                nickname: res.data.username,
                picture: res.data.picture,
                userId: res.data.id,
            }));
    }

    render() {
        return (
            <div>
                <p>
                    Howdy
                    {' '}
                    { this.state.nickname }
                </p>
                <br />
                <img src={this.state.picture} alt="User Profile" width="150px" height="150px" />
            </div>
        );
    }
}

const User = () => {
    return (
        <div>
            <Welcome />
        </div>
    );
};

export default User;
