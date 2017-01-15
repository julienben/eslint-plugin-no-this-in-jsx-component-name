/**
 * @fileoverview Checks JSX tags for &#34;&lt;this.ComponentName$gt;&#34; since user-defined components must be capitalized
 * @author Julien Benchetrit
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");
