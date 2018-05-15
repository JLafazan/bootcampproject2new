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
    var events = [{
      id=0,
      name: "Rihana",
      location: "UC Davis",
      time: "8:00pm",
      description: "Rihana in concert",
      photo: "http://www.2hilarious.com/wp-content/uploads/2016/03/IMG_4229.jpg",
      category: "Arts & Entertainment",
      link: "https://www.ticketmaster.com/Rihanna-tickets/artist/1013826"
    },
    {
      id=1,
      name: "Chris Brown",
      location: "Sac State",
      time: "9:00pm",
      description: "Chris Brown in concert",
      photo: "http://i.dailymail.co.uk/i/pix/2015/03/09/2675999100000578-0-image-a-6_1425898063384.jpg",
      category: "Arts & Entertainment",
      link: "https://concerts1.livenation.com/event/1C005476D4FE920E?crosssite=TM_US:1013849:229503&_ga=2.2572400.1940279765.1526354527-2001370559.1526158322&f_PPL=true&ab=efeat5787v1"
    },
    {
      id=2,
      name: "Sac Beerfest",
      location: "K Street Mall",
      time: "Noon",
      description: "Drink lots o beer",
      photo: "https://www.sacramento365.com/wp-content/uploads/sites/www.sacramento365.com/images/2017/01/capitol-beer-fest-1-400x281.jpg",
      category: "Food & Drinks",
      link: "http://www.capitolbeerfest.com/"
    }
    ]

    res.render('favorites', { title: "Users Favorites", favoriteEvents: events });
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
