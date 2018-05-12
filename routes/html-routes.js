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
    // Go to use userId to find events favored by this user
    // join between your eventsTable with your favorite table
    /* db.events.findAll({}).then(function(events){
        events.joinOn(dbFavorites.find).then(function(favorites){
    */
    var myFavoriteEvents = [{
      name: "Rihanna in town",
      location: "UC Davis",
      description: "Concert",
      date: "Wed 05/15/2018",
      time: "08:00",
      eventLink: "https://www.ticketmaster.com/Rihanna-tickets/artist/1013826",
      image: "http://www.2hilarious.com/wp-content/uploads/2016/03/IMG_4229.jpg"
    }, {
      name: "Chris Brown in town",
      location: "Sac State",
      description: "Concert",
      date: "Wed 05/15/2018",
      time: "08:00",
      eventLink: "http://atlantablackstar.com/2012/02/11/chris-brown-denied-probation-release-blue-ivy-carter-favors-jay-z/chris-brown-on-stage-2/",
      image: "http://atlantablackstar.com/wp-content/uploads/2012/02/chris-brown-on-stage.jpg"
    }];
    res.render('favorites', { favoritesEvents: myFavoriteEvents, headerName: "My Favorite Events" });
  })
  /*})
  */

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
