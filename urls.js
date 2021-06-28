/* eslint-disable no-console */
const express = require('express');
const nanoId = require('nanoid');

const router = express.Router();
router.use(express.json());
const urls = {};

const hostname = 'https://url-shortner-sumedha.herokuapp.com';

router.get('/', (req, res) => {
    res.send(urls);
});

router.get('/:shortUrlId', (req, res) => {
    const longUrl = urls[req.params.shortUrlId];
    console.log('longUrl in urls.js: ', longUrl);
    if (longUrl) {
        res.redirect(longUrl);
        // res.send(longUrl);
    } else {
        res.status(404).send('Url does not exists');
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    console.log('post method data : ', data);
    const { longUrl } = data;
    console.log('post method long url : ', longUrl);
    const shortUrlId = nanoId.nanoid();
    if (longUrl) {
        urls[shortUrlId] = longUrl;
        console.log('post method urls : ', urls);
        res.send({ shortUrl: `${hostname}/api/urls/${shortUrlId}` });
    } else {
        res.send({ shortUrl: `` });
    }
});

module.exports = router;
