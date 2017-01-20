angular.module('appTest').config(function($stateProvider){
    $stateProvider.state('calendarioTurnos', {
        parent: 'site',
        url: '/calendarioTurnos',
        views: {
            'content@': {
                templateUrl: 'js/app/views/calendario/calendario_turnos.html',
                controller: 'CalendarioTurnosController'
            }
        }
    });
});

angular.module('appTest').controller("CalendarioTurnosController", function($scope, $filter, $http, $q, MaterialCalendarData){
	$scope.dayFormat = "d";

    // To select a single date, make sure the ngModel is not an array.
    $scope.selectedDate = new Date();

    $scope.firstDayOfWeek = 1; // First day of the week, 0 for Sunday, 1 for Monday, etc.
	
    $scope.dayClick = function(date) {
      $scope.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
    };

    $scope.prevMonth = function(data) {
      $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
    };

    $scope.nextMonth = function(data) {
      $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
    };

    $scope.tooltips = true;
	
    $scope.setDayContent = function(date) {
        return "<p></p>";

        // You could also use an $http function directly.
        return $http.get("/some/external/api");

        // You could also use a promise.
        var deferred = $q.defer();
        
		$timeout(function() {
            deferred.resolve("<p></p>");
        }, 1000);
		
        return deferred.promise;
    };
	
	$scope.query = {
		order: 'name',
		limit: 5,
		page: 1
	};

	function success(desserts) {
		$scope.desserts = desserts;
	}

	$scope.getDesserts = function () {
		
	};
});