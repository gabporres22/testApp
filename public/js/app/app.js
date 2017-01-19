angular.module('appTest', ['ngMaterial', 'md.data.table', 'ngMdIcons', 'material.components.eventCalendar', 'ui.router']);

angular.module('appTest').config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('site', {
        'abstract': true,
        views : {
            'header@': {
                templateUrl: 'js/app/views/header/header.html',
                controller: 'HeaderController'
            }
        }
    });
});

angular.module('appTest').run(function($state){
    $state.go('calendarioTurnos');
});