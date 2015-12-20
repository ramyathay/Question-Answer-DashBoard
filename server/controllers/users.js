var mongoose = require('mongoose');
var user = mongoose.model('User');


module.exports = (function(){
	return {
		addUser : function(req,res){
			console.log("users name ",req.body.name);
			User = new user({userName : req.body.name,createdAt : new Date() });
			User.save(function(err,results){
				if(err){
					console.log("Error creating new User");
				}
				else{
					console.log(results);
					res.json(results);
				}
			});
		}
	}
}) ()