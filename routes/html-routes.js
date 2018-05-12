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
    res.render("index", { title: "StoryQuest" });
  });

  app.get("/index", function (req, res) {
    res.render("index", { title: "StoryQuest" });
  });

  app.get("/cms", function (req, res) {
    res.render("cms", { title: "CMS - Express" });
  });

  // blog route loads blog.html
  app.get("/blog", function (req, res) {
    res.render("blog", { title: "blog" });
  });

  app.get('/image.png', function (req, res) {
    res.render("image", { title: "image" });
  });

  // app.get('/favorites', function (req, res) {
  // res.sendFile(path.join(__dirname, "../views/favorites.html"));
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

  //})


};
