var express = require('express');
var router = express.Router();


/* GET users listing. */
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
            res.status(500).send('<!DOCTYPE html>\n' +
                '<!-- saved from url=(0058)https://andidittrich.github.io/HttpErrorPages/HTTP503.html -->\n' +
                '<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n' +
                '    <!-- Simple HttpErrorPages | MIT License | https://github.com/AndiDittrich/HttpErrorPages -->\n' +
                '    <meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1">\n' +
                '    <title>We\'ve got some trouble | 503 - Webservice currently unavailable</title>\n' +
                '    <style type="text/css">/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}/*! Simple HttpErrorPages | MIT X11 License | https://github.com/AndiDittrich/HttpErrorPages */body,html{width:100%;height:100%;background-color:#21232a}body{color:#fff;text-align:center;text-shadow:0 2px 4px rgba(0,0,0,.5);padding:0;min-height:100%;-webkit-box-shadow:inset 0 0 100px rgba(0,0,0,.8);box-shadow:inset 0 0 100px rgba(0,0,0,.8);display:table;font-family:"Open Sans",Arial,sans-serif}h1{font-family:inherit;font-weight:500;line-height:1.1;color:inherit;font-size:36px}h1 small{font-size:68%;font-weight:400;line-height:1;color:#777}a{text-decoration:none;color:#fff;font-size:inherit;border-bottom:dotted 1px #707070}.lead{color:silver;font-size:21px;line-height:1.4}.cover{display:table-cell;vertical-align:middle;padding:0 20px}footer{position:fixed;width:100%;height:40px;left:0;bottom:0;color:#a0a0a0;font-size:14px}</style>\n' +
                '</head>\n' +
                '<body>\n' +
                '    <div class="cover"><h1>Webservice currently unavailable <small>Error 503</small></h1><p class="lead">We\'ve got some trouble with our backend upstream cluster.<br>Our service team has been dispatched to bring it back online.</p></div>\n' +
                '    <footer><p>Technical Contact: <a href="mailto:x@example.com">x@example.com</a></p></footer>\n' +
                '\n' +
                '\n' +
                '</body></html>\n');
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
            var response = {access_token: new Date().getTime(), token_type: "code", expires_in: 3600, refresh_token: new Date().getTime()+123546}
            res.status(200).send(response)
        }
        else {
            res.sendStatus(401);
        }
    }

});


module.exports = router;
