'use strict';

const mongoose = require('mongoose');

let FlashCard = mongoose.model('FlashCard', {
  catagory: String,
  question: String,
  answer: String,

});

module.exports = FlashCard;


//setting up the mongoose

//const mongoose = require('mongoose')
//
//create a model
//let FlashCard = mongoose.model('FlashCard', {

// })
