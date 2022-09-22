$(document).ready(function(){
	$('.slider').slick({
		adaptiveHeight: true,
		slidesToShow: 3,
 	 slidesToScroll: 1,
	  responsive: [
		{
			 breakpoint: 760,
			 settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2,
			 }
		},
		{
			 breakpoint: 600,
			 settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1
			 }
		},
		{
			 breakpoint: 480,
			 settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
			 }
		}
  ]
	});
	
});


