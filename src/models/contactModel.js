let mongoose = require('mongoose');

// setup schema
let contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    is_active: {
        type: Boolean
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// export Contact model
let Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}