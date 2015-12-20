var mongoose = require('mongoose');
// var d = new Date();
// var custom_date = (d.getMonth() + 1) + " " + (d.getDate()) + " " + (d.getFullYear()) ;

var UserSchema = new mongoose.Schema({
	userName : String ,
	questions : [{type : mongoose.Schema.Types.ObjectId ,ref : 'Question'}],
	createdAt : {type :Date }
});

mongoose.model('User' , UserSchema);