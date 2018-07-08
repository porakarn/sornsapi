var mongoose = require('mongoose');

const { Schema } = mongoose;

var Job2Schema = mongoose.Schema({

    job: String,
    subject: String , 
    // tags: [String]
    // phone: { type: String },
    // picture: String,
    day: String,
    status: {type: String, default: 'ว่าง'},
    _creator: { type: Schema.ObjectId, ref: 'Agent'},
    tutorid: { type: Schema.ObjectId, ref: 'Tutor2'}

   
    // _comments: [{ type: Schema.ObjectId, ref: 'Comment'}]
})



var Job2 = module.exports = mongoose.model('Job2', Job2Schema);