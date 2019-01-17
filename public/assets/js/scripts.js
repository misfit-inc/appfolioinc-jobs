// This is the animator for the animated icons based on Airbnb's lottie svg animator.
// http://airbnb.io/lottie/web/getting-started.html
lottie.setQuality('high');

// Parameters for animating the individual animated svg icons
var happiness_step_1_params = {
	container: document.querySelector('.happiness-step-1'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	animationData: happiness_steps.step_1,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

var happiness_step_2_1_params = {
	container: document.querySelector('.happiness-step-2-1'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	animationData: happiness_steps.step_2,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

var happiness_step_2_2_params = {
	container: document.querySelector('.happiness-step-2-2'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	animationData: happiness_steps.step_2,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

var happiness_step_3_params = {
	container: document.querySelector('.happiness-step-3'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	animationData: happiness_steps.step_3,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

var happiness_step_4_1_params = {
	container: document.querySelector('.happiness-step-4-1'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	animationData: happiness_steps.step_4,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

var happiness_step_4_2_params = {
	container: document.querySelector('.happiness-step-4-2'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	animationData: happiness_steps.step_4,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

var small_focused_teams_params = {
	container: document.querySelector('.svg-small-focused-teams'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	animationData: why_appfolio.small_focused_teams,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

var built_to_last_params = {
	container: document.querySelector('.svg-built-to-last'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	animationData: why_appfolio.built_to_last,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

var customer_first_engineering_params = {
	container: document.querySelector('.svg-customer-first-engieneering'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	animationData: why_appfolio.customer_first_engineering,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

var hard_problems_high_impact_params = {
	container: document.querySelector('.svg-hard-problems-high-impact'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	animationData: why_appfolio.hard_problems_high_impact,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}


};

var program_in_paradise_params = {
	container: document.querySelector('.svg-program-in-paradise'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	animationData: why_appfolio.program_in_paradise,
	rendererSettings: {
		progressiveLoad: true,
		scaleMode: 'noScale',
	}
};

// Assign the lottie loadAnimation to variables
var happiness_step_1_animation = lottie.loadAnimation(happiness_step_1_params),
	happiness_step_2_1_animation = lottie.loadAnimation(happiness_step_2_1_params),
	happiness_step_2_2_animation = lottie.loadAnimation(happiness_step_2_2_params),
	happiness_step_3_animation = lottie.loadAnimation(happiness_step_3_params),
	happiness_step_4_1_animation = lottie.loadAnimation(happiness_step_4_1_params),
	happiness_step_4_2_animation = lottie.loadAnimation(happiness_step_4_2_params);
	

// End animated SVG icons parameters

// jQuery, if it exists will be passed to the function. 
// $ is the name that variable will take in the scope of the function
(function ($) {

	function play_why_appfolio_animation(e) {

		// if ($(e).find('.svg-small-focused-teams').length > 0) {
		// 	lottie.loadAnimation(small_focused_teams_params).play();
		// }

		// if ($(e).find('.svg-built-to-last').length > 0) {
		// 	lottie.loadAnimation(built_to_last_params).play();
		// }

		// if ($(e).find('.svg-customer-first-engieneering').length > 0) {
		// 	lottie.loadAnimation(customer_first_engineering_params).play();
		// }

		// if ($(e).find('.svg-hard-problems-high-impact').length > 0) {
		// 	lottie.loadAnimation(hard_problems_high_impact_params).play();
		// }

		// if ($(e).find('.svg-program-in-paradise').length > 0) {
		// 	lottie.loadAnimation(program_in_paradise_params).play();
		// }
	}

	$("#owl-cards").owlCarousel({
		center: true,
		navigation: true,
		margin: 10,
		slideSpeed: 300,
		items: 5,
		loop: true,
		nav: true,
		navElement: 'div',
		navText: ['<img src="./assets/images/icons/ico-slider-prev.svg">', '<img src="./assets/images/icons/ico-slider-next.svg">'],
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			},
			1280: {
				items: 4
			}
		},
		onInitialized: function(){
			lottie.loadAnimation(small_focused_teams_params).play();
			lottie.loadAnimation(built_to_last_params).play();
			lottie.loadAnimation(customer_first_engineering_params).play();
			lottie.loadAnimation(hard_problems_high_impact_params).play();
			lottie.loadAnimation(program_in_paradise_params).play();
		}
	});

	// This controls the photo masonry at the bottom of the page
	// Set the timeout to provide Isotope time to adjust to page load time
	// https://isotope.metafizzy.co/docs
	setTimeout(function() {
		$('.tiles.photos .tile-container').isotope({
			layoutMode: 'masonry',
			masonry: {
				gutter: 10,
				columnHeight: 20,
			},
		});
	}, 500);

	// Inview controls the fadein of sections as you scroll to the elements into view
	// http://imakewebthings.com/waypoints/shortcuts/inview/
	$('.inview').each(function () {
		var inview = new Waypoint.Inview({
			element: this,
			enter: function (direction) {
				var animation = this.element.dataset.animation;
				$(this.element).addClass(animation);
				if ($(this.element).find('.happiness-step-1').length > 0) {
					
				}
			}
		});
	});

	// Apply inview to all animated SVGs as you scroll to them into view
	// Check and load the designated inviewed SVG
	$('.happiness-step-icon').each(function () {
		var inview = new Waypoint.Inview({
			element: this,
			enter: function (direction) {
				if (this.element.classList.contains('happiness-step-1')) {
					happiness_step_1_animation.play();
				}

				if (this.element.classList.contains('happiness-step-2-1')) {
					happiness_step_2_1_animation.play();
				}

				if (this.element.classList.contains('happiness-step-2-2')) {
					happiness_step_2_2_animation.play();
				}

				if (this.element.classList.contains('happiness-step-3')) {
					happiness_step_3_animation.play();
				}

				if (this.element.classList.contains('happiness-step-4-1')) {
					happiness_step_4_1_animation.play();
				}

				if (this.element.classList.contains('happiness-step-4-2')) {
					happiness_step_4_2_animation.play();
				}
			}
		});
	});

	// document.addEventListener("DOMContentLoaded", function () {

	// 	let owl_cards = [].slice.call(document.querySelectorAll("#owl-cards"));
	// 	let active = false;

	// 	const why_appfolio_animation_load = function () {
	// 		if (active === false) {
	// 			active = true;

	// 			setTimeout(function () {
	// 				owl_cards.forEach(function (owl_card) {
	// 					if ((owl_card.getBoundingClientRect().top <= window.innerHeight && owl_card.getBoundingClientRect().bottom >= 0) && getComputedStyle(owl_card).display !== "none") {

	// 						lottie.loadAnimation(small_focused_teams_params).play();
	// 						lottie.loadAnimation(built_to_last_params).play();
	// 						lottie.loadAnimation(customer_first_engineering_params).play();
	// 						lottie.loadAnimation(hard_problems_high_impact_params).play();
	// 						lottie.loadAnimation(program_in_paradise_params).play();

	// 						owl_cards = owl_cards.filter(function (card) {
	// 							return card !== owl_card;
	// 						});

	// 						if (owl_cards.length === 0) {
	// 							document.removeEventListener("scroll", why_appfolio_animation_load);
	// 							window.removeEventListener("resize", why_appfolio_animation_load);
	// 							window.removeEventListener("orientationchange", why_appfolio_animation_load);
	// 						}
	// 					}
	// 				});

	// 				active = false;
	// 			}, 200);
	// 		}
	// 	};

	// 	document.addEventListener("scroll", why_appfolio_animation_load);
	// 	window.addEventListener("resize", why_appfolio_animation_load);
	// 	window.addEventListener("orientationchange", why_appfolio_animation_load);
	// });

	// We have made an iterated version of opening ".afmodal" found in onready.js
	// This queries the value of the data object of the element
	$('.open-afmodal').click(function (e) {
		e.preventDefault();
		var modal_identifier = $(this).data('modal-identifier');
		$('#' + modal_identifier).fadeIn(300);
	});

	// This controls the hover trigger for the map pins
	// This is also activated depending on the window screen width
	if ($(window).width() > 913) {
		$('.map-pin').hover(function () {
			var hover_data = $(this).data('hover');
			$('.map-detail.' + hover_data).addClass('active');
		}, function () {
			$('.map-detail').removeClass('active');
		});
	} else {
		$('.map-pin').click(function () {
			var hover_data = $(this).data('hover');
			$('.map-detail').removeClass('active');
			$('.map-detail.' + hover_data).toggleClass('active');
		});
	}

})(jQuery)