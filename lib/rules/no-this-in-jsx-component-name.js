/**
 * @fileoverview Checks JSX tags for "<this.ComponentName />" since user-defined components must be capitalized
 * @author Julien Benchetrit
 */
"use strict";

var elementType = require('jsx-ast-utils/elementType');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var THIS_REGEX = /^this/;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Checks JSX tags for \"<this.ComponentName />\" since user-defined components must be capitalized",
      category: "Post-Compilation Errors",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [{
      type: 'object',
      properties: {},
      additionalProperties: false
    }]
  },

  create: function(context) {

    return {

      JSXOpeningElement: function(node) {
        var name = elementType(node);

        if (THIS_REGEX.test(name)) {
          context.report({
            node: node,
            message: 'JSX component name \'' + name + '\' must start with a capital letter'
          });
        }
      }

    };
  }
};
