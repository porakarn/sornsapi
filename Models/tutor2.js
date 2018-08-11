var mongoose = require('mongoose');

const { Schema } = mongoose;

var Tutor2Schema = mongoose.Schema({

    name: String , 
    phone: { type: String },
    picture: String,
    profile: String,
    profile_length : {type: Number, default: 0},
    email: String,
    subject: String,
    tag: [String],
    line: String,
    fbid: String,
    canseesheet: { type: Boolean , default: false },
    // _creator: { type: Schema.ObjectId, ref: 'User'},
    // total_score : Number,
    // total_teach : Number,
    // unique_student : Number,
    location: String,
    reviewscore: [Number],
    _review: [{ type: Schema.ObjectId, ref: 'Review'}],
    arrayrating: [String],
    view:{type: Number, default: 0},
}, {
    timestamps: true
})



var Tutor2 = module.exports = mongoose.model('Tutor2', Tutor2Schema);