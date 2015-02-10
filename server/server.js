var path = require('path');
var MBTiles = require('mbtiles');
var express = require('express');


var app = express();
//var clientPath = path.resolve(__dirname, '../webClient');
var clientPath = path.resolve("..") + "/webClient/";
var tilesDir = path.resolve(__dirname, '../tiles');


app.use(express.static(clientPath));

app.get("/:s/:z/:x/:y.*", function(req, res) {

	new MBTiles(path.join(tilesDir, req.params.s + '.mbtiles'), function(err,
		mbtiles) {
		mbtiles.getTile(req.params.z, req.params.x, req.params.y, function(err,
			tile, headers) {

			if (err) {
				res.send('...Tile rendering error: ' + err + "\n");
			} else {
				res.header("Content-Type", "image/png");
				res.send(tile);
			}

		}); //getTiles
		if (err) console.log(".......error opening sqlite database");
	}); //MBTiles

}); //app.get()


// serve ng-html5 routes
var webPath   = path.resolve("..") + "/webClient/";
app.use(express.static(webPath));
app.use('/*', function(req, res){
  res.sendFile(webPath+'/index.html');
});


//--Make the app listen on a port-------------
var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log('The magic happens on port: ' + port);
});
