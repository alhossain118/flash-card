'use strict';
const express = require('express');
let FlashCards = require('../models/name')
let router = express.Router();

// get to api/flashCard

router.get('/', (req,res) => {

  FlashCards.find({}, (err, flashCards) => {
    if(err) return res.status(400).send(err);

    res.send(flashCards)
  })
})

router.post('/', (req,res) => {
  let flashCard = new FlashCards(req.body)

  flashCard.save((err, savedDoc) => {
    if(err) return res.status(400).send(err);
    res.send(savedDoc)

  })
})


/// DELETE /api/flashCards/:id
router.delete('/:id', (req,res) => {



  FlashCards.remove({_id:req.params.id}, (err) => {
    // console.log('arg2', arg2);
    res.status(err ? 400: 200).send(err);
  })
})

router.get('/:id',(req,res) => {
  FlashCards.findById(req.params.id, (err,flashCard) => {
    res.status(err ? 400: 200).send(err || flashCard);
  })
})

router.put('/:id', (req,res) => {
  FlashCards.findOneAndUpdate(req.params.id, {$set: req.body}, err => {
    res.status(err ? 400: 200).send(err);

  })
})

module.exports = router;
