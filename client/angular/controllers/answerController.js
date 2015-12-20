dashboard.controller('answerQstn_Controller',function($scope,$routeParams,$location,answerFactory,questionFactory){

	$scope.userName = $routeParams.userName;
	// $scope.question_id = $routeParams.question_id;
	console.log('questio_id is ',$routeParams.question_id);
	$scope.addAnswer = function(){
		answerFactory.addAnswer($scope.newAnswer,$scope.question._id,function(data){
			$location.path('/homePage/' + $scope.userName);
		});
	}
	$scope.cancelAnswer = function(){
		$location.path('/homePage/' + $scope.userName);
	}
	$scope.getQuestionById = function(){
		questionFactory.getQuestionById($routeParams.question_id,function(data){
			console.log("Qestion by id is",data);
			$scope.question = data;
		});
	}
	$scope.getQuestionById();
	
});