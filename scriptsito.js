$(document).ready(function() {
  let frases = ["Estudiante", "White Hat"];
  let i = 0;
  setInterval(function() {
    $('#changeword').fadeOut(function() {
      $(this).text(frases[i]).fadeIn();
    });
    i = (i + 1) % frases.length;
  }, 2000);

  $('main').addClass('hidden');

  $('button#metxt').click(function() {
    if ($('main').hasClass('hidden')) {
      $('main').animate({top: '100px', opacity: '1'}, 500);
	  $('main').removeClass('hidden');
    } else {
      $('main').animate({top: '0', opacity: '0'}, 500, function() {
        $('main').addClass('hidden');
      });
    }
  });

	$('#close').click(function() {
	  $('section').toggleClass('closed');
	  if ($('section').hasClass('closed')) {
		$('#close').text('Abrir');
	  } else {
		$('#close').text('Cerrar');
	  }
	});
});