require('dotenv').config();
const xecdApiClient = require('@xe/xecd-rates-client');


const xecdConfig = {
    username: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD,
    apiUrl: 'https://xecdapi.xe.com/v1/'
};

export const client = new xecdApiClient.XECD(xecdConfig);
