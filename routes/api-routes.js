// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// requiring passport to authenticate email and password of user
var passport = require("../config/passport");

// Routes
// =============================================================
module.exports = function (app) {
    // GET route for getting all of the events
    app.get("/api/events/", function (req, res) {
        // Event instead of Events allows events to show up in All Events
        db.Event.findAll({})
        // db.Event.findAll({})
            .then(function (dbEvents) {
                res.json(dbEvents);
            });
    });

    // Get route for returning events of a specific category
    app.get("/api/events/category/:category", function (req, res) {
        db.Event.findAll({category: req.params.category})
        .then(function(events){
            res.json(events)
        })
    })

    // Using the passport.auothenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        
    // Since we re doing a POST with javascript, we can't actually redirect that post into a GET request
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


    // Get route for retrieving a single event
    app.get("/api/events/:id", function (req, res) {
        db.Event.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function (dbEvents) {
            res.json(dbEvents);
        });
    });

    // POST route for saving a new event
    app.post("/api/events", function (req, res) {
        console.log(req.body);

        // req.body.photo is coming in a photo url
        db.Event.create({
            name: req.body.name,
            location: req.body.location,
            description: req.body.description,
            category: req.body.category,
            photo: req.body.photo,
            link: req.body.link,
            time: (new Date()).getTime()
        })
        .then(function (dbEvents) {
            res.json(dbEvents);
        });
    });

    // DELETE route for deleting events
    app.delete("/api/events/:id", function (req, res){
        db.Event.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function (dbEvents) {
            res.json(dbEvents);
        });
    });

    // ADDS FAVORITES
    app.put("/api/favorites/:userId/:eventId", function (req, res) {
        console.log(req.params.userId);
        console.log(req.params.eventId);

        db.Favorite.create({
            userId: req.params.userId,
            eventId: req.params.eventId
        })
        .then(function (dbEvents) {
            res.status(200);
        });
    });
};