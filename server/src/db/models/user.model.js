const { model, Schema } = require('mongoose');

const schema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, require: true },
  firstName: String,
  lastName: String,
  dateRegistered: { type: Date, default: Date.now },
});

module.exports = model('users', schema);
