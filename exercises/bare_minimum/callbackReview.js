/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var eol = require('eol')

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function(filePath, callback) {
  fs.readFile(filePath, 'utf8', function(err, content) {
    if (err) {
      console.log('fs.readFile failed :(\n', err)
      callback(err, null);
    } else {
      var lines = eol.split(content);
      console.log(lines[0]);
      callback(null, lines[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function(url, callback) {
  request(url, function(err, response, body){
    if (err) {
      callback(err, null);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
