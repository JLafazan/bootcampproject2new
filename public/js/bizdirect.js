$(document).ready(function() {

// live search for abc order
$('.biz-link').on('click', function(e) {
	// stops page from refreshing
	e.preventDefault();
	// toggle class active
	$(this).toggleClass('active');
	// filter organizations by beginning letter
});

// live search for categories
$('.cat-link').on('click', function(e) {
	// stops page from refreshing
	e.preventDefault();
	// toggle class active
	$(this).toggleClass('active');
	// filter organizations by category
});

$('.ae').on('click', function() {

	// if user clicks this, then all other things not with ae disappear

	$('div').filter('.org-ae').toggleClass('showOrg');

	// $('.org-fj').toggleClass('hideOrg');
	// $('.org-ko').toggleClass('hideOrg');
	// $('.org-pt').toggleClass('hideOrg');
	// $('.org-uz').toggleClass('hideOrg');

});

$('.fj').on('click', function() {

$('div').filter('.org-fj').toggleClass('showOrg');

	// if user clicks this, then all other things not with ae disappear
	// $('.org-ae').toggleClass('hideOrg');
	// $('.org-ko').toggleClass('hideOrg');
	// $('.org-pt').toggleClass('hideOrg');
	// $('.org-uz').toggleClass('hideOrg');

});

$('.ko').on('click', function() {


$('div').filter('.org-ko').toggleClass('showOrg');
	// if user clicks this, then all other things not with ae disappear
	// $('.org-ae').toggleClass('hideOrg');
	// $('.org-fj').toggleClass('hideOrg');
	// $('.org-pt').toggleClass('hideOrg');
	// $('.org-uz').toggleClass('hideOrg');

});

$('.pt').on('click', function() {

$('div').filter('.org-pt').toggleClass('showOrg');

	// if user clicks this, then all other things not with ae disappear
	// $('.org-ae').toggleClass('hideOrg');
	// $('.org-fj').toggleClass('hideOrg');
	// $('.org-ko').toggleClass('hideOrg');
	// $('.org-uz').toggleClass('hideOrg');

});

$('.uz').on('click', function() {

$('div').filter('.org-uz').toggleClass('showOrg');

	// if user clicks this, then all other things not with ae disappear
	// $('.org-ae').toggleClass('hideOrg');
	// $('.org-fj').toggleClass('hideOrg');

});

$('.food-drink').on('click', function() {

	// if user clicks this, then all other things not with ae disappear

	$('div').filter('.fd-box').toggleClass('showOrgFD');
	// $('.ae-box').toggleClass('hideOrg');

});

$('.arts-ent').on('click', function() {

	$('div').filter('.ae-box').toggleClass('showOrgAE');

	

	// if user clicks this, then all other things not with ae disappear
	// $('.fd-box').toggleClass('hideOrg');

});



// var options = {
//   valueNames: [ 'name', 'born' ]
// };

// var userList = new List('users', options);

// $('.ae').on('click', function() {

// });

// $('.ae').on('click',function(){
//   var $text = $(this).text();
//   if($(this).hasClass( 'selected' )){
//     userList.filter();
//     $(this).removeClass('selected');
//   } else {
//     userList.filter(function(item) {
//       return (item.values().born == $text);
//     });
//     $(this).addClass('selected');
//   }
// });

// on hover have info appear

var orgInfo = [
	{
		business: "Test0",
		categories: "A, B, C",
		desc: "This is a test"
	},
	{
		business: "Test1",
		categories: "A, B, C",
		desc: "This is a test"
	},
	{
		business: "Test2",
		categories: "A, B, C",
		desc: "This is a test"
	},
	{
		business: "Test3",
		categories: "A, B, C",
		desc: "This is a test"
	},
];

// var x = orgInfo[0].business;
// console.log(x);

// $( ".org1" ).hover(
//   function() {
//     $( this ).html( $( "<div>" + x + "</div>" ) );
//   }, function() {
//     $( this ).html( "" );
//   }
// );

});