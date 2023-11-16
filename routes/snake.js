var express = require('express');
const snake_controlers= require('../controllers/snake');
var router = express.Router();
/* GET snakes */
router.get('/', snake_controlers.snake_view_all_Page );
module.exports = router;
/* GET detail snake page */
router.get('/detail', snake_controlers.snake_view_one_Page);
