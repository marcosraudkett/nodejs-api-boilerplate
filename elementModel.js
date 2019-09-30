// ElementModel.js
var mongoose = require('mongoose');
// Setup schema
var elementSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
        required: true
    },
    width: {
        type: Number,
        required: true,
        default: 0
    },
    colwidths: {
        type: String,
        required: true
    },
    main: {
        type: Boolean,
        required: true,
        default: false
    },
    editing: {
        type: Boolean,
        required: true,
        default: false
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Element model
var Element = module.exports = mongoose.model('element', elementSchema);
module.exports.get = function (callback, limit) {
    Element.find(callback).limit(limit);
}