$(document).ready(function() {

  // alert('hi');
  console.log(currentUserId);
  $('button').on('click', function(e) {
    // stop page from refreshing
    e.preventDefault();
    alert('yooo');
    console.log('eyyy');

    $.ajax ({
      type: "PUT",
      eventId: $(this).data('id'),
      userId: $(currentUserId)
    });
  });
  //ajax PUT!!!
});