jQuery(document).ready(function() {
  new WOW().init();

  $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
  });

  $( ".maps" ).mouseleave(function() {
    $('.maps iframe').css("pointer-events", "none"); 
  });

  $('#verao').hover(function(){
    $(this).attr({src: 'assets/img/images/verao-02.jpeg'});
  });
  $('#verao').mouseout(function(){
    $(this).attr({src: 'assets/img/images/verao-01.jpeg'});
  });

  var $contactForm = $('.contact-form');  

  $contactForm.submit(function(e) {
    e.preventDefault();

    $.ajax({
      url: 'http://formspree.io/danilo.teemo@gmail.com',
      type: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      beforeSend: function() {
        $contactForm.find('#msgForm').html('<div class="alert alert-info">Enviando mensagem</div>');
        $contactForm[0].reset();
      },
      success: function(data) {
        $contactForm.find('.alert-info').html('<div class="alert alert-success">Mensagem enviada!</div>').removeClass('alert alert-info');
      },
      error: function(err) {
        $contactForm.find('.alert-info').html('<div class="alert alert-danger">Ocorreu um erro ao enviar sua mensagem, tente novamente mais tarde.</div>').removeClass('alert alert-info');
      }
    });
  });
});
