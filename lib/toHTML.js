'use strict';

var toHTML = function (element) {
    var tagName = element[0];
    var attributes;
    var elementList;

    switch (element.constructor) {
        case String:
            return element;
            break;
        case Array:
            switch (element.length) {
                case 1:
                    attributes = {};
                    elementList = [];
                    break;
                default:
                    switch (element[1].constructor) {
                        case Array:
                        case String:
                            attributes = {};
                            elementList = element.slice(1);
                            break;
                        default:
                            attributes = element[1];
                            elementList = element.slice(2);
                            break;                        
                    }
                    break;
            }
            break;
    }

    return (
        '<' + tagName + Object.keys(attributes).map(function(key) {
            return ' ' + key + '="' + attributes[key] + '"';
        }).join('') + '>' +
        elementList.map(function(element) {
            return toHTML(element);
        }).join('') +
        '</' + tagName + '>'
    );
};

module.exports = toHTML;
