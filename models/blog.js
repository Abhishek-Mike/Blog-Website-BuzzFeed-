const mongoose = require('mongoose');
const Review = require('./review');

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    img: {
        type: String,
    },
    author: {
        type: String,
    },
    desc: {
        type: String
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
});


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;