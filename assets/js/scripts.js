jQuery(document).ready(function() {
  var cond = true;
  new WOW().init();

  $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
  });

  $( ".maps" ).mouseleave(function() {
    $('.maps iframe').css("pointer-events", "none"); 
  });

 //  $('#outono').hover(function(){
 //   $('#outono').attr({src: 'assets/img/outono/02.png'})
 //   .css({cursor: 'pointer'})
 //  },function(){
 //   $('#outono').attr({src: 'assets/img/outono/01.png'})
 // });

  setTimeout(function(){
    if(cond)
      $('#myModal').modal({show:true});
  }, 5000);

  $('#myModal').on('show.bs.modal', function (e) {
    cond = false;
  });

  var $contactForm = $('.contact-form');  

  $contactForm.submit(function(e) {
    e.preventDefault();

    $.ajax({
      url: 'http://formspree.io/contato@nocrio.com.br',
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
