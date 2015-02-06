var path    = require('path');
var express = require('express');

var app = express();
var clientPath = path.resolve(__dirname, '../webClient');



app.use(express.static(clientPath));


//--Make the app listen on a port-------------
var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log('The magic happens on port: '+port);
});
