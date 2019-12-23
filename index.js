var mysql = require("mysql");

//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : ' ',
		database : 'prompt_machine'
	});
	res.locals.connection.connect();
	next();
});
app.use('/', index)