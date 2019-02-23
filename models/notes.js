const mongoose = require('mongoose');

const { Schema } = mongoose;


const NoteSchema = Schema({
    title: String,
    subtitle: String,
    notes: String
}, { timestamps: true });

const NoteData = mongoose.model("NoteData", NoteSchema);

module.exports = NoteData;