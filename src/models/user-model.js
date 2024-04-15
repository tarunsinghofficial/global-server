import mongoose from 'mongoose';
import { validateEmail } from '../utils/validator.js';
import bcrypt from 'bcrypt';
import { SALT } from '../config/server-config.js';
import UserTask from './task-model.js'; 
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validateEmail,
      message: props => `${props.value} is not a valid email address!`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 50
  },
  username: {
    type: String,
    required: true,
    unique: true
  }
},{timestamps:true});



userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, SALT);
  next();
});
userSchema.post('save',  async function() {
  try {
    // Create a task entry for the new user
    await UserTask.create({ userId: this._id, tasksCompleted: 0 });
  } catch (error) {
    console.log("error creating the task",);
  }
});
const User = mongoose.model('User', userSchema);

export default User;