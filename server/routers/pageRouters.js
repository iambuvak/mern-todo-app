const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pageController');

router.route('/getTodos').get(pagesController.getTodos);
router.route('/createTodo').post(pagesController.createTodo);
router.route('/deleteTodo').post(pagesController.deleteTodo);
router.route('/editTodo').post(pagesController.editTodo);

module.exports = router;
