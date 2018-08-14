var mongoose = require('mongoose');
const { Schema } = mongoose;

var TrackSchema = mongoose.Schema({

    studentname: String,
    picture: String, 
    
   

    // tags: [String]
    // phone: { type: String },
    // picture: String,
 
   
    _student: { type: Schema.ObjectId, ref: 'Student'},
    tutorid: { type: Schema.ObjectId, ref: 'Tutor2'},
    tutorname: String, 
    // contact: String,
    // creator_name: String,
    // line: String
   
    // _comments: [{ type: Schema.ObjectId, ref: 'Comment'}]
}, {
    timestamps: true
})



var Track = module.exports = mongoose.model('Track', TrackSchema);