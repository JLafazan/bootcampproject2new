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
  })

  //})


};
