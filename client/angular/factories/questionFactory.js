dashboard.factory('questionFactory',function($http){
	var factory = {};
	factory.addQuestion = function(newQuestion,callback){
		$http.post('/addQuestion',newQuestion).success(function(data){
			callback(data);
		});
	}
	factory.getAllQuestions = function(callback){
		$http.get('/getAllQuestions').success(function(data){
			callback(data);
		});
	}
	factory.getQuestionById = function(question_id,callback){
		$http.get('/getQuestionById/'+ question_id).success(function(data){
			callback(data);
		});
	}


	return factory;
})