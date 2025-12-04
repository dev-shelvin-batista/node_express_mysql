const router = require('express').Router();
const userController = require('../controllers/user');

// Generate REST API routes for the users module
router.post('', userController.create);
router.get('', userController.list);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;