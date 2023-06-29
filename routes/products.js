const express = require('express');
const router = express.Router();
const ProductsCtrl = require('../controllers/products');

const { updateMany } = require('../models/products');
router.get('/new', ProductsCtrl.newProduct);  // GET /products/new
router.post('/', ProductsCtrl.create);      // POST /products
router.get('/', ProductsCtrl.index);        // GET /products
router.get('/models', ProductsCtrl.modelIndex); 
router.get('/year', ProductsCtrl.yearsIndex); 
router.get('/version', ProductsCtrl.versionIndex); 
router.get('/type', ProductsCtrl.typeIndex);
router.get('/custometailor', ProductsCtrl.customeTailorIndex); 
router.get('/specialservices', ProductsCtrl.specialServicesIndex)

// router.post('/', ProductsCtrl.create);

router.delete('/:id',ProductsCtrl.deleteProduct);

router.get('/:id', ProductsCtrl.edit);


router.put('/:id', ProductsCtrl.updateProduct);

const Product = require('../models/products');



module.exports = router;

