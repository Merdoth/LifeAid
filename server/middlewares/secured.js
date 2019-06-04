/* eslint-disable consistent-return */
/* eslint arrow-body-style: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint react/jsx-no-literals: 0 */
/* eslint func-names: 0 */
module.exports = function () {
    return function secured(req, res, next) {
        if (req.user) {
            return next();
        }
        req.session.returnTo = req.originalUrl;
        res.redirect('/login');
    };
};
