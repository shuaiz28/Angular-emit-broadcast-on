var app = angular.module('myApp', []);

app.controller('rootCtrl', function($scope) {
  $scope.message = '';
  $scope.emitMessage = '';
  $scope.$on('emitEvent', function(event, data) {
  	$scope.emitMessage = data.msg;
  });
});

app.controller('middleCtrl', function($scope) {
	$scope.emitEvent = function() {
  	$scope.$emit('emitEvent', {msg: $scope.input});
  }
  $scope.broadcastEvent = function() {
  	$scope.$broadcast('broadcastEvent', {msg: $scope.input});
  }
});

app.controller('childCtrl', function($scope) {
	$scope.$on('broadcastEvent', function(event, data) {
  	$scope.broadcastMessage = data.msg;
  });
});