const Product = require('../models/products');

module.exports = {
  index,
  newProduct,
  modelIndex,
  yearsIndex,
  versionIndex,
  typeIndex,
  customeTailorIndex,
  specialServicesIndex,
  create,
  edit,
  deleteProduct: deleteProduct, // Add the deleteProduct function to the exports
  updateProduct
};


async function create(req, res) {
  req.body.price = Number(req.body.price);
  console.log("!!!!!!!!!!")
  console.log(req.body);
  try {
    await Product.create(req.body);
    res.redirect('/products');
  } catch (err) {
    console.log(err)
    res.render('products/index', { errorMsg: err.message });
  }
}

function newProduct(req, res) {
  res.render('products/new', { errorMsg: '' });
}

async function edit(req, res){
  const products = await Product.findById({ _id: req.params.id });
  res.render('products/edit', {
    name: 'edit product', 
    products
  });
}

async function updateProduct(req, res) {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.redirect(`/products`);
  }  catch (err) {
    res.render(`/products/${req.params.id}/edit`, { errorMsg: err.message });
  }
}

async function deleteProduct(req, res) {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.redirect('/products'); // Redirect to the appropriate route after deletion
  } catch (err) {
    res.render('products/index', { errorMsg: err.message });
  }
}

async function index(req, res) {
  const products = await Product.find({});
  console.log(products);
  res.render('products/index', { products: products });
}

async function modelIndex(req, res) {
  const models = await Product.find({});
  res.render('products/model', { models:models });
}

async function yearsIndex(req, res) {
  const year = await Product.find({});
  res.render('products/years', { year:year });
}


async function versionIndex(req, res) {
  const version = await Product.find({});
  res.render('products/version', { version:version });
}

async function typeIndex(req, res) {
  const type = await Product.find({});
  res.render('products/type', { type:type });
}

async function customeTailorIndex(req, res) {
  const customeTailor = await Product.find({});
  res.render('products/customeTailor', { customeTailor:customeTailor });
}

async function specialServicesIndex(req, res) {
  const specialServices = await Product.find({});
  res.render('products/specialServices', { specialServices:specialServices });
}
