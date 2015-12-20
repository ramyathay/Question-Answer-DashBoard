dashboard.factory('loginFactory',function($http){
	var factory = {};
	factory.addUser = function(newUser,callback){
		$http.post('/addUser',newUser).success(function(results){
			callback(results);
		});
	}
	return factory;
});