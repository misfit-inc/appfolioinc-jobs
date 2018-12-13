// This is the animator for the animated icons based on Airbnb's lottie svg animator.
// http://airbnb.io/lottie/web/getting-started.html
lottie.setQuality('high');

// Parameters for animating the individual animated svg icons
var happiness_step_1_params = {
	container: document.querySelector('.happiness-step-1'),
	renderer: 'svg',
	loop: false,
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
	loop: false,
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
	loop: false,
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
	loop: false,
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
	loop: false,
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
	loop: false,
	autoplay: false,
	animationData: happiness_steps.step_4,
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


	// We have made an iterated version of opening ".afmodal" found in onready.js
	// This queries the value of the data object of the element
	$('.open-afmodal').click(function (e) {
		e.preventDefault();
		var modal_identifier = $(this).data('modal-identifier');
		$('#' + modal_identifier).fadeIn(300);
	});

})(jQuery)