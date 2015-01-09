var userApp = angular.module('userApp',[]);
userApp.controller('UserContoller', ['$http', '$scope', function($http, $scope){
	$http.get('').success();

	
}]);