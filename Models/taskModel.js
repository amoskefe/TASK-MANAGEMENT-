const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    deadline: { type: Date },
    status: { type: String, enum: ['incomplete', 'complete'], default: 'incomplete' },
    category: { type: String, default: 'general' },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);

