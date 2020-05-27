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
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false
		},
		pagination: {
			el: '.home-banner .pagination',
			clickable: true
		},
	});
	new Swiper('.home-news__main .swiper-container', {
		slideToClickedSlide: true,
		spaceBetween: 16,
		loop: true,
		speed: 2000,
		// autoHeight: true,
		navigation: {
			nextEl: '.home-news__main__nav-next',
			prevEl: '.home-news__main__nav-prev'
		},
		// autoplay: {
		// 	delay: 5000,
		// 	disableOnInteraction: false
		// },
		breakpoints: {
			768: {
				speed: 3000
			}
		}
	});
	new Swiper('.home-news__sub .swiper-container', {
		direction: 'vertical',
		slidesPerView: 'auto',
		autoHeight: true,
		loop: true,
		navigation: {
			nextEl: '.home-news__sub__nav-next',
			prevEl: '.home-news__sub__nav-prev'
		},
	});

	new Swiper('.home-lienket .swiper-container', {
		loop: true,
		speed: 3000,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false
		},
		slidesPerView: 2,
		breakpoints: {
			768: {
				slidesPerView: 3
			},
			992: {
				slidesPerView: 4
			},
		}
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
	let tuyenSinhBanerRight = new Swiper('.tuyensinh-banner .swiper-container.right', {
		effect: 'coverflow',
		speed: 2500,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
	});
	new Swiper('.tuyensinh-banner .swiper-container.left', {
		loop: true,
		speed: 2500,
		spaceBetween: 30,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.tuyensinh-banner .swiper-pagination',
			clickable: true
		},
		thumbs: {
			swiper: tuyenSinhBanerRight
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

	// hoi-dap-page
	$('.hoi-dap .item-title').click(function () {
		$(this).parent().toggleClass('active');
		$(this).siblings('.item-content').slideToggle();
	})

	// hoi-dap-page toggle tabs
	const hoiDapSideBarItem = document.querySelectorAll('.hoi-dap .sidebar li');
	const hoiDapTabs = document.querySelectorAll('.hoi-dap [tab]');
	const hoiDapSubTitle = document.querySelector('.hoi-dap .sub-title');
	hoiDapSideBarItem.forEach(function (item) {
		item.addEventListener('click', function () {
			hoiDapTabs.forEach(function (tab) { tab.classList.remove('active') });
			this.classList.add('active');
			hoiDapSubTitle.innerHTML = this.innerHTML;
			document.querySelector(`.hoi-dap-content [tab= ` + this.getAttribute('tab') + `]`).classList.add('active');
		})
	});


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