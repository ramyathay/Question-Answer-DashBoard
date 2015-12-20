var mongoose = require('mongoose');
// var d = new Date();
// var custom_date = (d.getMonth() + 1) + " " + (d.getDate()) + " " + (d.getFullYear()) ;

var QuestionSchema = new mongoose.Schema({
	question : String ,
	description : String,
	_user : {type : mongoose.Schema.Types.ObjectId ,ref : 'User'},
	answer_ids : [{type : mongoose.Schema.Types.ObjectId ,ref : 'Answer'}],
	createdAt : {type :Date }
});

mongoose.model('Question' , QuestionSchema);