'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {url: '/', templateUrl: '/html/createCard.html', controller: 'mainCtrl'})
    .state('about', {url: '/about', templateUrl:'/html/flashCards.html', controller: 'mainCtrl'})
    .state('swapi', {url: '/swapi', templateUrl: '/html/swapi.html', controller: 'swapiCtrl'})
  $urlRouterProvider.otherwise('/');
})
