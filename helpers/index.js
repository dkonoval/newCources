const Handlebars = require('handlebars/runtime');

Handlebars.registerHelper('raw-helper', function(options) {
    return options.fn();
});

module.exports = Handlebars;

