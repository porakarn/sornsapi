const mongoose = require('mongoose');
const Schema = mongoose.Schema

const SubjectSchema = new Schema({
    subject: String

})

module.exports = SubjectSchema;