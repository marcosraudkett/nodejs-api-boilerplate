// elementController.js
// Import element model
Element = require('./elementModel');
// Handle index actions
exports.index = function (req, res) {
    Element.get(function (err, elements) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "elements retrieved successfully",
            data: elements
        });
    });
};
// Handle create element actions
exports.new = function (req, res) {
    var element = new Element();
    element.title = req.query.title ? req.query.title : element.title;
    element.id = req.query.id;
    element.type = req.query.type;

    element.default = req.query.default;
    //var element.default = [];

    /*
        for(var i=0; i<element.default.length; i++){
            var type = output.push(element.default[i].type);
            var id = output.push(element.default[i].id);
            var prompt = output.push(element.default[i].prompt);
        }
    */

    element.prompt = req.query.prompt;
    element.row = req.query.row;
    element.colspan = req.query.colspan;
    element.width = req.query.width;
    element.colwidths = req.query.colwidths;
    element.main = req.query.main;
    element.editing = req.query.editing;
    element.hiddenInMobile = req.query.hiddenInMobile;

    // save the element and check for errors
    element.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New element created!',
            data: element
        });
    });
};
// Handle view element info
exports.view = function (req, res) {
    Element.findById(req.params.id, function (err, element) {
        //if (err)
        //    res.send(err);
        if(element)
        {
            res.json({
                message: 'Element fetched.',
                data: element
            });
        } else {
            res.json({
                message: 'Please check the ID.'
            });
        }
    });
};
// Handle update element info
exports.update = function (req, res) {
    Element.findById(req.params.id, function (err, element) {
        if (err)
            res.send(err);
            element.title = req.query.title ? req.query.title : element.title;
            element.id = req.query.id;
            element.type = req.query.type;

            element.default = req.query.default;
            //var element.default = [];

            /*
                for(var i=0; i<element.default.length; i++){
                    var type = output.push(element.default[i].type);
                    var id = output.push(element.default[i].id);
                    var prompt = output.push(element.default[i].prompt);
                }
            */

            element.prompt = req.query.prompt;
            element.row = req.query.row;
            element.colspan = req.query.colspan;
            element.width = req.query.width;
            element.colwidths = req.query.colwidths;
            element.main = req.query.main;
            element.editing = req.query.editing;
            element.hiddenInMobile = req.query.hiddenInMobile;
// save the element and check for errors
        element.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'element Info updated',
                data: element
            });
        });
    });
};
// Handle delete element
exports.delete = function (req, res) {
    Element.remove({
        _id: req.params.id
    }, function (err, element) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'element deleted'
        });
    });
};