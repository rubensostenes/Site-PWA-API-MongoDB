const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Pedido = new Schema({
  name: {
    type: String
  },
  pedido: {
    type: String
  }
},{
    collection: 'pedido'
});

module.exports = mongoose.model('Pedido', Pedido);