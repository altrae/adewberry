/* Loading Script */
$(window).load(function() {
	"use strict";
	$(".loader").delay(500).fadeOut();
	$("#mask").delay(1000).fadeOut("slow");
});

/* Flexslider */
$(window).load(function() {
	"use strict";
	$(".flexslider").flexslider({
		animation: "fade",
		start: function(slider) {
			$(".np-controls a.next").click(function(event){
				event.preventDefault();
				slider.flexAnimate(slider.getTarget("next"));
			});
			$(".np-controls a.previous").click(function(event){
				event.preventDefault();
				slider.flexAnimate(slider.getTarget("previous"));
			});
		}
	});
});

/* Mixitup Portfolio */
jQuery(document).ready(function($) {
	"use strict";
	$("#portfolio").mixitup({
		targetSelector: '.item',
		transitionSpeed: 450
	});
});

/* Nivo - Lightbox */
jQuery(document).ready(function($) {
	"use strict";
	$(".nivo-lbox").nivoLightbox({ effect: 'fade' });
});

/* Skills */
jQuery(document).ready(function($) {
	"use strict";
	$('.skills-info').appear(function() {
	$('.skill1').css('width', '95%');
	$('.skill2').css('width', '85%');
	$('.skill3').css('width', '80%');
	$('.skill4').css('width', '70%');
	$('.skill5').css('width', '95%');
	$('.skill6').css('width', '15%');
	},{accX: 0, accY: -150});
});

/* Google map */
jQuery(document).ready(function() {
	"use strict";
	var map = new GMaps({
		el:"#map",
		lat:32.7767,
		lng:-96.7970,
		zoom:12,
		zoomControl:true,
		zoomControlOpt: {
			style:"BIG",
			position:"TOP_LEFT"
		},
		panControl:true,
		streetViewControl:false,
		mapTypeControl:false,
		overviewMapControl:false
	});
	var styles = [{
		stylers: [
			{ hue:"#00ffe6" },
			{ saturation:-100 }
		]
	}];
	map.addStyle({
		styledMapName:"Styled Map",
		styles: styles,
		mapTypeId:"map_style"  
	});
	map.setStyle("map_style");
	map.addMarker({
		lat:32.7767,
		lng:-96.7970,
		icon:"images/marker.png"
	});
});

/* contact options */
jQuery(document).ready(function() {
	"use strict";
	phone("2979", "743", "412");
	email("moc.liamg", "dka.aws");
});

/* resume show/hide */
jQuery(document).ready(function() {
	"use strict";
	$('.list-container').hide();
	$('.company a').click(function() {
		var target = "#" + $(this).data('target');
		$(target).toggle();
		if ($('#swa-job-all').is(':visible'))
			$('#swa-job-tech').hide();
		else if ($('#swa-job-all').is(':hidden'))
			$('#swa-job-tech').show();
	});
});

/* apply qtip */
jQuery(document).ready(function() {
	"use strict"
	$(".item a[title][title!=]").each(function() {
		/* Get the value of the following span */
		var value = $(this).next("span")[0].innerHTML;
		/* Get the title */
		var title = $(this).attr("title");

		/* Apply the qtip */
		$(this).qtip({
			style: {
				classes: 'qtip-bootstrap'
			},
			content: {
				text: value,
				title: title
			},
			show: {
				modal: {
					on: false
				}
			},
			position: {
				/*effect: function(api, pos, viewport) {
				// "this" refers to the tooltip
				$(this).animate(pos, {
					duration: 600,
					easing: 'linear',
					queue: false // Set this to false so it doesn't interfere with the show/hide animations
				});*/
				my: 'top center',
				at: 'bottom center'
			}
		});
	});
});


/* test functions */
function removeTitle() {
	/* remove the title attribute */
	$(".item a[title][title!=]").each(function() {
		$this = $(this);
		$.data(this, "title", $this.attr("title"));
		alert(JSON.stringify($(this).data("title"), null, "  "));
		$this.removeAttr("title");
	});
}

function displayDate() {
	var time = new Date($.now());
	$("#demo").empty().append(time);
}

$(function() {
	alert("dosome");
	$("#dosomething").click(function() {
		var time = new Date($.now());
		$("#demo").empty().append(time);
	});
});