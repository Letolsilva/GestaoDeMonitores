import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  day: Number,
  gradeReference: [Number]
});

const Student = mongoose.model('Student', studentSchema);

export default Student;

