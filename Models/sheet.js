var mongoose = require('mongoose');

const {
    Schema
} = mongoose;

var SheetSchema = mongoose.Schema({

    docurl: String,
    // phone: { type: String },
    sheetname: String,
    // profile: String,
    subject: String,
    gradeyear: String,
    owner: String,
    // _creator: { type: Schema.ObjectId, ref: 'User'},

    // _comments: [{ type: Schema.ObjectId, ref: 'Comment'}]
}, {
    timestamps: true
})




var Sheet = module.exports = mongoose.model('Sheet', SheetSchema);