angular.module('appTest').controller("HeaderController", function($scope, $state){
    $scope.login = function(){
        $state.go('login');
    };
});
