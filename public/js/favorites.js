$(document).ready(function() {

  // alert('hi');
  
  $('body').on('click','.add-fav-btn', function(e) {
    // stop page from refreshing
    e.preventDefault();
    alert('yooo');
    console.log('eyyy');

console.log('current user is ' + currentUserId);
    console.log('event id is' + $(this).attr('data_id'));

    $.ajax ({
      type: "PUT",
      url: '/api/favorites/' + $(currentUserId) + "/" + $(this).attr('data_id')
    });
  });
});