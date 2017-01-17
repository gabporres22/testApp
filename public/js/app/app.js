angular.module('appTest', ['ngMaterial', 'md.data.table', 'ngMdIcons']).controller('MyController', function($scope, $http){
    $scope.cargarClientes = function () {
        $http.get('api/clientes').then(function(response){
            $scope.listaClientes = response.data.data;
        }).catch(function(responseError){
            alert(responseError);
        });
    };

    $scope.cargarClientes();
});