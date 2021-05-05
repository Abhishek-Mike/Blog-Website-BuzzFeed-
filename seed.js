const mongoose = require('mongoose');
const Blog = require('./models/blog');

const seedDB = async ()=>{
    
    await Blog.insertMany(blogs);
    console.log("DB Seeded");
}

module.exports = seedDB;
