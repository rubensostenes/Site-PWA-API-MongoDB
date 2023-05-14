const express = require('express');
const app = express();
const pedidoRoutes = express.Router();

let Pedido = require('../model/Pedido');

// api to add pedido
pedidoRoutes.route('/add').post(function (req, res) {
  let pedido = new Pedido(req.body);
  pedido.save()
  .then(pedido => {
    res.status(200).json({'status': 'success','mssg': 'pedido added successfully'});
  })
  .catch(err => {
    res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
  });
});

// api to get pedidos
pedidoRoutes.route('/').get(function (req, res) {
  Pedido.find(function (err, pedidos){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','pedidos': pedidos});
    }
  });
});

// api to get pedido
pedidoRoutes.route('/pedido/:id').get(function (req, res) {
  let id = req.params.id;
  Pedido.findById(id, function (err, pedido){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','pedido': pedido});
    }
  });
});

// api to update route
pedidoRoutes.route('/update/:id').put(function (req, res) {
    Pedido.findById(req.params.id, function(err, pedido) {
    if (!pedido){
      res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
    } else {
        pedido.name = req.body.name;
        pedido.pedido = req.body.pedido;

        pedido.save().then(business => {
          res.status(200).json({'status': 'success','mssg': 'Update complete'});
      })
    }
  });
});

// api for delete
pedidoRoutes.route('/delete/:id').delete(function (req, res) {
  Pedido.findByIdAndRemove({_id: req.params.id}, function(err,){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
    }
  });
});

module.exports = pedidoRoutes;