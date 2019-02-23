var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/notes/:bro', function(req, res){
    res.send('LOLOL ' + req.params.bro + '!')
});



module.exports = router;