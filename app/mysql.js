const mysql = require('mysql');
mysql.Promise = Promise;

module.exports = (uri) => {
	
	var conn = mysql.createConnection({
		host: "mysql",
		user: "desafio",
		password: "desafio",
		database: 'desafio'
	  });
	  
	  conn.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
	  });

};