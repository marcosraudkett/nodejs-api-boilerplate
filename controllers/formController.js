// formController.js
// Import form model
Form = require('../models/formModel');
// Handle index actions
exports.index = function (req, res) {
    Form.get(function (err, forms) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Forms retrieved successfully",
            data: forms
        });
    });
};
// Handle create form actions
exports.new = function (req, res) {
    var form = new Form();
    form.title = req.query.title ? req.query.title : form.title;
    form.formData = req.query.formData.split('"').join("'").replace(/(\r\n|\n|\r)/gm, "").split(" ").join("");

    // save the form and check for errors
    form.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New form created!',
            data: form
        });
    });
};
// Handle view form info
exports.view = function (req, res) {
    Form.findById(req.params.id, function (err, form) {
        //if (err)
        //    res.send(err);
        if(form)
        {
            res.json({
                message: 'Form fetched.',
                data: form
            });
        } else {
            res.json({
                message: 'Please check the ID.'
            });
        }
    });
};
// Handle update form info
exports.update = function (req, res) {
    Form.findById(req.params.id, function (err, form) {
        if (err)
            res.send(err);
            form.title = req.query.title ? req.query.title : form.title;
            form.formData = req.query.formData.split('"').join("'").replace(/(\r\n|\n|\r)/gm, "").split(" ").join("");

// save the form and check for errors
        form.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Form updated',
                data: form
            });
        });
    });
};
// Handle delete form
exports.delete = function (req, res) {
    Form.remove({
        _id: req.params.id
    }, function (err, form) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Form deleted'
        });
    });
};