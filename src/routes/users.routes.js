const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');

router.get('/getUsers',userController.getUsers);
router.get('/getOneUser/:id',userController.getOneUser);
router.post('/createUser',userController.createUser);
router.put('/updateUser/:id',userController.updateUser);
router.delete('/deleteUser/:id',userController.deleteUser);



module.exports = router;