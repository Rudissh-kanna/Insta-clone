const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date
    }
})  

const postModel = mongoose.model('post', postSchema);

module.exports = postModel;