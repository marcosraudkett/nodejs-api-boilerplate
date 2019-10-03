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
var formController = require('./controllers/formController');
var formDataController = require('./controllers/formDataController');

// Element routes
router.route('/elements')
    .get(elementController.index)
    .post(elementController.new);

router.route('/elements/:id')
    .get(elementController.view)
    .patch(elementController.update)
    .put(elementController.update)
    .delete(elementController.delete);

// Form routes
router.route('/forms')
    .get(formController.index)
    .post(formController.new);

router.route('/forms/:id')
    .get(formController.view)
    .patch(formController.update)
    .put(formController.update)
    .delete(formController.delete);

// FormData routes
router.route('/formData')
    .get(formDataController.index)
    .post(formDataController.new);

router.route('/formData/:id')
    .get(formDataController.view)
    .patch(formDataController.update)
    .put(formDataController.update)
    .delete(formDataController.delete);
    
// Export API routes
module.exports = router;