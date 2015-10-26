'use strict';

var required = require('./required');
var _ = require('lodash');

exports = module.exports = {
  validator: function (val, ruleObj) {
    var valAsString = val;
    if (!_.isString(val)) {
      if (val.toString) {
        valAsString = val.toString();
      } else {
        valAsString = '';
      }
    }
    return valAsString.length <= ruleObj.params[0]
  },
  message: '<%= propertyName %> must contain at most <%= ruleParams[0] %> character(s).'
};
