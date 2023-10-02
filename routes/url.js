const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid  = require('shortid');
const config = require('config');

const Url = require('../models/Url');

//@route      POST /api/url/shorten
// @desc       Create short URL
router.post('/shorten', (req, res) => {
    const {longUrl } = req.body;
    const baseUrl =    config.get('baseUrl');
       // Check base Url
       if(!validUrl.isUri(baseUrl)) {
            return res.status(401).json('Invalid base Url');
       }

   // Create url code
   const urlCode = shortid.generate();

   // Check long url
     if(validUrl.isUri(longUrl)) {

     } else {

     }
       
});
module.exports = router;