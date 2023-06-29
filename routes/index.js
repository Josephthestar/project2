const express = require('express');
const router = express.Router();
const ProductsCtrl = require('../controllers/products');

router.get('/', (req, res) => {
  res.render("index");
});

router.get('/new', ProductsCtrl.newProduct);

// router.get('/:id', ProductsCtrl.show);

// router.get('/:id/edit', ProductsCtrl.edit);

router.post('/', ProductsCtrl.create);

router.delete('/:id', ProductsCtrl.deleteProduct);

// router.put('/:id', ProductsCtrl.update);

module.exports = router;
