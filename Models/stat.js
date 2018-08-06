var mongoose = require('mongoose');
const { Schema } = mongoose;

var StatSchema = mongoose.Schema({

    who: String,
    image: String, 
   

    // tags: [String]
    // phone: { type: String },
    // picture: String,
 
   
    // _creator: { type: Schema.ObjectId, ref: 'Agent'},
    tutorid: { type: Schema.ObjectId, ref: 'Tutor2'},
    // contact: String,
    // creator_name: String,
    // line: String
   
    // _comments: [{ type: Schema.ObjectId, ref: 'Comment'}]
}, {
    timestamps: true
})



var Stat = module.exports = mongoose.model('Stat', StatSchema);