(function() {

// Localize jQuery variable
var jQuery;

/******** Load jQuery if not present *********/
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
        "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js");
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

        /* show the udc container (which is by default hidden so styles can load) */
        $('h2:nth-of-type(4)').before('<div id="udc-2-container"> <style type="text/css" scoped> .cf:before, .cf:after{content: " "; /* 1 */ display: table; /* 2 */}.cf:after{clear: both;}.cf{*zoom: 1;}#udc-2-card{width: 100%; background-color: #fff; text-align: center; margin: 60px 0 30px 0; color: #05171d; box-shadow: 0 0 20px -2px rgba(43, 50, 57, 0.18); box-sizing: border-box; border: 1px solid #e0e0e0; position: relative; max-width: 615px;}#udc-2-card h1{font-size: 36px; line-height: 42px; margin-top: 42px; margin-bottom: 24px; font-family: StagSansWeb-Medium, Helvetica, Arial, sans-serif; padding: 0 2%;}#udc-2-card h2{font-size: 18px; line-height: 30px; font-family: StagSansWeb-Book, Helvetica, Arial, sans-serif !important; padding: 0 12%; color: #d81b60;}#udc-2-card h3{font-size: 24px; line-height: 36px; font-family: StagSansWeb-Book, Helvetica, Arial, sans-serif !important; padding: 12px 0;}#udc-2-form{padding-top: 30px;}#udc-2-card select, #udc-2-card input[type="email"], #udc-2-card input[type="text"]{height: 48px !important; font-family: "Open Sans", sans-serif; padding-left: 18px; border: 2px solid #e0e0e0; color: #212121; width: 100% !important; max-width: 400px;}#udc-2-card select:focus, #udc-2-card select:active, #udc-2-card input:focus, #udc-2-card input:active{border: 2px solid #2196f3;}#udc-2-card select:hover, #udc-2-card input:hover{border: 2px solid #616161;}.udc-2-frm-row{margin-bottom: 24px;}#udc-2-card label{font-family: "StagSansWeb-Medium", "Helvetica Neue", Helvetica, Arial, sans-serif; display: block;}#udc-2-card label#udc-2-opt-in-lbl{font-size: 14px; display: block; padding-left: 36px; margin-top: -25px; font-family: "Open Sans", sans-serif;}#udc-2-card .row-1{margin-bottom: 54px; padding: 0 20px;}#udc-2-card #step-2{background-color: #f5f5f5; padding: 24px 20px 0px 20px; text-align: left; position: relative; display: none;}#udc-2-card #left, #udc-2-card #right{padding: 0 15%;}#udc-2-card button{-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; background: #d32f2f; color: #fff; font-family: StagSansWeb-Book, Helvetica, Arial, sans-serif; font-size: 18px; width: 100%; height: 54px; text-align: center; transition: background .25s ease-in-out; -moz-transition: background .25s ease-in-out; -webkit-transition: background .25s ease-in-out; padding: 0 30px;}#udc-2-card button:hover{background: #b71c1c;}#udc-2-card ul{margin-bottom: 36px;}#udc-2-card ul li{list-style-type: none; list-style: none; background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAQCAYAAAD9L+QYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRDMyNEQ3OTkwNkQxMUU1QTY5ODgxMkM4OTE0QTJENSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRDMyNEQ3QTkwNkQxMUU1QTY5ODgxMkM4OTE0QTJENSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVEMzI0RDc3OTA2RDExRTVBNjk4ODEyQzg5MTRBMkQ1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVEMzI0RDc4OTA2RDExRTVBNjk4ODEyQzg5MTRBMkQ1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LhWTUgAAAUxJREFUeNqs1M8rBHEYx/EZJqs9uKBIcZNSioOUwlX+AUeOrpRfRdqQpNZtOYmkPXCU3CgcXMnBbU8c9qCUKOH91GdqaLbd9Z1vvZp2Z76ffeZ5ZtZPTVx5Lut9b/DX5/rJ6yYO8zgMvASXgtfRgvEgweBWDqtoxh3WgoSC2xTcqOAM7frwXXvO6rAq0YBbbBD8aSdcK+/EsoJvsBUGu4ZbcAZpXCJL8Ff0ghqdHINfRXCPWmF7z+OCw8pX0IV27OC7THAfFlGHM9tDcOweq/wAbxjFtL4rtfqxpOAT5EoFh+H3GsorhvV2xc1iCAuoRR775XoXVvmoW33BgKpLRa4bwYyC7U6PKhlMtAUFzKGIXs0iHWmXDXwXx5VO/W9/nzCLZ3RjG1Macg6n1TyrccMr6gcK+gOy4KyeDM813FPvbQYP2MTFf96yHwEGAJeMUPM2DY1VAAAAAElFTkSuQmCC") no-repeat 0px 20px; padding-left: 36px; font-family: "Open Sans", sans-serif; font-size: 18px; line-height: 36px; margin-left: 4px;}#hide{width: 100%; text-align: center; font-size: 14px; margin-bottom: 6px;}#hide a{font-family: "Open Sans", sans-serif;}#udc-2-loading, #udc-2-confirm, #udc-2-error{display: none;}#udc-2-error, #udc-2-confirm{padding-bottom: 30px;}#udc-2-loading{position: absolute; height: 100%; width: 100%; top: 0; background-color: #fff; padding-top: 60px;}#btn-close, #btn-reload{max-width: 300px; margin: 24px 0 18px 0;}#udc-2-form p small, #udc-2-error p small{padding: 0 20px; line-height: 1.65em;}#udc-2-form .udc-2-frm-row.error input{border-color: #f18289 !important;}#udc-2-form .udc-2-frm-row.error label{color: #ff2a56 !important;}#udc-2-form .frm-err-lbl{font-size: 14px; color: #ff2a56;}.disabled{background-color: #e0e0e0 !important; transition-property: background-color, color; transition-duration: 200ms; transition-timing-function: ease-in-out;}.btn-loader{background: #d32f2f url("data:image/gif;base64,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") no-repeat center !important;}.social-icons{text-align: center;}.social-icons img{display: inline-block;}h3.social-heading{color: #616161 !important; font-size: 1.2em !important; margin-top: .5em !important;}@media screen and (max-width: 1249px){#udc-2-card #left, #udc-2-card #right{float: none; width: 100%; padding: 0 8%;}#udc-2-card #step-2{padding: 24px 20px 0px 20px;}}@media screen and (max-width: 767px){#udc-2-card h2{padding: 0 20px !important;}#udc-2-form{padding-top: 18px;}}@media screen and (max-width: 370px){#udc-2-card select{white-space: nowrap; padding-right: 34px;}}</style> <div id="udc-2-card"> <div id="udc-2-screen-1"> <h1>Get the inside track from <br>Which? University</h1> <h2>Receive our free guides and tips straight to your inbox</h2> <form id="udc-2-form" action="#" method="post"> <div class="udc-2-frm-row row-1"> <label for="custom-3634">I am a...</label> <select id="custom-3634" name="custom-3634" required> <option value="" selected disabled>Student, Parent or Teacher</option> <option value="Student">Student</option> <option value="Parent">Parent</option> <option value="Teacher">Teacher</option> </select> </div><div id="step-2" class="cf"> <h3>You\'ll receive:</h3> <div class="Parent"> <ul> <li>The <em>Which? Parents" Guide to University</em></li><li>What parents need to know about student finance </li><li>Help them with bills, budgets and money matters</li><li>Packing, preparing and products they should take</li></ul> </div><div class="Student"> <ul> <li>The complete <em>Getting Into Uni Guide</em></li><li>Insider tips from students and universities on applications</li><li>Expert advice on writing your personal statement</li><li>Best student bank accounts, gadgets and what to take</li></ul> </div><div class="Teacher"> <ul> <li>Timely tips and materials to use in the classroom</li><li>Graphics, guides and posters to download for free</li><li>Be the first to receive brand-new resources</li><li>Practical pointers to help your students succeed</li></ul> </div><div class="udc-2-frm-row fname"> <label for="firstname">First name</label> <input type="text" id="firstname" name="firstname"> </div><div class="udc-2-frm-row lname"> <label for="lastname">Last name</label> <input type="text" id="lastname" name="lastname"> </div><div class="udc-2-frm-row email"> <label for="email">Email address</label> <input type="email" id="email" name="email"> </div><div class="udc-2-frm-row chkbox"> <small>In pressing the button below you agree that we can keep you informed by email about Which? University and other products and services from the Which? Group. Your data will be processed in accordance with our <a href="http://university.which.co.uk/about/privacy-policy">privacy policy</a></small></div><div class="udc-2-frm-row"> <button type="submit" id="udc-2-btn-1">Sign me up</button> </div><div id="hide"><a href="#" id="">Hide this</a></div></div></form> </div><div id="udc-2-confirm"> <h1>Thank you!</h1> <h2>You\'re all signed up. Look out for your welcome email from us shortly.</h2> <h3 class="social-heading">Follow Which? University</h3> <div class="social-icons"> <a href="https://www.facebook.com/WhichUniversity/" id="facebook"><img src="https://s.bsd.net/whichcouk/cai/page/-/i-facebook.png" alt="Facebook"></a> <a href="https://twitter.com/WhichuniUK" id="twitter"><img src="https://s.bsd.net/whichcouk/cai/page/-/i-twitter.png" alt="Twitter"></a> <a href="https://www.youtube.com/channel/UCE4wTl717NEgaY-nyHVE6dw" id="youtube"><img src="https://s.bsd.net/whichcouk/cai/page/-/i-youtube.png" alt="YouTube"></a> </div><button id="btn-close">Close this box</button> </div><div id="udc-2-error"> <h1>Oh, no!</h1> <h2>Sorry, there"s been an error...</h2> <button id="btn-reload">Try again</button> <p><small>If you experience persistent problems, please contact us at whichuniversity@which.co.uk<br><a href="#" class="lnk-close">...or close this box</a></small></p><div id="hide"></div></div></div></div>');

        $('#custom-3634').change(function() {
	  		var option = $(this).find('option:selected').val();
	  		$('.Student, .Parent, .Teacher').hide();
	  		$('.'+option).show();
	  		$('#step-2').slideDown();
	  		$('html, body').animate({
		        scrollTop: $("#step-2").offset().top
		    }, 1000);
	  	});

	  	$('#hide a').click(function(e) {
	  		e.preventDefault();
	  		$('#step-2').slideUp();
	  		$('#custom-3634').prop('selectedIndex',0);
	  		$('html, body').animate({
		        scrollTop: $("#udc-2-card").offset().top
		    }, 1000);
	  	});

	  	$('#btn-close, .lnk-close').click(function(event) {
            event.preventDefault();
	  		$('#udc-2-container').fadeOut('slow');
	  	});

	  	$('#btn-reload').click(function() {
	  		location.reload(true);
	  	});

	  	$("#udc-2-form").submit(function(e) {
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
        		$('#firstname, #lastname, #email, #custom-3634, #udc-btn-1').addClass('disabled');
				$('#udc-2-btn-1').val('').empty().addClass('btn-loader');		

				// Post the form data using the new BSD signup API
				// http://tools.bluestatedigital.com/kb/entry/new-signup-api/
				// curl 'https://whichcouk.bsd.net/page/sapi/nuisance-call-sign-up-to-tps' -H 'Content-Type: application/x-www-form-urlencoded' --data 'email=damien%40betenoir.net&firstname=steve&lastname=gallagher&custom-2019=07812043315'
				var data_step_1 = $('#udc-2-form').serialize();

				var url_step_1 = 'https://cai-whichcouk.bsd.net/page/sapi/uni-data-capture';
				// alert(data_step_1);
				var jqxhr = $.post(url_step_1, data_step_1)
							.done(function() {
								$('#udc-2-screen-1').hide();
								$('#udc-2-confirm').fadeIn('fast');
								$('html, body').animate({scrollTop: $('#udc-2-container').offset().top -50 }, 500);
							})
							.fail(function() {
								$('#udc-2-screen-1').hide();
								$('#udc-2-error').fadeIn('fast');
								$('html, body').animate({scrollTop: $('#udc-2-container').offset().top -50 }, 500);
							});

		    }
		    
		}); 
    });
}

})(); // We call our anonymous function immediately
