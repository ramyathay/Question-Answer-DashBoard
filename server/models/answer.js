var mongoose = require('mongoose');
// var d = new Date();
// var custom_date = (d.getMonth() + 1) + " " + (d.getDate()) + " " + (d.getFullYear()) ;

var AnswerSchema = new mongoose.Schema({
	answer : String ,
	description : String,
	likes : {type :Number, default : 0},
	userName : String,
	_questions : {type : mongoose.Schema.Types.ObjectId ,ref : 'Question'},
	createdAt : {type :Date }
});

mongoose.model('Answer' , AnswerSchema);