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
  $('.subscribeButton').on('click', function(event) {

    var email = $('.email').val();
    var emailConfirm =  /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (!(email).match(emailConfirm)){
      alert('Thank you for subscribing');
    }
    else {
      event.preventDefault();
      alert('You shall not subscribe!(Please enter valid e-mail address)');
    }
   })
});
