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
        events.forEach(event => {
          var eventCard= $('<div class="card" style="width: 18rem;">');
          eventCard.append(`<img class="card-img-top" src=${event.photo} alt="Card image cap">`);
            eventCard.append('<div class="card-body">');
            eventCard.append(`<h5 class="card-title">${event.name}</h5>`)
            eventCard.append(`<p class="card-text">${event.description}</p>`);
            eventCard.append(`<a href=${event.link} class="btn btn-primary">More info</a>`);
          eventsContainer.append(eventCard);
        })
      }
    });
  }

  getPosts();

});
