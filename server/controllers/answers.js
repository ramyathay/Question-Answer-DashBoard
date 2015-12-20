var mongoose = require('mongoose');
var answer = mongoose.model('Answer');
var question = mongoose.model('Question');
var answer_like =0;

module.exports = (function(){
	return {
		addAnswer : function(req,res){
			question.findOne({_id : req.params.question_id},function(err,question_data){
				if(err){
					console.log("Question not found");
				}
				else{
					console.log("Answer body is ",req.body);
					console.log("Question is",req.params.question_id);
					Answer = new answer({answer : req.body.text,description : req.body.description,createdAt : new Date()});
					Answer._questions = req.params.question_id;
					question_data.answer_ids.push(Answer);
					Answer.save(function(err,results){
						if(err){
							console.log("Error creating new Answer");
						}
						else{
							question_data.save(function(err,results){
								if(err){
									console.log("Error saving question to answer");
								}
								else{
									console.log(results);
									res.json(results);
								}
							});
						}
					});
				}
			});
			
		},
		getAllAnswers : function(req,res){
			answer.find({},function(err,results){
				if(err){
					console.log("Error finding answers",err);
				}
				else{
					console.log("Found answers",results);
					res.json(results);
				}
			});
		},
		addLike : function(req,res){
			answer.findOne({_id : req.params.answer_id},function(err,answer_data){
				if(err){
					console.log("Error while finding answer",err);
				}
				else{
					answer_data.likes  = answer_data.likes +  1;
					answer_data.save(function(err,answer_with_like){
						if(err){
							console.log("Error saving answer with like count",err);
						}
						else{
							console.log("Answer results",answer_with_like);
							res.json(answer_with_like);
						}
					});
				}
			});
		}
	}
}) ()