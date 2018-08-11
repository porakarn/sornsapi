var mongoose = require('mongoose');

const { Schema } = mongoose;

var StudentSchema = mongoose.Schema({
     fbid: String ,
    name: String , 
    phone: { type: String },
    picture: String,
    grade: String,
    email: String,
    latestreview : String ,
    gender: String,
    parent_or_student: String
    // _creator: { type: Schema.ObjectId, ref: 'User'},
   
    // _comments: [{ type: Schema.ObjectId, ref: 'Comment'}]
})



var Student = module.exports = mongoose.model('Student', StudentSchema);