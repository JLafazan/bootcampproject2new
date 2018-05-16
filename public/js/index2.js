$(document).ready(function() {
  console.log("document.ready");
  var eventsContainer = $("#main-events");
  console.log(eventsContainer);

  function getPosts(category) {
    console.log('getPosts')
      $.get("/api/events", function(events) {
      console.log("events: ", events);  
      eventsContainer.empty();    
      if (!events || !events.length) {
        eventsContainer.html("No events")
      } else {
        events.forEach(events => {
          eventsContainer.append(`<p>${events.name}: ${events.description}</p>`)
        })
      }
    });
  }

  getPosts();

});
