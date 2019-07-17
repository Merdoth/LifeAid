/* eslint-disable import/no-extraneous-dependencies */

const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.css'] = {};
}

module.exports = withCss(withSass());
