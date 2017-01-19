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

angular.module('appTest').controller("CalendarioTurnosController", function($scope){
    $scope.eventClicked = function($event){

    }

    $scope.eventCreatea = function($event){

    }
});