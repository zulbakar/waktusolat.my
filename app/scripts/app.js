'use strict';

/**
 * @ngdoc overview
 * @name waktusolatmyApp
 * @description
 * # waktusolatmyApp
 *
 * Main module of the application.
 */
angular
  .module('waktusolatmyApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });


    //$locationProvider.hashPrefix('');

    var primaryColorMap = $mdThemingProvider.extendPalette('blue', {
      '500': '#01579b'
    });

    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('primaryColorMap', primaryColorMap);

    var accentsColorMap = $mdThemingProvider.extendPalette('pink', {
      'A200': '#e91e63'
    });

    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('accentsColorMap', accentsColorMap);

    $mdThemingProvider.setDefaultTheme('altTheme');

    $mdThemingProvider.theme('altTheme')
      .primaryPalette('primaryColorMap')
      .accentPalette('accentsColorMap');
  });
