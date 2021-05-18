require('dotenv').config();
const xecdApiClient = require('@xe/xecd-rates-client');

//let fromCurrency, toCurrency;

const xecdConfig = {
    username: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD,
    apiUrl: 'https://xecdapi.xe.com/v1/',
    //apiUrl:`https://xecdapi.xe.com/v1/convert_from.json/?from=${fromCurrency}&to=${toCurrency}`
};

export const client = new xecdApiClient.XECD(xecdConfig);
