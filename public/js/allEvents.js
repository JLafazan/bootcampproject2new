$(document).ready(function() {
console.log("document.ready");
var eventsContainer = $(".gallery-row");
console.log(eventsContainer);

function getPosts(category) {
console.log('getPosts')
$.get("/api/events", function(events) {
console.log(events);
eventsContainer.empty();    
if (!events || !events.length) {
eventsContainer.html("No events")
} else {
var eventCards = "";
events.forEach(event => {
var eventCard=`<div class="gallery-column">
  <div class="biz-container" id="events-biz-container">
      <a href=${event.link}>
          <img class="org1" src=${event.photo}>
      </a>
      <div class="event-info">
          <h5 class="events-h5 text-center">${event.name}</h5>
          <h6 class="events-h6">${event.description}</h6>
          <button class="add-fav-btn" data_id=${event.id}><h5 class="events-h5"><a class="events-a">Add to favorites!</a></h5></button>
      </div>
  </div>
</div>`;
eventCards += eventCard
})
eventsContainer.html(eventCards);
}
});
}

getPosts();

});
