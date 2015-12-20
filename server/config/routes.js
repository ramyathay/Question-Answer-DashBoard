var user = require('../controllers/users.js');
var question = require('../controllers/questions.js');
var answer = require('../controllers/answers.js');


module.exports = function(app){
	app.post('/addUser',function(req,res){
		user.addUser(req,res);
	});
	app.post('/addQuestion',function(req,res){
		question.addQuestion(req,res);
	});
	app.get('/getAllQuestions',function(req,res){
		question.getAllQuestions(req,res);
	});
	app.post('/addAnswer/:question_id',function(req,res){
		answer.addAnswer(req,res);
	});
	app.get('/getQuestionById/:question_id',function(req,res){
		question.getQuestionById(req,res);
	});
	app.get('/addLike/:answer_id',function(req,res){
		answer.addLike(req,res);
	});

}