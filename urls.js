const express = require('express');
const nanoId = require('nanoid');

const router = express.Router();
router.use(express.json());
const urls = {};

const hostname = 'https://url-shorteners5.herokuapp.com';

router.get('/', (req, res) => {
    res.send(urls);
});

router.get('/:shortUrlId', (req, res) => {
    const longUrl = urls[req.params.shortUrlId];
    if (longUrl) {
        res.redirect(longUrl);
    } else {
        res.status(404).send('Url does not exists');
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    const { longUrl } = data;
    const shortUrlId = nanoId.nanoid();
    if (longUrl) {
        urls[shortUrlId] = longUrl;
        res.send({ shortUrl: `${hostname}/api/urls/${shortUrlId}` });
    } else {
        res.send({ shortUrl: `` });
    }
});

module.exports = router;
