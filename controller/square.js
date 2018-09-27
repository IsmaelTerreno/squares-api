const Square = require('../model/square.model');

exports.create = (req, res) => {

  if(!req.body.id) {
    return res.status(400).send({
      message: "Square id can not be empty"
    });
  }

  const square = new Square({
    id: req.body.id,
    color: req.body.color,
    border: parseInt(req.body.border, 10),
    size: parseInt(req.body.size, 10)
  });

  square.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Square."
      });
  });
};


exports.findAll = (req, res) => {
  const orderBy = req.query.orderBy;
  const filterBySize = req.query.filterBySize;
  let orderByX = {};
  let filterBySizeX = {};
  if (orderBy){
    orderByX[orderBy] = 'desc';
  }
  if (filterBySize){
    filterBySizeX['size'] = parseInt(filterBySize, 10);
  }
  Square.find(filterBySizeX).sort(orderByX)
    .then(squares => {
      res.send(squares);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving squares."
    });
  });
};


exports.findOne = (req, res) => {
  Square.findOne({id: req.params.squareId})
    .then(square => {
      if(!square) {
        return res.status(404).send({
          message: "Square not found with id " + req.params.squareId
        });
      }
      res.send(square);
    }).catch(err => {
      if(err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Square not found with id " + req.params.squareId
        });
      }
      return res.status(500).send({
        message: "Error retrieving square with id " + req.params.squareId
      });
  });
};


exports.update = (req, res) => {
  if(!req.body.color) {
    return res.status(400).send({
      message: "Square color can not be empty"
    });
  }

  Square.findOneAndUpdate({id: req.params.squareId}, {
    color: req.body.color,
    border: parseInt(req.body.border, 10),
    size: parseInt(req.body.size, 10)
  }, {new: true})
    .then(square => {
      if(!square) {
        return res.status(404).send({
          message: "Square not found with id " + req.params.squareId
        });
      }
      res.send(square);
    }).catch(err => {
      if(err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Square not found with id " + req.params.squareId
        });
      }
      return res.status(500).send({
        message: "Error updating square with id " + req.params.squareId
      });
  });
};


exports.delete = (req, res) => {
  Square.findOneAndRemove({id: req.params.squareId})
    .then(square => {
      if(!square) {
        return res.status(404).send({
          message: "Square not found with id " + req.params.squareId
        });
      }
      res.send({message: "Square deleted successfully!"});
    }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: "Square not found with id " + req.params.squareId
        });
      }
      return res.status(500).send({
        message: "Could not delete square with id " + req.params.squareId
      });
  });
};
