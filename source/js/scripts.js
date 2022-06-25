$(function () {
  
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
