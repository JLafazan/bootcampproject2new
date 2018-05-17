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
  // app.get("/blog", function (req, res) {
  //   res.render("blog", { headerName: "Events Diary" });
  // });

  app.get('/image.png', function (req, res) {
    res.render("image", { title: "image" });
  });

  app.get("/events", function (req, res) {
    if (req.user) { // We have req.user when a user is logged in
      //res.render("index", { headerName: "My Downtown Sac", action: "Sign-In", user: "true" });
      res.render("events", { headerName: "Downtown Sac Events", userId: req.user.id});
    } else {
      res.render("index", { headerName: "My Downtown Sac", action: "Sign-In" });
    }
    
  });

  // shows user's favorited events (grabbed from the events page) and makes it appear on the favorites page
  // app.get('/api/favorites/:eventid', UserEvents.show);

  app.get('/favorites', isAuthenticated, function (req, res) {    
    res.render('favorites', { title: "User's Favorites", favoritesEvents : [{
      name: "Rihanna",
      location: "California",
      date: "May 17, 2018",
      time: "8pm",
      description: "You know what happens at concerts",
      photo: "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1200x630/format/jpg/quality/85/http%3A%2F%2Fi.huffpost.com%2Fgen%2F1900911%2Fimages%2Fn-SAD-CAT-628x314.jpg",
      category: "Arts & Entertainment",
      link: "https://www.ticketmaster.com/artist/1013826"
    }]
  })
  });

  // gets biz org to display
  // app.get('/bizdirect', function (req, res) {
  //   res.render('bizdirect', {
  //     title: "All Organizations", headerName: "Business Directory"
  //     // categories: ['Food & Drink', 'Arts & Entertainment'],
  //     // categoriesClass: ['food-drink', 'arts-ent']
  //     // imageUrl: "/music.jpg" 
  //   });
  // });

  // gets organizations page for each
  // app.get('/org1', function (req, res) {
  //   res.render('org1', {
  //     headerName: "Buffet Club"

  //   });
  // });

  // res.render('favorites', { headerName: "My Favorite Events", favoritesStuff: ['basketball', "movies", "eating"], imageUrl: "/music.jpg" });
  //})

  // gets biz org to display
  app.get('/bizdirect', function (req, res) {
    res.render('bizdirect', {
      headerName: "All Organizations",
      // categories: ['Food & Drink', 'Arts & Entertainment'],
      // categoriesClass: ['food-drink', 'arts-ent']
      // imageUrl: "/music.jpg" 
    });
  });

  // gets organizations page for each
  app.get('/org1', function (req, res) {
    res.render('org1', {
      headerName: "Buffet Club"
    });
  });

  app.get('/org2', function (req, res) {
    res.render('org2', {
      headerName: "Sacramento Music Improv"
    });
  });

  app.get('/org3', function (req, res) {
    res.render('org3', {
      headerName: "Karaoke Club"
    });
  });

  app.get('/org4', function (req, res) {
    res.render('org4', {
      headerName: "EXTREME Gaming Night"
    });
  });

  app.get('/org5', function (req, res) {
    res.render('org5', {
      headerName: "Gaming at Odd Hours"
    });
  });

  app.get('/org6', function (req, res) {
    res.render('org6', {
      headerName: "Underwater Caroling"
    });
  });


};
