const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main.controller');

router.post('/addProduct',mainController.addProduct);
router.get('/getProducts',mainController.getProducts);
router.get('/getOneProduct/:id',mainController.getOneProduct);
router.delete('/deleteProduct/:id',mainController.deleteProduct);
router.put('/update/:id',mainController.updateProduct);


module.exports = router;