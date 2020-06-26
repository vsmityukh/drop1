$(function() {

	$('.tab_links a').on('click', function(e){
		e.preventDefault();
		$(this).closest('.tab_links').find('.active').removeClass('active');
		$(this).addClass('active');
		
		var href = $(this).attr('href');
		$('.tab_contents .active').removeClass('active');
		$(href).addClass('active');
	})

 
	$('.top_slider').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1509,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 1100,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	})

  
	$('.cases').scrollbar();
	$('audio').initAudioPlayer();
}); 
