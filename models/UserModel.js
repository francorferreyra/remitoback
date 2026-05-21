import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  full_name: {
    type: String,
    required: true,
  },
  token: {type: String},

  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model('User', userSchema);