'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope,$state,FlashCards) {
  console.log('mainCtrl!', $scope);
// $scope.i = 0;
  // $scope.flashCardsArray = [];
  //
  FlashCards.getAll()
  .then(res => {
    $scope.flashCardsArray = res.data;
  })
  .catch(err => {
    console.log(err);
  })

//the repeated array $scope.flashCardsArray

  $scope.submitCard = () => {
    let newCard = angular.copy($scope.flashCard)
    console.log(newCard);
      // console.log($scope.flashCard);
    FlashCards.createOne(newCard)
      .then(res => {
        console.log(res);
      })

  }
  $scope.deleteCard = (id,index) => {
    // FlashCards.delete
    // console.log(card);
    FlashCards.delete(id)
    .then(res => {
      $scope.flashCardsArray.splice(index,1)
    })
  }


$scope.copiedArray = $scope.flashCardsArray;
console.log($scope.flashCardsArray);
});

app.controller('swapiCtrl', function($scope){

  console.log($scope.flashCardsArray);

  $scope.variable = 1;
  $scope.question = $scope.flashCardsArray[0].question
  $scope.cardClicked = () => {
    console.log($scope.variable);
    $scope.variable += 1;
    console.log('clicked');
$scope.question = $scope.flashCardsArray[$scope.variable].question
    console.log($scope.i);
  }
})
