import mongoose from 'mongoose';

const monitorSchema = new mongoose.Schema({
  name: String,
  availableAt: Date,
});

const Monitor = mongoose.model('Monitor', monitorSchema);

export default Monitor;
