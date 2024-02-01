const express = require('express');

const router = express.Router();

const Url = require('../models/Url');

//@route  GET /:code
//@desc    Redirect to long/original URL

route.get('/:code', async (req, res) => {
    try{
        const url = await Url.findOne({ urlCode: req.params.code });

    }
     
});

module.exports = router;

