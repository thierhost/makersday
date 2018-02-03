const fs  = require('fs');

/**
* read a file 
**/
function readFile(fileName){

	return fs.readFileSync(fileName);
}