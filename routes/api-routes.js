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
var multer = require('multer');

var app = express();

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/api/posts/", function(req, res) {
        db.Post.findAll({})
            .then(function(dbPost) {
                res.json(dbPost);
            });
    });

    // Get route for returning posts of a specific category
    app.get("/api/posts/category/:category", function(req, res) {
        db.Post.findAll({
                where: {
                    category: req.params.category
                }
            })
            .then(function(dbPost) {
                res.json(dbPost);
            });
    });

    // Get route for retrieving a single post
    app.get("/api/posts/:id", function(req, res) {
        db.Post.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbPost) {
                res.json(dbPost);
            });
    });

    // POST route for saving a new post
    app.post("/api/posts", function(req, res) {
        console.log(req.body);

        // use fs to save req.body.photo in /images

        db.Post.create({
                title: req.body.title,
                body: req.body.body,
                category: req.body.category,
                photo: req.body.photo,
            })
            .then(function(dbPost) {
                res.json(dbPost);
            });
    });

    // DELETE route for deleting posts
    app.delete("/api/posts/:id", function(req, res) {
        db.Post.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbPost) {
                res.json(dbPost);
            });
    });



    app.post('/upload', function(req, res) {
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






    // PUT route for updating posts
    // app.put("/api/posts", function(req, res) {
    //     db.Post.update(req.body, {where: { id: req.body.id }}).then(function(dbPost) {res.json(dbPost)});


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



