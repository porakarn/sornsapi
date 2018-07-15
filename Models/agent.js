var mongoose = require('mongoose');

const { Schema } = mongoose;

var AgentSchema = mongoose.Schema({

    pagename: String,
    name: String , 
    // phone: { type: String },
    picture: String,
    contactUrl: String,
    email: String,
    // _creator: { type: Schema.ObjectId, ref: 'User'},
   
    // _comments: [{ type: Schema.ObjectId, ref: 'Comment'}]
})



var Agent = module.exports = mongoose.model('Agent', AgentSchema);