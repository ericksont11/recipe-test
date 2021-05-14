// Parallax function

$(document).ready(function () {
  $('.parallax').parallax();
});


// $('.dropdown-trigger').dropdown();
$('.dropdown-trigger').dropdown();


// jquery for switch to toggle language nav

$(document).ready(function () {
  $('select').formSelect();
});

$(document).on('change', '#check', function (e) {
  if ($(this).is(':checked')) {
    $(".hidenav").show();
  } else {
    $(".hidenav").hide();
  }
})
// sidebar mobile function
$(document).ready(function () {
  $('.sidenav').sidenav();
});

// jquery to change background parallax picture to pair with the food
var url = window.location.href
url = url.slice(url.lastIndexOf('?') + 1);

console.log(window.location)
console.log(url)
$('#backgroundimg').attr('src', url);


// onclick function for recipe page to change background with recipe
$(function () {

  $('.french-recipe').on('click', function () {
    $('#backgroundimg').attr('src', 'assets/images/francestreet.jpg');
  });

});

$(function () {

  $('#italian-recipe').on('click', function () {
    $('#backgroundimg').attr('src', 'assets/images/italystreet.jpg');
  });

});

$(function () {

  $('#mexican-recipe').on('click', function () {
    $('#backgroundimg').attr('src', 'assets/images/mexicostreet.jpg');
  });

});

$(function () {

  $('#japanese-recipe').on('click', function () {
    $('#backgroundimg').attr('src', 'assets/images/japanstreet.jpg');
  });

});

$(function () {

  $('#malaysian-recipe').on('click', function () {
    $('#backgroundimg').attr('src', 'assets/images/malaysiapic.jpg');
  });

});

$(function () {

  $('#greek-recipe').on('click', function () {
    $('#backgroundimg').attr('src', 'assets/images/greecepic.jpg');
  });

});