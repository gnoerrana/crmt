jQuery(document).ready(function (){
	if(jQuery('.floating-msg').length) {
		var notifHeight = jQuery('.floating-msg').outerHeight();
		jQuery('body').css({
			'paddingTop':notifHeight
		});
		jQuery('.navbar').css({
			'top':notifHeight
		});
		jQuery('.floating-msg .action-close-save').on('click',function(){
			jQuery('body').addClass('slideUp').css({
				'paddingTop':0
			});
			jQuery('.navbar').css({
				'top':0
			});
			jQuery(this).parents('.floating-msg').css({
				'top':-notifHeight,
				'display':'none'
			});
			setTimeout(function(){
				jQuery('body').removeClass('slideUp')
			},700);
		});
	};
	jQuery('.subscribe-box .close-box').on('click',function(){
		jQuery(this).parents('.subscribe-box').css({
			top:'100%'
		});
		setTimeout(function(){
				var date = new Date();
				var minutes = 1;
				date.setTime(date.getTime() + (minutes * 60 * 1000));
				jQuery.cookie("hideSubscribe", "true", { expires: date });
				jQuery('.subscribe-box').addClass('hide');
		},700);
	});
});



jQuery(window).load(function() {
	if (typeof jQuery.cookie('hideSubscribe') === 'undefined'){
		 jQuery('.subscribe-box').removeClass('hide');
		} else {
		 jQuery('.subscribe-box').addClass('hide');
		}
});

jQuery(window).scroll(function(){
	var docHeight = jQuery(document).height();
	var scrollTop = $(window).scrollTop();
	var winHeight = jQuery(window).height();
	var showCord = (docHeight/3);
	// console.log((docHeight-showCord)+'and'+(scrollTop+winHeight))
	if((scrollTop+winHeight) >= docHeight-showCord) {
		// console.log('show');
		var subscribeHeight = jQuery('.subscribe-box').outerHeight();
			slideUpPos = winHeight-subscribeHeight;
		jQuery('.subscribe-box').addClass('slideUp').css({
			top:slideUpPos
		});
	}
});