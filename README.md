# Angular-emit-broadcast-on
$scope.$emit: 
    
    will dispatch an event up the $scope(the event traverses toward the root scope and calls all registered listeners). 
    will stop propagating if one of the listeners cancels it.
    When you want that $scope and all its parents and $rootScope to hear the event.

$scope.$emit(eventName, args);
args: optional 1 or more, will be passed onto the event listeners.

$scope.$broadcast: 
    
    will dispatch an event down the $scope.
    the event cannot be canceled.
    When you want that $scope and all its children to hear the event.

$scope.$broadcast(eventName, args);

args: optional 1 or more, will be passed onto the event listeners.

$scope.on: is how we listen for these events.

$scope.$on(eventName, function(event, args) {})
