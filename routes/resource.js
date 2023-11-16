var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var snake_controller = require('../controllers/snake');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// snake ROUTES ///
// POST request for creating a snake.
router.post('/snakes', snake_controller.snake_create_post);
// DELETE request to delete snake.
router.delete('/snakes/:id', snake_controller.snake_delete);
// PUT request to update snake.
router.put('/snakes/:id', snake_controller.snake_update_put);
// GET request for one snake.
router.get('/snakes/:id', snake_controller.snake_detail);
// GET request for list of all snake items.
router.get('/snakes', snake_controller.snake_list);
module.exports = router;
//Handle snake update form on PUT.
exports.snake_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await snake.findById( req.params.id)
// Do updates of properties
if(req.body.snake_color)
toUpdate.snake_color = req.body.snake_color;
if(req.body.snake_breed) toUpdate.snake_breed = req.body.snake_breed;
if(req.body.snake_price) toUpdate.snake_price = req.body.snake_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};