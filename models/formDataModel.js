// ElementModel.js
var mongoose = require('mongoose');
// Setup schema
var formDataSchema = mongoose.Schema({
    form_id: {
        type: String,
        required: true
    },
    formData: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Form model
var FormData = module.exports = mongoose.model('formData', formDataSchema);
module.exports.get = function (callback, limit) {
    FormData.find(callback).limit(limit);
}