var express = require('express');
var router = express.Router();

router.get('/all', function(req, res, next) {
	res.locals.connection.query('SELECT * from genre', function (error, results, fields) {
		
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			console.log(JSON.stringify(results));
	  	}
  	});
});

router.get('/specific/:id', function(req, res, next) {
	res.locals.connection.query('SELECT * from genre where id = 1', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
			console.log(req.params.id)
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});

module.exports = router;