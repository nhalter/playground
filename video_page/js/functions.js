$ = jQuery;

$(document).ready(function() {
	
	$('input, textarea').placeholder();
	$("#progressbar").progressbar({
		value : 40
	});
	$(".wufoo1").validate({
		messages : {
			email : "Please enter a valid email address",
		},
		highlight : function(element, errorClass, validClass) {
			$(element).addClass(errorClass).removeClass(validClass);
			$(element).parent().addClass(errorClass).removeClass(validClass);
		},
		unhighlight : function(element, errorClass, validClass) {
			$(element).removeClass(errorClass).addClass(validClass);
			$(element).parent().removeClass(errorClass).addClass(validClass);
		},
		onkeyup : false,
		onfocusout : function(element) {
			$(element).valid();
		}
	});
	$('.wufoo1').submit(function(event) {
		if ($('#email_check').val().length != 0)
			return false;
	});
	$(".wufoo2").validate({
		messages : {
			email : "Please enter a valid email address",
		},
		highlight : function(element, errorClass, validClass) {
			$(element).addClass(errorClass).removeClass(validClass);
			$(element).parent().addClass(errorClass).removeClass(validClass);
		},
		unhighlight : function(element, errorClass, validClass) {
			$(element).removeClass(errorClass).addClass(validClass);
			$(element).parent().removeClass(errorClass).addClass(validClass);
		},
		onkeyup : false,
		onfocusout : function(element) {
			$(element).valid();
		}
	});
	$('.wufoo2').submit(function(event) {
		if ($('#email_check').val().length != 0)
			return false;
	});
	$('.popup-with-form').magnificPopup({
		type : 'inline',
		preloader : false,
		focus : '#name',
		fixedContentPos : true,
		fixedBgPos : true,
		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks : {
			beforeOpen : function() {
				if ($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});


