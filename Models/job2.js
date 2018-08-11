var mongoose = require('mongoose');
var SubjectSchema = require('./subject')
const { Schema } = mongoose;

var Job2Schema = mongoose.Schema({

    job: String,
    subject: [String] , 
    

    // tags: [String]
    // phone: { type: String },
    picture: String,
    day: [String],
    status: {type: String, default: 'ว่าง'},
    _creator: { type: Schema.ObjectId, ref: 'Agent'},
    tutorid: { type: Schema.ObjectId, ref: 'Tutor2'},
    contact: String,
    creator_name: String,
    line: String,
    lastname : String ,
    job_length : Number,
    is_student : String,
   
    // _comments: [{ type: Schema.ObjectId, ref: 'Comment'}]
}, {
    timestamps: true
})



var Job2 = module.exports = mongoose.model('Job2', Job2Schema);