# Blog-Website-BuzzFeed-
simple-website-with-blog is a simple Node.js web application for static content that includes a blog. It was created as the basis for my own website, but everyone is welcome to use it. The implementation strives to be simple and free of unnecessary dependencies.
Goals

    An easy way to create a simple, secure website with a blog
    Support for text-based and photo-based blog formats
    Easy customization of site layout and formatting
    High resolution (2x) support for photo blog images
    Support for Windows and Linux hosting with Node.js
    Simple post format that separates content and metadata
    Ability to create posts that never show up in the timeline
    Abilty to comment on any blog posts 

Structure

    /app.js Entry point for the application, configures the server and static content
    /blog.js Implementation of the blog, archives, tags
    /seed.js Environment variables used to control basic behavior
    /auth.js & /middleware.js  Authentication (User sign-up registration & Log-in)
    Flash & sessions are used
    
    
    Instructions

    Install Node.js version 10+
    Fork and clone repository
    Add static content to /seed.js
    Add post and content under /blogs/new
    npm install
    npm start
    Open http://localhost:3000/ and verify
    Commit changes to repository
    Deploy repository to hosting service


Dependencies
Project 	        Home Page
Ejs                 https://ejs.co/
Express 	        https://expressjs.com/
Mongoose            https://mongoosejs.com/
Passport            http://www.passportjs.org/
Express-Session     https://www.npmjs.com/package/express-session     

Contributing

    Open issue, discuss proposal
    Fork and clone repository
    Change code and update tests
    Review changes
    Send pull request
