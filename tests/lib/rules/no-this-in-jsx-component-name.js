/**
 * @fileoverview Checks JSX tags for &#34;&lt;this.ComponentName&gt;&#34; since user-defined components must be capitalized
 * @author Julien Benchetrit
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-this-in-jsx-component-name"),
    RuleTester = require("eslint").RuleTester;

var parserOptions = {
  ecmaVersion: 6,
  ecmaFeatures: {
    jsx: true
  }
};

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-this-in-jsx-component-name", rule, {

  valid: [
    {
      code: '<div />',
      parserOptions: parserOptions
    },
    {
      code: '<MyComponent />',
      parserOptions: parserOptions
    }
  ],

  invalid: [
    {
      code: "<this.ComponentName />",
      parserOptions: parserOptions,
      errors: [{
        message: 'JSX component name \'this.ComponentName\' must start with a capital letter'
      }]
    },
    {
      code: "<this.ComponentName>Content</this.ComponentName>",
      parserOptions: parserOptions,
      errors: [{
        message: 'JSX component name \'this.ComponentName\' must start with a capital letter'
      }]
    }
  ]
});
