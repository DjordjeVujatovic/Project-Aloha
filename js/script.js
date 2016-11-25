//SMOOTH SCROLL////////////////////////////////////////

$(function() {
  var offset = $("header").height();
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - offset
        }, 1000);
        return false;
      }
    }
  });
});

//SUBSCRIPTION POPUP///////////////////////////////////

$(function(event) {
  $('.signUpSection').on('submit','form', function(event) {
    event.preventDefault();
    var $email = $('#yourEmail')

    if ($email.val().length !== 0 ){
      alert('Thank you for subscribing');
    }
    else {
      alert('You shall not subscribe!(Please enter valid e-mail address)');
    }
   })
});
