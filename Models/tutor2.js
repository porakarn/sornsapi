var mongoose = require('mongoose');

const { Schema } = mongoose;

var Tutor2Schema = mongoose.Schema({

    name: String , 
    phone: { type: String },
    picture: String,
    profile: String,
    email: String,
    subject: String,
    tag: String,
    // _creator: { type: Schema.ObjectId, ref: 'User'},
    total_score : Number,
    total_teach : Number,
    unique_student : Number,
    _review: [{ type: Schema.ObjectId, ref: 'Review'}],
    arrayrating: [String]
})



var Tutor2 = module.exports = mongoose.model('Tutor2', Tutor2Schema);