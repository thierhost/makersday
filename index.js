const fs  = require('fs');

function readFile(fileName){

	return fs.readFileSync(fileName);
}