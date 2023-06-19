$('.gallery__large-img').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	autoplay: true,
	autoplaySpeed: 3000,
	asNavFor: '.gallery__photos-thumbnails',
})
$('.gallery__photos-thumbnails').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	asNavFor: '.gallery__large-img',
	dots: false,
	centerMode: true,
	arrows: false,
	focusOnSelect: true,
})
