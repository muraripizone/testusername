const express = require('express');
var childProcess = require('child_process');
const app = express();
var githubUsername = 'Chhatrapati'

app.get("/", function (req, res) {
    res.send(`<html>
    <head>
    <h1>Is Working Now?</h1>
    </head>
    <body>
    <p>user information</p>
    <p>user information second part</p>
    <p>user information second part d  f</p>
    <p>user information second part d  df</p>
    </body>
    <html>
    
    
    `)
});


function deploy(res) {

    childProcess.exec('./deploy.sh', function(err, stdout, stderr){
        if (err) {
         console.error(err);
         return res.send(500);
        }
        res.send(200);
      });
}

app.post("/webhook/github", function (req, res) {
    deploy(res)
    // var sender = req.body.actor.username;
    // var branch = req.body.push.changes.new.name;

    // console.log('reqbody',req.body)
    // if(branch.indexOf('master') > -1 && sender === githubUsername){
    //     deploy(res);
    // }
})



app.listen(8082);
