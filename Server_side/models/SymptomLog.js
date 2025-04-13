const mongoose = require('mongoose');

const symptomLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  symptoms: [{
    name: String,
    severity: {
      type: Number,
      min: 1,
      max: 10
    }
  }],
  vitalSigns: {
    temperature: Number,
    bloodPressure: String,
    pulseRate: Number
  },
  medications: [{
    name: String,
    dosage: String,
    timing: String
  }],
  activities: [{
    type: String
  }],
  generalFeeling: {
    type: String,
    enum: ['Better', 'Same', 'Worse']
  },
  notes: String
});

module.exports = mongoose.model('SymptomLog', symptomLogSchema);