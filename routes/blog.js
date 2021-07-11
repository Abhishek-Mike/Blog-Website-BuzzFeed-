const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const Review = require('../models/review');
const { isLoggedIn } = require('../middleware');


// Display all the blogs
router.get('/blogs', async(req, res) => {
    
    try {
        const blogs=await Blog.find({});
        res.render('blogs/index',{blogs}); 
    } catch (e) {
        console.log("Something Went Wrong");
        req.flash('error', 'Cannot Find Blogs');
        res.render('error');
    }
})


// Get the form for new blog
router.get('/blogs/new',isLoggedIn, (req, res) => {

    res.render('blogs/new');
})


// Create New blog
router.post('/blogs',isLoggedIn,async(req, res) => {

    try {
        await Blog.create(req.body.blog);
        req.flash('success', 'Blog Created Successfully');
        res.redirect('/blogs');
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot Create blogs,Something is Wrong');
        res.render('error');
    } 
});


// Show particular blog
router.get('/blogs/:id', async(req, res) => {
    try {
        const blog=await Blog.findById(req.params.id).populate('reviews');
        res.render('blogs/show', { blog});
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot find this blog');
        res.redirect('/error');
    }
})

// Get the edit form
router.get('/blogs/:id/edit',isLoggedIn,async(req, res) => {

    try {
        const blog=await Blog.findById(req.params.id);
        res.render('blogs/edit',{blog});
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot Edit this blog');
        res.redirect('/error');
    }
})

// Upadate the particular blog
router.patch('/blogs/:id',isLoggedIn,async(req, res) => {
    
    try {
        await Blog.findByIdAndUpdate(req.params.id, req.body.blog);
        req.flash('success', 'Updated Successfully!');
        res.redirect(`/blogs/${req.params.id}`) 
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot update this blog');
        res.redirect('/error');
    }
})


// Delete a particular blog
router.delete('/blogs/:id',isLoggedIn,async (req, res) => {

    try {
        await Blog.findByIdAndDelete(req.params.id);
        req.flash('success', 'Deleted the blog successfully');
        res.redirect('/blogs');
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot delete this Blog');
        res.redirect('/error');
    }
})




// Creating a New Comment on a blog

router.post('/blogs/:id/review',isLoggedIn,async (req, res) => {
    
    try {
        const blog = await Blog.findById(req.params.id);


        const review = new Review({
            user: req.user.username,...req.body
        });

        blog.reviews.push(review);

        await review.save();
        await blog.save();

        req.flash('success','Successfully added your comments!')
        res.redirect(`/blogs/${req.params.id}`);
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot add comment to this blog');
        res.redirect('/error');
    }
    
})


router.get('/error', (req, res) => {
    res.status(404).render('error');
})


module.exports = router;
