angular.module('app', [
  'ionic'
])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('myApp', {
        abstract: true,
        templateUrl: 'js/menu/menu.html',
        controller: 'menuController',
        controllerAs: 'menu'
      })
      .state('myApp.home', {
        url: '/home',
        views: {
          menuContent: {
            templateUrl: 'js/home/home.html',
            controller: 'homeController',
            controllerAs: 'home'
          }
        }
      })
      .state('myApp.likes', {
        url: '/likes',
        views: {
          menuContent: {
            templateUrl: 'js/likes/likes.html',
            controller: 'likesController',
            controllerAs: 'likes'
          }
        }
      })
      .state('myApp.info', {
        url: '/info',
        views: {
          menuContent: {
            templateUrl: 'js/info/info.html',
            controller: 'infoController',
            controllerAs: 'info'
          }
        }
      });

  });
