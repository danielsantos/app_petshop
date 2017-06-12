angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.cart', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  /***** ANIMAL *****/
  
  .state('menu.animal', {
    url: '/page3',
    views: {
      'side-menu21': {
		templateUrl: 'templates/animal/list.html',
        controller: 'animalCtrl'
      }
    }
  })
  
  .state('menu.addAnimal', {
    url: '/addAnimal',
    views: {
      'side-menu21': {
		templateUrl: 'templates/animal/edit.html',
        controller: 'animalCtrl'
      }
    }
  })  
  
  .state('menu.editAnimal', {
      url: '/editAnimal/:animalId',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/animal/edit.html',
				controller: 'animalCtrl'
			}
	  }
    })  
    
  /***** CLIENTE *****/
  
  .state('menu.cliente', {
    url: '/page3',
    views: {
      'side-menu21': {
		templateUrl: 'templates/cliente/list.html',
        controller: 'clienteCtrl'
      }
    }
  })
  
  .state('menu.addCliente', {
    url: '/addCliente',
    views: {
      'side-menu21': {
		templateUrl: 'templates/cliente/edit.html',
        controller: 'clienteCtrl'
      }
    }
  })  
  
  .state('menu.editCliente', {
      url: '/editCliente/:clienteId',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/cliente/edit.html',
				controller: 'clienteCtrl'
			}
	  }
    })  
    

  /*****  *****/
    
  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});