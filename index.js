// index.js
var falcorExpress = require('falcor-express');
var Router = require('falcor-router');

var express = require('express');
var app = express();

var request = require("request");

app.use('/crazy.json', falcorExpress.dataSourceRoute(function(req, res) {
    return new Router([{
        route: "tagsByIndex[{integers:index}]",
        get: function(pathSet) {

        	//Does not work..
            // request(
            //     'https://gist.githubusercontent.com/patHyatt/6b6988c91627afdd5187/raw/cb973382c3fbc624b739b1ce278d76fa4eb7c4fe/random.json',
            //     function(error, response, body) {
            //         console.error(error);
            //         var json = JSON.parse(body);

            //         var result = {
            //             path: ['tagsByIndex'],
            //             value: json.tags
            //         };
            //         console.log(result);
            //         return result;
            //     });

    		//Does work...
            var nonRequestedJson = {
                "id": 1,
                "tags": [
                    "lame",
                    "maybe",
                    "no"
                ]
            };
            var result = {
                path: ['tagsByIndex'],
                value: nonRequestedJson.tags
            };
            console.log(result);
            return result;

        }
    }]);
}));

// serve static files from current directory
app.use(express.static(__dirname + '/'));

var server = app.listen(3000);
