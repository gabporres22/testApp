angular.module('appTest').controller("HeaderController", function($scope, $state, $mdDialog){
    $scope.login = function(){
        $state.go('login');
    };

    function DialogController($scope, $mdDialog) {
		$scope.close = function(){
			$mdDialog.close();
		};
		
        $scope.forgotPassword = function() {
            $mdDialog.hide();
        };

        $scope.login = function() {
            $mdDialog.hide();
        };

        $scope.signin = function(){
            $mdDialog.hide();
        }
    }

    $scope.showDialog = function($event){
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'login-dialog.template.html',
            parent: angular.element(document.body),
            targetEvent: $event,
            clickOutsideToClose:true,
            fullscreen: false
        });
    };
});
