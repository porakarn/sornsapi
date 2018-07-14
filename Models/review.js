var mongoose = require('mongoose');

const { Schema } = mongoose;

var ReviewSchema = mongoose.Schema({

    Date: String , 
    rating: Number,
    review_write: String,
    topic: String,
    studentid: { type: Schema.ObjectId, ref: 'Student'},
    tutorid: { type: Schema.ObjectId, ref: 'Tutor2'}
})



var Review = module.exports = mongoose.model('Review', ReviewSchema);