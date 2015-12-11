(function() {

// Localize jQuery variable
var jQuery;

/******** Load jQuery if not present *********/
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
        "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler();
          }
      };
    } else { // Other browsers
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);
    // Call our main function
    main(); 
}

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

/******** Our main function ********/
function main() { 
    jQuery(document).ready(function($) { 
        // We can use jQuery 1.4.2 here

        /******* Load CSS *******/
        var css_link = $("<link>", { 
            rel: "stylesheet", 
            type: "text/css", 
            href: "_css/udc-srch-style.css" 
        });
        css_link.appendTo('head');

        /* show the udc container (which is by default hidden so styles can load) */
        $('#udc-container').fadeIn('slow');

	  	$('#btn-close, .lnk-close').click(function(event) {
            event.preventDefault();
	  		$('#udc-container').fadeOut('slow');
	  	});

	  	$("#udc-form").submit(function(e) {
	  		e.preventDefault();

	  		/* Validation */
	  		var valid = 1;
		    var emailaddress = $('#email').val();

		    $('.error').removeClass('error');
	  		$('.frm-err-lbl').hide();

		    if( !isValidEmailAddress( emailaddress ) ) { 
		    	var valid = 0;
		    	$('input#email').after('<div class="frm-err-lbl">Please enter a valid email address</div>');
		    	$('.email').addClass('error');
		    }
		    if($('input#firstname').val() === "") {
		    	var valid = 0;
		    	$('input#firstname').after('<div class="frm-err-lbl">Please enter your first name</div>');
		    	$('.fname').addClass('error');
		    }
		    if($('input#lastname').val() === "") {
		    	var valid = 0;
		    	$('input#lastname').after('<div class="frm-err-lbl">Please enter your last name</div>');
		    	$('.lname').addClass('error');
		    }

		    if( valid == 1 ) {

		    	/* Post AJAX */

		    	/* Post success */
		    	$('#udc-screen-start').hide();
		    	$('#udc-screen-confirm').fadeIn('slow');

		    }
		    
		}); 
    });
}

})(); // We call our anonymous function immediately
