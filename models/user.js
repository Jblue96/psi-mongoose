var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// field names: type
var userSchema = new Schema({
  name: String,
  username: {type: String, unique: true},
  admin: Boolean,
  create_at: Date,
  age: Number
});

// tell mongoose to make our collection
// give it a name and the schema we just created
// WARNING: lowercase and plural collection name, 1st param
var User = mongoose.model('users', userSchema);

module.exports = User;
