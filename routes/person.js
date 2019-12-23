var express = require('express');
var router = express.Router();

var description = 'SELECT * FROM description where genre = 9 ORDER BY RAND() LIMIT 1;';
var fear        = 'SELECT * FROM fear where genre = 9 ORDER BY RAND() LIMIT 1;';
var item        = 'SELECT * FROM item where genre = 9 ORDER BY RAND() LIMIT 1;';
var job         = 'SELECT * FROM job where genre = 9 ORDER BY RAND() LIMIT 1;';
var love        = 'SELECT * FROM love where genre = 9 ORDER BY RAND() LIMIT 1;';
var personality = 'SELECT * FROM personality where genre = 9 ORDER BY RAND() LIMIT 1;';
var religion    = 'SELECT * FROM religion where genre = 9 ORDER BY RAND() LIMIT 1;';

router.get('/', function(req, res, next) {
    var genre;
	res.locals.connection.query(description,    function (error, description_results, fields) {
    res.locals.connection.query(fear,           function (error, fear_results, fields) {
    res.locals.connection.query(item,           function (error, item_results, fields) {
    res.locals.connection.query(job,            function (error, job_results, fields) {
    res.locals.connection.query(love,           function (error, love_results, fields) {
    res.locals.connection.query(personality,    function (error, personality_results, fields) {
    res.locals.connection.query(religion,       function (error, religion_results, fields) {
    // Inside of all of these nested 
        if(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
          res.send(JSON.stringify(
                {
                    "description": description_results,
                    "fear": fear_results,
                    "item": item_results,
                    "job": job_results,
                    "love": love_results,
                    "personality": personality_results,
                    "religion": religion_results,
                }
            ));
        }                  
    });});});});});});});
});

module.exports = router;

