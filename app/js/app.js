var userApp = angular.module('userApp', []);

userApp.controller('UserCtrl', ['$http', '$scope', function ($http, $scope) {
	$http({method:'jsonp', url:'http://172.20.20.3:8083/user/list/1821?callback=JSON_CALLBACK'}).success(function(data){
		$scope.data = data.result;
	}); 
}])



// http://172.23.16.5:8083/user/list/1821?callback=JSON_CALLBACK
// http://api.openbeerdatabase.com/v1/beers.json?callback=JSON_CALLBACK