var express = require('express');
var router = express.Router();


router.post('/500', function(req, res, next) {
    var auth = req.get("authorization")
    console.log(auth);
    if(!auth){
        res.sendStatus(401);

    }
    else {
        var credentials = auth.split(" ")[1];
        console.log(auth, credentials);
        var credBuf = new Buffer(credentials, 'base64').toString();
        console.log(credBuf);
        if (credBuf.split(":").length === 2) {
            res.status(500).render('500');
        }
        else {
            res.sendStatus(401);
        }
    }
});

router.post('/503', function(req, res, next) {
    var auth = req.get("authorization")
    console.log(auth);
    if(!auth){
        res.sendStatus(401);

    }
    else {
        var credentials = auth.split(" ")[1];
        console.log(auth, credentials);
        var credBuf = new Buffer(credentials, 'base64').toString();
        console.log(credBuf);
        if (credBuf.split(":").length === 2) {
            res.status(503).render('503');
        }
        else {
            res.sendStatus(401);
        }
    }

});
router.post('/to', function(req, res, next) {
    var auth = req.get("authorization")
    console.log(auth);
    if(!auth){
        res.sendStatus(401);

    }
    else {
        var credentials = auth.split(" ")[1];
        console.log(auth, credentials);
        var credBuf = new Buffer(credentials, 'base64').toString();
        console.log(credBuf);
        if (credBuf.split(":").length === 2) {
            res.setTimeout(120000, function(){
                console.log('Request has timed out.');
                res.send(408);
            });
        }
        else {
            res.sendStatus(401);
        }
    }


});

router.post('/success', function(req, res, next) {
    var auth = req.get("authorization") || req.body.auth
    if(!auth){
        res.sendStatus(401);

    }
    else {
        var credentials = auth.split(" ")[1];
        console.log(auth, credentials);
        var credBuf = new Buffer(credentials, 'base64').toString();
        if (credBuf.split(":").length === 2) {
            var response = {access_token: new Date().getTime(), token_type: "code", expires_in: 3600}
            res.status(200).send(response)
        }
        else {
            res.sendStatus(401);
        }
    }

});


module.exports = router;
