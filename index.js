'use strict'

module.exports = [
  {"type": "data", "scope": "add", "release": "minor"},
  {"type": "data", "scope": "add-*", "release": "minor"},
  {"type": "data", "scope": "remove-row", "release": "minor"},
  {"type": "data", "scope": "remove-column", "release": "major"},
  {"type": "data", "scope": "change-values", "release": "patch"},
  {"type": "data", "scope": "replace", "release": "major"}
];
