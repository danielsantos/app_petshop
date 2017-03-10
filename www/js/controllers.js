angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cartCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('animalCtrl', function ($scope, $stateParams, $http) {
	
	$scope.submeter = function(animal) {
		
		$http.post('http://localhost:3000/api/animais', animal, null)
		.success(function(retorno) {
			//$scope.mensagem = 'Animal cadastrado com sucesso';
			console.log('Animal cadastrado com sucesso');
			console.log(retorno);
		})
		.error(function(erro) {
			console.log(erro);
		});
			
	}

})
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 