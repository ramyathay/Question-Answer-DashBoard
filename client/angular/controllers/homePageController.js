dashboard.controller('homepageController',function($scope,$location,$routeParams,loginFactory,questionFactory){
	$scope.userName = $routeParams.userName;
	$scope.getAllQuestions = function(){
		questionFactory.getAllQuestions(function(data){
			console.log("All questions are",data);
			$scope.questions = data;
		});
	}
	$scope.getAllQuestions();
});