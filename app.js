/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const api = require('./api');

app.use('/static', express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', api);

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});
