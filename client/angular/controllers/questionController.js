dashboard.controller('questionController',function($scope,$routeParams,$location,questionFactory,answerFactory){
	$scope.userName = $routeParams.userName;
	$scope.addQuestion = function(value){
		console.log(value);
		if(value.required !== true || value.minlength == true){
			questionFactory.addQuestion($scope.newQuestion,function(data){
				console.log(data);
				$location.path('/homePage/' + $scope.userName);
				$scope.newQuestion = '';
			});
		}
		
	}
	$scope.cancelQuestion = function(){
		$location.path('/homePage/' + $scope.userName);
	}
	$scope.getQuestionById = function(){
		questionFactory.getQuestionById($routeParams.question_id,function(data){		
			$scope.displayQuestion = data;
			console.log(data);
		});
	}
	$scope.addLike = function(answer){
		answerFactory.addLike(answer,function(data){
			$scope.answers = data;
			$scope.getQuestionById();
		});
	}
	$scope.getQuestionById();
});