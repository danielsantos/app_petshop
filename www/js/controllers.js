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
   
.controller('animalCtrl', function ($scope, $stateParams, $http, $ionicPopup, DatabaseValues) {
	
	/*
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
		
		$scope.mensagem = 'Animal cadastrado com sucesso';
			
	}
	*/
	
	$scope.submeter = function(animal) {
	
		DatabaseValues.setup();
		
		if (animal.id) {

			/*
			DatabaseValues.bancoDeDados.transaction(function(transacao) {
				transacao.executeSql('UPDATE usuario SET nome = ? , ' +
				                                       ' dataNascimento = ? WHERE id = ?', [usuario.nome, 
																							$scope.dataSelecionada, 
																							usuario.id]);
			});
			
			$ionicPopup.alert({
				title: 'Usuário Alterado',
				template: 'Usuário alterado com sucesso!'
			}).then(function(){
				$state.go('menu.listUsuarios');
			});
			*/
		
		} else {
			
			DatabaseValues.bancoDeDados.transaction(function(transacao) {
				transacao.executeSql('INSERT INTO animal (nome, apelido) VALUES ( ? , ? )', [animal.nome, animal.apelido]);
			});
			
			$ionicPopup.alert({
				title: 'Pet Cadastrado',
				template: 'Pet cadastrado com sucesso!'
			}).then(function(){
				$state.go('menu.listUsuarios');
			});
		
		}	
	
	}
	

})
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 