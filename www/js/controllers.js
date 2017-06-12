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
   
.controller('animalCtrl', function ($scope, $state, $stateParams, $http, $window, $ionicPopup, DatabaseValues) {
	
	
	if ($state.params.animalId) {
		
		$scope.animal = {};

		DatabaseValues.setup();
		DatabaseValues.bancoDeDados.transaction(function(transacao) {
			
			transacao.executeSql('SELECT * FROM animal WHERE id = ?', [$state.params.animalId], function(transacao, resultados) {

				$scope.animal = resultados.rows[0];
			
			});
		});
		
	} else {
	
		$scope.animais = [];

		DatabaseValues.setup();
		DatabaseValues.bancoDeDados.transaction(function(transacao) {
			
			transacao.executeSql('SELECT * FROM animal', [], function(transacao, resultados) {

				for (var i = 0; i < resultados.rows.length; i++) {
					
					$scope.animais.push(resultados.rows[i]);
					
				}
			
			});
		});
		
	}
	
	$scope.submeter = function(animal) {
	
		DatabaseValues.setup();
		
		if (animal.id) {

			
			DatabaseValues.bancoDeDados.transaction(function(transacao) {
				transacao.executeSql('UPDATE animal SET nome = ? , ' +
				                                      ' apelido = ? WHERE id = ?', [animal.nome, 
																					animal.apelido, 
																					animal.id]);
			});
			
			$ionicPopup.alert({
				title: 'Pet Alterado',
				template: 'Pet Alterado com sucesso!'
			}).then(function(){
				$state.go('menu.animal');
			});
		
		} else {
			
			DatabaseValues.bancoDeDados.transaction(function(transacao) {
				transacao.executeSql('INSERT INTO animal (nome, apelido) VALUES ( ? , ? )', [animal.nome, animal.apelido]);
			});
			
			$ionicPopup.alert({
				title: 'Pet Cadastrado',
				template: 'Pet cadastrado com sucesso!'
			}).then(function(){
				$state.go('menu.animal');
			});
		
		}	
	
	}
	
	$scope.remover = function(animalId) {
		
		var confirmPopup = $ionicPopup.confirm({
			
			title: 'Remover Pet',
			template: 'Tem certeza que deseja remover o Pet?',
			cancelText: 'Cancelar',
			okText: 'Confirmar'
			
		}).then(function(res) {
			if (res) {
				
				DatabaseValues.setup();
				DatabaseValues.bancoDeDados.transaction(function(transacao) {
					transacao.executeSql('DELETE FROM animal WHERE id = ?', [animalId]);
				});
			  
				$window.location.reload(true);				
				
			}
		});
	  
    };	
	
	
	

})

.controller('clienteCtrl', function ($scope, $state, $stateParams, $http, $window, $ionicPopup, DatabaseValues) {
	
	if ($state.params.clienteId) {
		
		$scope.cliente = {};

		DatabaseValues.setup();
		DatabaseValues.bancoDeDados.transaction(function(transacao) {
			
			transacao.executeSql('SELECT * FROM cliente WHERE id = ?', [$state.params.clienteId], function(transacao, resultados) {

				$scope.cliente = resultados.rows[0];
			
			});
		});
		
	} else {
	
		$scope.clientes = [];

		DatabaseValues.setup();
		DatabaseValues.bancoDeDados.transaction(function(transacao) {
			
			transacao.executeSql('SELECT * FROM cliente', [], function(transacao, resultados) {

				for (var i = 0; i < resultados.rows.length; i++) {
					
					$scope.clientes.push(resultados.rows[i]);
					
				}
			
			});
		});
		
	}
	
	$scope.submeter = function(cliente) {
	
		DatabaseValues.setup();
		
		if (cliente.id) {

			
			DatabaseValues.bancoDeDados.transaction(function(transacao) {
				transacao.executeSql('UPDATE cliente SET nome = ? , ' +
				                                       ' cpf = ? , ' +
													   ' celular = ? WHERE id = ?', [cliente.nome, 
																	     			 cliente.cpf, 
																		     		 cliente.celular,
																			    	 cliente.id]);
			});
			
			$ionicPopup.alert({
				title: 'Cliente Alterado',
				template: 'Cliente Alterado com sucesso!'
			}).then(function(){
				$state.go('menu.cliente');
			});
		
		} else {
			
			DatabaseValues.bancoDeDados.transaction(function(transacao) {
				transacao.executeSql('INSERT INTO cliente (nome, cpf, celular) VALUES (?, ?, ?)', [cliente.nome, cliente.cpf, cliente.celular]);
			});
			
			$ionicPopup.alert({
				title: 'Cliente Cadastrado',
				template: 'Cliente cadastrado com sucesso!'
			}).then(function(){
				$state.go('menu.cliente');
			});
		
		}	
	
	}
	
	$scope.remover = function(clienteId) {
		
		var confirmPopup = $ionicPopup.confirm({
			
			title: 'Remover Cliente',
			template: 'Tem certeza que deseja remover o Cliente?',
			cancelText: 'Cancelar',
			okText: 'Confirmar'
			
		}).then(function(res) {
			if (res) {
				
				DatabaseValues.setup();
				DatabaseValues.bancoDeDados.transaction(function(transacao) {
					transacao.executeSql('DELETE FROM cliente WHERE id = ?', [clienteId]);
				});
			  
				$window.location.reload(true);				
				
			}
		});
	  
    };	
	

})

   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 