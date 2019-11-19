// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default/root API response
router.get('/', function (req, res) {
    res.send('OK');
    res.json({
        status: 'API Its Working',
        message: 'API crafted with love!',
    });
});

// Import element controller
var elementController = require('./controllers/elementController');

// Element routes
router.route('/elements')
    .get(elementController.index)
    .post(elementController.new);

router.route('/elements/:id')
    .get(elementController.view)
    .patch(elementController.update)
    .put(elementController.update)
    .delete(elementController.delete);
    
// Export API routes
module.exports = router;