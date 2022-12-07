// Import contact model
Contact = require('../models/contactModel');
// Handle index 
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            res.status(404);
        }
        res.json({
            status: "success",
            message: "contacts retrieved successfully",
            data: contacts
        });
    });
};
// Handle create 
exports.new = function (req, res) {
    let contact = new Contact();
    contact.name = req.query.name;
    contact.email = req.query.email;
    contact.is_active = req.query.is_active;

    // save the contact and check for errors
    contact.save(function (err) {
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};

// Handle view
exports.view = function (req, res) {
    query = { id: req.params.id }
    Contact.find(query, function (err, contact) {
        if(!contact)
        {
            res.json({
                message: 'Contact fetched.',
                data: contact
            });
        } else {
            res.status(404);
            res.json({
                message: 'Please check the contact ID.'
            });
        }
    });
};

// Handle update
exports.update = function (req, res) {
    Contact.findById(req.params.id, function (err, contact) {
        if (err)
            res.send(err);
        contact.name = req.query.name;
        contact.email = req.query.email;
        contact.is_active = req.query.is_active;
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact info updated',
                data: contact
            });
        });
    });
};

// Handle delete
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.id
    }, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'contact deleted',
            data: contact
        });
    });
};