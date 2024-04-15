import mongoose from 'mongoose';

const { Schema } = mongoose;

const userTaskSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tasksCompleted: {
    type: Number,
    default: 0
  }
});

const UserTask = mongoose.model('UserTask', userTaskSchema);

export default UserTask;