'use strict';

var app = angular.module('myApp');

app.service('FlashCards', function($http){

  this.getAll = () => {
    return $http.get('/api/names')
  }
  this.createOne = (card) => {
    return $http.post('/api/names', card)
  }
  this.getOne = id => {
    return $h
  }

  this.delete = (card) => {
    return $http.delete('/api/names/' + card)
  }
})
