// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    res.render("index", { headerName: "My Downtown Sac" });
  });

  app.get("/index", function (req, res) {
    res.render("index", { title: "StoryQuest" });
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


  app.get('/favorites', function (req, res) {
    res.render('favorites', { title: "Users Favorites", favoritesStuff: ['basketball', "movies", "eating"], imageUrl: "/music.jpg" });
  });

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


};
