// formController.js
// Import form model
Form = require('../models/formModel');
FormData = require('../models/formDataModel');
// Handle index actions
exports.index = function (req, res) {
    FormData.get(function (err, forms) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "FormData retrieved successfully",
            data: forms
        });
    });
};
// Handle create form actions
exports.new = function (req, res) {
    res.json({
        status: "success",
        message: "formData can be created using /api/forms and later on updated using /api/formData/{id}"
    });
};
// Handle view form info
exports.view = function (req, res) {
    query = { form_id: req.params.id }
    FormData.find(query, function (err, formData) {
        //if (err)
        //    res.send(err);
        if(formData)
        {
            res.json({
                message: 'FormData fetched.',
                data: formData
            });
        } else {
            res.json({
                message: 'Please use the form ID to fetch formData!'
            });
        }
    });
};
// Handle update formData info using form_id
exports.update = function (req, res) {
    /*
        First we find the correct formData ID using the form_id
        and then we can update formData using its own ID.
    */
    var formDataId;
    async function fetchFormDataID() {
        return new Promise((resolve, reject) => {
            try {
                FormData.find({form_id: req.params.id}, function (err, formData) {
                    formDataId = formData[0]['_id'];
                    resolve();
                });
            } catch (error) {
              reject(error);
            }
        });
    };
    fetchFormDataID().then(() => {
        FormData.findById(formDataId, function (err, formData) {
            if (err)
                res.send(err);
            formData.formData = req.query.formData.split('"').join("'").replace(/(\r\n|\n|\r)/gm, "").split(" ").join("");
            // save the formData and check for errors
            formData.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'Form updated',
                    data: formData
                });
            });
        });
    });
};
// Handle delete form
exports.delete = function (req, res) {
    res.json({
        status: "success",
        message: "Please use /api/forms to delete formData by using the form '_id'"
    });
};
