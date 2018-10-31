/**
 ** Change to the examples directory so this program can run as a service.
 **/
process.chdir(__dirname);

var fs = require ("fs");
var service = require ("os-service");
const path = require('path');

function usage () {
	console.log ("usage: node service --add");
	console.log ("       node service --remove");
	console.log ("       node service --run");
	process.exit (-1);
}

if (process.argv[2] == "--add") {
	var options = {
        name: "nMon Agent",
        nodePath: path.join(__dirname, "nodejs", "node.exe"),
        programPath: path.join(__dirname, "main.js"),

        
	};

	service.add ("nMon Agent", options, function(error) {
		if (error)
			console.log(error.toString());
	});


} else if (process.argv[2] == "--remove") {

	service.remove ("nMon Agent", function(error) {
		if (error)
			console.log(error.toString());
	});


} else {
	usage ();
}
