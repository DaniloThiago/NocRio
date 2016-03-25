jQuery(document).ready(function() {
  new WOW().init();

  $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
  });

  $( ".maps" ).mouseleave(function() {
    $('.maps iframe').css("pointer-events", "none"); 
  });

  var $contactForm = $('#contact-form');
  console.log($contactForm);

  $contactForm.submit(function(e) {
    e.preventDefault();
    console.log(e);
    $.ajax({
      url: '//formspree.io/danilo.teemo@gmail.com',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      beforeSend: function() {
        $contactForm.append('<div class="alert alert--loading">Enviando mensagem</div>');
      },
      success: function(data) {
        $contactForm.find('.alert--loading').hide();
        $contactForm.append('<div class="alert alert--success">Mensagem enviada!</div>');
      },
      error: function(err) {
        $contactForm.find('.alert--loading').hide();
        $contactForm.append('<div class="alert alert--error">Ocorreu um erro ao enviar sua mensagem, tente novamente mais tarde.</div>');
      }
    });
  });
});
