// ElementModel.js
var mongoose = require('mongoose');
// Setup schema
var elementSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    prompt: {
        type: String
    },
    type: {
        type: String
    },
    default: [{
        type: {
            type: String
        },
        id: {
            type: Number
        },
        prompt: {
            type: String
        },
    }],
    row: {
        type: Number,
        default: 1
    },
    colspan: {
        type: Number,
        default: 2
    },
    hiddenInMobile: {
        type: Boolean
    },
    width: {
        type: Number,
        default: 0
    },
    colwidths: {
        type: String,
    },
    main: {
        type: Boolean,
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