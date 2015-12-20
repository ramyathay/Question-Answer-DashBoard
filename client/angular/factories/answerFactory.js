dashboard.factory('answerFactory',function($http){
	var factory = {};
	factory.addAnswer = function(newAnswer,question_id,callback){
		$http.post('/addAnswer/'+ question_id,newAnswer).success(function(data){
			callback(data);
		});
	}
	factory.addLike = function(answer,callback){
		$http.get('/addLike/'+ answer._id).success(function(data){
			callback(data);
		});
	}
	return factory;
});