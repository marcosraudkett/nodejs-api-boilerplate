// ** initialize express router
let router = require('express').Router();
// ** set default/root API response
router.get('/', function (req, res) {
    res.send('OK');
    res.json({
        status: 'API Its Working',
        message: 'API crafted with love!',
    });
});

// ** import contact controller
const contactController = require('./controllers/contactController');

// ** contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
    
// ** export API routes
module.exports = router;