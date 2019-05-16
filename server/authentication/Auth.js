import auth0 from 'auth0-js';
// import dotenv from 'dotenv';

// dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;

export default class Auth {
    userProfile;

    accessToken;

    idToken;

    expiresAt;

    // auth0 = new auth0.WebAuth({
    //     audience: process.env.AUDIENCE,
    //     clientID: process.env.CLIENT_ID,
    //     domain: process.env.DOMAIN,
    //     redirectUri: `http://localhost:${port}`,
    //     responseType: 'token id_token',
    //     scope: 'openid profile',
    // });
    //
    auth0 = new auth0.WebAuth({
        audience: 'https://iammiracle.auth0.com/api/v2/',
        clientID: 'I0Qpgj1efZdvUtV5nwRJyx14VJl2S2Qb',
        domain: 'iammiracle.auth0.com',
        redirectUri: 'http://localhost:8080',
        responseType: 'token id_token',
        scope: 'openid',
    });

    login() {
        this.auth0.authorize();
    }

    getProfile(cb) {
        this.auth0.client.userInfo(this.accessToken, (err, profile) => {
            if (profile) {
                this.userProfile = profile;
            }
            cb(err, profile);
        });
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                window.location = '/';
            }
        });
    }

    getAccessToken() {
        return this.accessToken;
    }

    getIdToken() {
        return this.idToken;
    }

    setSession(authResult) {
        // Set isLoggedIn flag in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Set the time that the Access Token will expire
        const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.accessToken = authResult.accessToken;
        this.idToken = authResult.idToken;
        this.expiresAt = expiresAt;
        window.location = '/';
    }

    renewSession() {
        this.auth0.checkSession({}, (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                this.logout();
            }
        });
    }

    logout() {
        // Set token and expiry to null and zero respectively
        this.accessToken = null;
        this.idToken = null;
        this.expiresAt = 0;
        this.userProfile = null;

        // Remove isLoggedIn flag from localStorage
        localStorage.removeItem('isLoggedIn');

        this.auth0.logout({
            returnTo: window.location.origin,
        });

        // Go back Home
        window.location = '/';
    }

    isAuthenticated() {
        const [expiresAt] = this.expiresAt;
        return new Date().getTime() < expiresAt;
    }
}
