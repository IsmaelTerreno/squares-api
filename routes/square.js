const express = require('express');
const router = express.Router();
const squareController = require('../controller/square');

router.get('/', squareController.findAll);

router.get('/:squareId', squareController.findOne);

router.post('/', squareController.create);

router.put('/:squareId', squareController.update);

router.delete('/:squareId', squareController.delete);

module.exports = router;
