"use strict";

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  collection: 'users'
});
var model = mongoose.model('UserSchema', UserSchema);
module["export"] = model;
//# sourceMappingURL=user.dev.js.map
