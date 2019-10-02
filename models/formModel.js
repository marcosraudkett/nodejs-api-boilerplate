// ElementModel.js
var mongoose = require('mongoose');
// Setup schema
var formSchema = mongoose.Schema({
    title: {
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
var Form = module.exports = mongoose.model('form', formSchema);
module.exports.get = function (callback, limit) {
    Form.find(callback).limit(limit);
}