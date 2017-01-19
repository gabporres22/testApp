angular.module('appTest').config(function($stateProvider){
    $stateProvider.state('login', {
        parent: 'site',
        url: '/login',
        views: {
            'content@': {
                templateUrl: 'js/app/views/login/login.html',
                controller: 'LoginController'
            }
        }
    });
});

angular.module('appTest').controller("LoginController", function($scope){

});