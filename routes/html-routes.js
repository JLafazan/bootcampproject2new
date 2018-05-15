// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");


// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    //If we have a user render index with a "Sign-In" otherwise render index with "Sign Up" action
    if (req.user) { // We have req.user when a user is logged in
      //res.render("index", { headerName: "My Downtown Sac", action: "Sign-In", user: "true" });
      res.redirect("/favorites");
    } else {
      res.render("index", { headerName: "My Downtown Sac", action: "Sign-In" });
    }
  });

  app.get("/new", function (req, res) {
    res.render("index", { headerName: "My Downtown Sac", signup: true, action: "Sign-Up" });
  });

  app.get("/index", function (req, res) {
    //res.render("index", { title: "StoryQuest" });
    res.redirect("/");
  });

  app.get("/cms", function (req, res) {
    res.render("cms", { headerName: "Create Your Event" });
  });

  // blog route loads blog.html
  app.get("/blog", function (req, res) {
    res.render("blog", { headerName: "Events Diary" });
  });

  app.get('/image.png', function (req, res) {
    res.render("image", { title: "image" });
  });

  app.get("/events", function (req, res) {
    res.render("events", { headerName: "Downtown Sac Events" });
  });


  app.get('/favorites', isAuthenticated, function (req, res) {
    res.render('favorites', { title: "Users Favorites", favoritesStuff: ['basketball', "movies", "eating"], imageUrl: "/music.jpg" });
  });

  // gets biz org to display
  app.get('/bizdirect', function (req, res) {
    res.render('bizdirect', {
      title: "All Organizations", headerName: "Business Directory"
      // categories: ['Food & Drink', 'Arts & Entertainment'],
      // categoriesClass: ['food-drink', 'arts-ent']
      // imageUrl: "/music.jpg" 
    });
  });

  // gets organizations page for each
  app.get('/org1', function (req, res) {
    res.render('org1', {
      orgName: "Buffet Club"

    });
  });

  // res.render('favorites', { headerName: "My Favorite Events", favoritesStuff: ['basketball', "movies", "eating"], imageUrl: "/music.jpg" });
  //})

  // gets biz org to display
  app.get('/bizdirect', function (req, res) {
    res.render('bizdirect', {
      title: "All Organizations",
      // categories: ['Food & Drink', 'Arts & Entertainment'],
      // categoriesClass: ['food-drink', 'arts-ent']
      // imageUrl: "/music.jpg" 
    });
  });

  // gets organizations page for each
  app.get('/org1', function (req, res) {
    res.render('org1', {
      orgName: "Buffet Club"
    });
  });

  app.get('/org2', function (req, res) {
    res.render('org2', {
      orgName: "Buffet Club"
    });
  });

  app.get('/org3', function (req, res) {
    res.render('org3', {
      orgName: "Buffet Club"
    });
  });

  app.get('/org4', function (req, res) {
    res.render('org4', {
      orgName: "Buffet Club"
    });
  });

  app.get('/org5', function (req, res) {
    res.render('org5', {
      orgName: "Buffet Club"
    });
  });

  app.get('/org6', function (req, res) {
    res.render('org6', {
      orgName: "Buffet Club"
    });
  });


};
