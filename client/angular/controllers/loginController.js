dashboard.controller('loginController',function($scope,$location,loginFactory){
	$scope.addUser = function(){
		loginFactory.addUser($scope.newUser,function(data){
			console.log(data.userName);
			$scope.newUser = '';
			$location.path('/homePage/' + data.userName);
		});
	}
});