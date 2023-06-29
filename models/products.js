const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  yearReleased: { type: Number, default: new Date().getFullYear() },
  version: { type: Array },
  // modelNumber: { type: String, required: true },
  // customTailor: { type: String, required: true },
}, { collection: 'products' });


// Compile the schema into a model and export it
const Product = mongoose.model('Product', productSchema);
module.exports = Product;

