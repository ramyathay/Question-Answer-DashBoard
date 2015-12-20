var mongoose = require('mongoose');
var question = mongoose.model('Question');


module.exports = (function(){
	return {
		addQuestion : function(req,res){
			console.log(req.body);
			Question = new question({question : req.body.text,description : req.body.description,createdAt : new Date()});
			Question.save(function(err,results){
				if(err){
					console.log("Error creating new Question");
				}
				else{
					console.log(results);
					res.json(results);
				}
			});
		},
		getAllQuestions : function(req,res){
			question.find({}).populate('answer_ids').exec(function(err,results){
				if(err){
					console.log("Error finding questions",err);
				}
				else{
					console.log("Found questions",results);
					res.json(results);
				}
			});
		},
		getQuestionById : function(req,res){
			question.findOne({_id : req.params.question_id}).populate('answer_ids').exec(function(err,results){
				if(err){
					console.log("Error finding question by Id",err);
					res.json(results);
				}
				else{
					console.log("Found question by id",results);
					res.json(results);
				}
			});
		}
	}
}) ()

// question.find({},function(err,results){
// 				if(err){
// 					console.log("Error finding questions",err);
// 				}
// 				else{
// 					console.log("Found questions",results);
// 					res.json(results);
// 				}
// 			});