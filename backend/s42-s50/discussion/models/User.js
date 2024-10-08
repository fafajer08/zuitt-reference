const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is Required']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is Required']
  },
  email: {
    type: String,
    required: [true, 'Email is Required']
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters long']
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  mobileNo: {
    type: String,
    required: [true, 'Mobile Number is required'],
    match: [/^\d{10}$/, 'Please provide a valid 10-digit mobile number']
  }
});

module.exports = mongoose.model('User', userSchemaSchema);