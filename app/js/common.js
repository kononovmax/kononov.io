$(function() {


// Fixed Blocks

$(window).scroll(function() {

  if($(this).scrollTop() >= 65) {
    $('.navbar__page').addClass('navbar__page--fix');
    $('.main__nav').addClass('nav__page--fix');
    $('.mobnav__page').addClass('mobnav__page--fix');
    $('.call__page').addClass('call__page--fix');
  }
  else{
    $('.navbar__page').removeClass('navbar__page--fix');
    $('.main__nav').removeClass('nav__page--fix');
    $('.mobnav__page').removeClass('mobnav__page--fix');
    $('.call__page').removeClass('call__page--fix');
  }

});


// Scrolling

$('.nav__link').click( function(){
  var scroll_el = $(this).attr('href');
  if ($(scroll_el).length != 0) {
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
   }
  return false;
})


// Navigation

if ( $(window).width() > 1100 ) {

  $('.navbar__head').on('click', function(e) {

    e.preventDefault();

    $(this).toggleClass('navbar__head--active');
    $(this).next().toggleClass('navbar__list--active');

  })

} else {

  $('.navbar__head').addClass('navbar__head--active');
  $('.navbar__list').addClass('navbar__list--active');

  $('.navbar__head').on('click', function(e) {

    e.preventDefault();

    var $list = $(this).next()

    $('.navbar__head').not(this).addClass('navbar__head--active');
    $('.navbar__list').not($list).addClass('navbar__list--active');
    $(this).toggleClass('navbar__head--active');
    $list.toggleClass('navbar__list--active');

  })
  
}


// Form

$('.form__tab').on('click', function(e) {

  e.preventDefault();

  var $this = $(this).attr('href');
  var $tab = $(this).parent();
  var $item = $($this).parent();

  $('.form__input').removeAttr('required');
  $($this).children('.form__input').attr('required', 'required');

  $($tab).children('.form__tab--active').removeClass('form__tab--active');
  $(this).addClass('form__tab--active')

  $($item).children('.form__item--active').removeClass('form__item--active');
  $($this).addClass('form__item--active');

})


// Call

$('.callon').on('click', function(e) {

  e.preventDefault();

  $('.call__page').toggleClass('call__page--active');

})

$('.call__close').on('click', function(e) {

  e.preventDefault();

  $('.call__page').removeClass('call__page--active');

})


// Submit

$("form").submit(function() {
  var th = $(this);
  $('.form__btn').text('Отправление...');
  $.ajax({
    type: "POST",
    url: "../send.php",
    data: th.serialize()
  }).done(function() {
    
    var url = "/thanks.html";
    $(location).attr('href',url);

    $('.form__btn').text('Оставить заявку');

    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
      $('.call__page').removeClass('call__page--active');
    }, 1100);
  });
  return false;
});


});
