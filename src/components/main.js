function LazyLoadFunction() {
	var lazyLoad = new LazyLoad({
		elements_selector: ".lazy"
	});
	lazyLoad.update();
}

function OpenOffCanvas() {
	document.querySelector('.offcanvas').classList.add('open');
	document.querySelector('body').classList.add('offcanvas-container');
}

function CloseOffCanvas() {
	document.querySelector('.offcanvas').classList.remove('open');
	document.querySelector('body').classList.remove('offcanvas-container');
}

$(document).ready(function () {
	const currentDate = new Date();
	document.getElementById('year').innerHTML = currentDate.getFullYear();

	document.querySelector('.header-mobile__button__open').addEventListener('click', function () {
		OpenOffCanvas();
	})
	document.querySelector('.header-mobile__button__close').addEventListener('click', function (e) {
		e.preventDefault();
		CloseOffCanvas();
	})

	// When the user clicks anywhere outside of the offcanvas, close it
	window.onclick = function (e) {
		// console.log(e.target);
		if (e.target === document.querySelector('.offcanvas.open')) {
			CloseOffCanvas();
		}
	}

	var previousScroll = document.documentElement.scrollTop;

	window.onscroll = function () {
		// console.log(document.documentElement.scrollTop, 'scrolltop position');
		// console.log(previousScroll, 'previousScroll before');
		// console.log(window.pageYOffset, 'pageYOffset');

		// back-2-top
		if (document.documentElement.scrollTop > 100) {
			document.querySelector('.btn-back-2-top').style.visibility = 'visible';
			document.querySelector('.btn-back-2-top').style.opacity = '1';
		} else {
			document.querySelector('.btn-back-2-top').style.visibility = 'hidden';
			document.querySelector('.btn-back-2-top').style.opacity = '0';
		}

		// scroll header
		if (document.documentElement.scrollTop >= previousScroll) {
			// console.log('down');
			document.querySelector('.header-desktop').classList.add('scroll-down');
			previousScroll = document.documentElement.scrollTop;
		} else if (document.documentElement.scrollTop < previousScroll) {
			// console.log('up');
			document.querySelector('.header-desktop').classList.remove('scroll-down');
			previousScroll = document.documentElement.scrollTop;
		}
	}


	// back-2-top
	$(window).scroll(function () {
		// // count number
		// if ($(this).scrollTop() > 1100) {
		// 	$('.sum span').each(function () {
		// 		var $this = $(this),
		// 			countTo = $this.attr('data-count');
		// 		$({
		// 			countNum: $this.text()
		// 		}).animate({
		// 			countNum: countTo
		// 		}, {
		// 			duration: 2500,
		// 			easing: 'linear',
		// 			step: function () {
		// 				$this.text(Math.floor(this.countNum));
		// 			},
		// 			complete: function () {
		// 				$this.text(this.countNum);
		// 			}
		// 		});
		// 	});
		// }
	})

	$('.btn-back-2-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	})

	// Slider
	new Swiper('.home-banner .swiper-container', {
		loop: true,
		effect: 'coverflow',
		speed: 3000,
		lazy: true,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.home-banner .pagination',
			clickable: true
		},
	});
	new Swiper('.hoat-dong-mirai .swiper-container', {
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		speed: 1500,
		breakpoints: {
			slidesPerView: 1,
			768: {
				slidesPerView: 3
			}
		},
		pagination: {
			el: '.hoat-dong-mirai .swiper-pagination',
			clickable: true
		},
	});
	new Swiper('.cam-nhan-hoc-vien .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
		},
		speed: 2000,
		breakpoints: {
			768: {
				slidesPerView: 2
			}
		},
		pagination: {
			el: '.cam-nhan-hoc-vien .swiper-pagination',
			clickable: true
		},
	});

	let homeVideoRight = new Swiper('.home-video .right', {
		allowSlidePrev: false,
		allowSlideNext: false
	});
	new Swiper('.home-video .left', {
		slidesPerView: 1,
		spaceBetween: 15,
		slideToClickedSlide: true,
		speed: 2000,
		thumbs: {
			swiper: homeVideoRight
		}
	});

	// Tabs viec lam
	$('.viec-lam-title li').on('click', function () {
		$('.viec-lam-title li').removeClass('active')
		$(this).addClass('active')
		var currentTabsOpen = $(this).attr('tabs');
		$('.tabs-content-wrap').each(function () {
			$(this).removeClass('active')
			if ($(this).attr('tabs') === currentTabsOpen) {
				$(this).addClass('active')
			}
		})
	})


	// stuff-hoi-dap
	$('.toggle-stuff').click(function () {
		$('.stuff-hoi-dap').toggleClass('active')
	})
	$('.hoi-dap .item-title').click(function () {
		$(this).parent().toggleClass('active');
		$(this).siblings('.item-content').slideToggle();
	})
	// tuyen-dung-popup
	$('.tuyen-dung .btn-so-yeu-li-lich').click(function () {
		$('.tuyen-dung-popup').addClass('active')
		$('.tuyen-dung-popup-background').addClass('active')
	})
	// close popup
	$('.tuyen-dung-popup .mdi-close').click(function () {
		$('.tuyen-dung-popup').removeClass('active')
		$('.tuyen-dung-popup-background').removeClass('active')
	})

	LazyLoadFunction();
});