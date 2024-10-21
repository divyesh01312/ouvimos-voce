// JavaScript Document
$(document).ready(function() {
	/* navigation */
	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
	  });
	document.addEventListener('click',function(e){
		/* Hamburger menu */
		if(e.target.classList.contains('hamburger-toggle')){
			e.target.children[0].classList.toggle('active');
		}
	});
	$(".navbar-toggler").click(function () {
		$("html").toggleClass("nav-menu-open overflow-hidden");
	});
	$(".close").click(function () {
		$("html").toggleClass("nav-menu-open overflow-hidden");
	});
	/* navigation */

	/*carousel */
	$('.customers-with-us-slick').slick({
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000, 
		speed: 1000,         
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},

			{
				breakpoint: 574,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},

			
		]
	});
	/* lazyload */
	var myLazyLoad = new LazyLoad();
	myLazyLoad.update();
	/* lazyload */
	/* OFI Browser */
	objectFitImages();
});

