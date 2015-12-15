$(document).ready(function() {

	/* test data */
	var test = 1;
	if(test == 1) {
		$('#firstname').val("Damien");
		$('#lastname').val("Test");
		$('#email').val("test@test.com");
	}

	var error = 0;
	if(error == 1) {
		$('#udc-screen-start, #udc-screen-1, #udc-screen-confirm').hide();
		$('#udc-screen-error, #udc-error').css("display", "block");
	}

	var loading = 0;
	if(loading == 1) {
		$('#udc-screen-confirm, #udc-screen-error').hide();
		$('#step-2').css("display", "block");
		$('#firstname, #lastname, #email, #custom-3634, #udc-btn-1' ).prop( "disabled", true ).addClass('disabled');
		$('#udc-btn-1').val('').empty().addClass('btn-loader');
	}


});