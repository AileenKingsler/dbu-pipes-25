$(function () {

  $('.works-slider').slick({
    prevArrow: '<button type="button" class="slick-prev btn btn-secondary"><div class="sr-only">Previous</div><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L2 11.5L12 22" stroke="currentColor" stroke-width="2"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next btn btn-secondary"><div class="sr-only">Previous</div><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 22L11 11.5L0.999998 1" stroke="currentColor" stroke-width="2"/></svg></button>',
    adaptiveHeight: true,
  });

  $('.modal form').submit(function () {
    var th = $(this);

    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize()
    }).done(function () {
      th.trigger('reset');
      $('.send-success').show();
      setTimeout(function () {
        $('.modal').modal('hide')
        $('.send-success').hide();
      }, 3000);
    });

    return false;
  });

});
