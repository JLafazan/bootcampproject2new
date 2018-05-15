// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var express = require('express')
var bodyParser = require('body-parser')
var formidable = require('formidable')
var db = require("../models");
var path = require('path');
fs = require('fs');
var fileupload = require("express-fileupload");
<<<<<<< HEAD
//var multer = require('multer');

var app = express();
=======
var multer = require('multer');

// requiring passport to authenticate email and password of user
var passport = require("../config/passport");
>>>>>>> master

// Routes
// =============================================================
module.exports = function (app) {

<<<<<<< HEAD
    // GET route for getting all of the events
    app.get("/api/events/", function (req, res) {
        db.Events.findAll({})
            .then(function (dbEvents) {
                res.json(dbEvents);
            });
    });

    // Get route for returning events of a specific category
    app.get("/api/events/category/:category", function (req, res) {
        db.Events.findAll({
=======
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
        // So we're sending the user back the route to the members page because the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authed
        res.redirect("/favorites");
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function (req, res) {
        console.log(req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function () {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
        });
    });

    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });


    // GET route for getting all of the posts
    app.get("/api/posts/", function (req, res) {
        db.Post.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // Get route for returning posts of a specific category
    app.get("/api/posts/category/:category", function (req, res) {
        db.Post.findAll({
>>>>>>> master
            where: {
                category: req.params.category
            }
        })
<<<<<<< HEAD
            .then(function (dbEvents) {
                res.json(dbEvents);
=======
            .then(function (dbPost) {
                res.json(dbPost);
>>>>>>> master
            });
    });

    // Get route for retrieving a single post
<<<<<<< HEAD
    app.get("/api/events/:id", function (req, res) {
        db.Events.findOne({
=======
    app.get("/api/posts/:id", function (req, res) {
        db.Post.findOne({
>>>>>>> master
            where: {
                id: req.params.id
            }
        })
<<<<<<< HEAD
            .then(function (dbEvents) {
                res.json(dbEvents);
=======
            .then(function (dbPost) {
                res.json(dbPost);
>>>>>>> master
            });
    });

    // POST route for saving a new post
<<<<<<< HEAD
    app.post("/api/events", function (req, res) {
=======
    app.post("/api/posts", function (req, res) {
>>>>>>> master
        console.log(req.body);

        // use fs to save req.body.photo in /images

<<<<<<< HEAD
        db.Events.create({
=======
        db.Post.create({
>>>>>>> master
            title: req.body.title,
            body: req.body.body,
            category: req.body.category,
            photo: req.body.photo,
        })
<<<<<<< HEAD
            .then(function (dbEvents) {
                res.json(dbEvents);
            });
    });

    // DELETE route for deleting events
    app.delete("/api/events/:id", function (req, res) {
        db.Events.destroy({
=======
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // DELETE route for deleting posts
    app.delete("/api/posts/:id", function (req, res) {
        db.Post.destroy({
>>>>>>> master
            where: {
                id: req.params.id
            }
        })
<<<<<<< HEAD
            .then(function (dbEvents) {
                res.json(dbEvents);
=======
            .then(function (dbPost) {
                res.json(dbPost);
>>>>>>> master
            });
    });



    app.post('/upload', function (req, res) {
        console.log("worked");

        // var storage = multer.diskStorage({
        //     destination: function (req, file, cb) {
        //     cb(null, './public/uploads')
        //     },
        // })

        // var upload = multer({ storage: storage });

        // // var tempPath = req.files.file.path;

        // targetPath = path.resolve('./uploads/' + req.files.file.name);

        // console.log('\n\n in upload path \n')
        // console.log('targetPath: ', targetPath)
        // const { file } = req.files

        // var form = new formidable.IncomingForm()
        // form.encoding = 'utf-8'
        // form.uploadDir = "./uploads";
        // form.keepExtensions = true;

        // console.log(form)

        // console.log(file);

        // if (path.extname(file.name).toLowerCase() !== '.png') {
        //     console.log('running unlink')
        //     return fs.unlink(tempPath, function() {
        //         if (err) throw err;
        //         console.error("Only .png files are allowed!");

        //     });
        // }

        // console.log('running writeFil...e')
        // // fs.rename(tempPath, targetPath, function(err) {
        //     if (err) throw err;
        //     console.log("Upload completed!");
        // });
        // form.parse(req, function(err, fields, files) {

        //     console.log('parsed...')
        //     console.log(err, fields, files)

        // fs.writeFile(targetPath, file, (err) => {
        //     if (err) {
        //         console.log(err)
        //         res.end(err)
        //     } else {
        //         res.end()
        //     }
        // })
    })


    //     app.post('/upload', function(req, res) {

    //     console.log("works");

    //   // if (!req.files)
    //   //   return res.status(400).send('No files were uploaded.');

    //   // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    //   let sampleFile = req.files.sampleFile;
    //  console.log(req.body);
    //   console.log(req.files);
    //   // Use the mv() method to place the file somewhere on your server
    //   sampleFile.mv('/tmp/filename.jpg', function(err) {
    //     if (err)
    //       return res.status(500).send(err);

    //     res.send('File uploaded!');
    //   });
    // });






<<<<<<< HEAD
    // PUT route for updating events
    // app.put("/api/events", function(req, res) {
    //     db.Events.update(req.body, {where: { id: req.body.id }}).then(function(dbEvents) {res.json(dbEvents)});
=======
    // PUT route for updating posts
    // app.put("/api/posts", function(req, res) {
    //     db.Post.update(req.body, {where: { id: req.body.id }}).then(function(dbPost) {res.json(dbPost)});
>>>>>>> master


    // app.post('/upload', function(req, res) {
    //     if (!req.files)
    //         return res.status(400).send('No files were uploaded.');

    //     // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    //     let sampleFile = req.files.sampleFile;

    //     // Use the mv() method to place the file somewhere on your server
    //     sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
    //         if (err)
    //             return res.status(500).send(err);

    //         res.send('File uploaded!');
    //     });
    // });
}



