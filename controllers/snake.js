var snake = require('../models/snake');
// List of all snakes
exports.snake_list = function(req, res) {
res.send('NOT IMPLEMENTED: snake list');
};

// Handle snake create on POST.
exports.snake_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: snake create POST');
};
// Handle snake delete form on DELETE.
exports.snake_delete = function(req, res) {
res.send('NOT IMPLEMENTED: snake delete DELETE ' + req.params.id);
};
// Handle snake update form on PUT.
exports.snake_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: snake update PUT' + req.params.id);
};

// List of all snakes
exports.snake_list = async function(req, res) {
    try{
    thesnakes = await snake.find();
    res.send(thesnakes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle a show all view
exports.snake_view_all_Page = async function(req, res) {
try{
thesnakes = await snake.find();
res.render('snake', { title: 'snake Search Results', results: thesnakes });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

exports.snake_create_post = async function(req, res) {
console.log(req.body)
let document = new snake();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"snake_type":"goat", "cost":12, "size":"large"}
document.snake_color = req.body.snake_color;
document.snake_breed = req.body.snake_breed;
document.snake_price = req.body.snake_price;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
exports.snake_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await snake.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
