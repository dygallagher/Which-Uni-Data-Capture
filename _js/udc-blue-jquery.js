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

        $('h2:nth-of-type(4)').before('<div id="udc-container"> <style type="text/css" scoped> #step-2{display: none;}.cf:before, .cf:after{content: " "; /* 1 */ display: table; /* 2 */}.cf:after{clear: both;}.cf{*zoom: 1;}#udc-container{margin: 3rem 0;}#udc-card{border: 1px solid #DEDEDD; box-shadow: 0 0 23px -1px rgba(222, 222, 221, 0.5); position: relative; max-width: 1105px; margin: 1rem auto;}#udc-card:before, #udc-card:after{border:none !important;}#udc-card header{padding: 0 20px; background-color: #1976d2; margin: 0 0 36px 0; /* got this in to fix margin collape */ width: 100%; box-sizing: border-box;}#udc-card header h1{font-size: 28px !important; line-height: 36px !important; color: #fff; font-family: StagSansWeb-Book, Helvetica, Arial, sans-serif; margin: 15px 0 14px 0; text-align: center;}#udc-card h2{padding-bottom: 6px !important; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: bold; font-size:18px; line-height: 28px; text-align: center;}#udc-card #left{padding: 0 20px; float: none !important; width: 100% !important; box-sizing: border-box;}#udc-card ul{margin: 0 20px 12px !important; padding-right: 0px !important;}#udc-card ul li{background: none !important; padding-left: 12px !important; margin-bottom: 12px !important; font-size: 16px !important; line-height: 28px !important; margin-left: 0;}#udc-card #right{float: none !important; width: 100% !important; padding:0 20px; border-left:1px solid #e0e0e0; box-sizing: border-box;}#udc-card select, #udc-card input[type=\'email\'], #udc-card input[type=\'text\']{height: 48px !important; font-family: \'Open Sans\', sans-serif; padding-left: 18px; border: 2px solid #e0e0e0; color: #212121; width: 100% !important; box-sizing:border-box;}#udc-card select:focus, #udc-card select:active, #udc-card input:focus, #udc-card input:active{border: 2px solid #2196f3;}#udc-card select:hover, #udc-card input:hover{border: 2px solid #616161;}.udc-frm-row{margin-bottom: 24px; position: relative; clear:both;}#udc-card label#udc-opt-in-lbl{font-size: 14px; display: block; padding-left: 36px; margin-top:-22px; font-family: \'Open Sans\', sans-serif;}#udc-card input[type=\'checkbox\']{vertical-align: bottom; width:24px; height: 24px; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;}#udc-card button{-webkit-border-radius: 3px !important; -moz-border-radius: 3px !important; border-radius: 3px !important; background: #3a55af; color: #fff; font-family: StagSansWeb-Book, Helvetica, Arial, sans-serif; font-size: 18px; width: 100%; height: 48px; text-align: center; transition: background .25s ease-in-out; -moz-transition: background .25s ease-in-out; -webkit-transition: background .25s ease-in-out; border: none;}#udc-card button:hover{background: #6177bf;}small{font-family: "Open Sans", sans-serif; font-size: 14px !important; color: #616161;}@media screen and (max-width: 1249px) and (min-width: 890px){#udc-card #right, #udc-card #left{width: 50%;}}@media screen and (max-width: 889px){#udc-card #right, #udc-card #left{width: 100%; float: none;}#udc-card #right{border-left: none; border-top: none !important; padding-top: 0 !important; padding-bottom: 30px;}#udc-card ul{margin-bottom: 0; padding-bottom: 6px !important;}}@media screen and (max-width: 460px){#udc-card ul li{background:none; padding-left: 12px;}#udc-card header h1{font-size: 30px; line-height: 42px;}#udc-card ul{padding-bottom: 12px;}}form#udc-form{margin: 0 30px;}#udc-form p small{padding: 0 20px; font-family: \'Open Sans\', sans-serif;}#udc-form .udc-frm-row.error input{border-color: #f18289 !important;}#udc-form .udc-frm-row.error label{color: #ff2a56 !important; font-family: \'Open Sans\', sans-serif;}#udc-form .frm-err-lbl{font-size: 14px; color: #ff2a56; font-family: \'Open Sans\', sans-serif;}#udc-screen-loading, #udc-screen-error, #udc-screen-confirm{display: none; text-align: center; padding-bottom: 42px;}#udc-screen-confirm{text-align: center; padding-bottom: 42px;}#btn-close, #btn-reload{max-width: 300px; margin: 24px 0 18px 0;}.disbld{background-color: #9e9e9e !important; transition-property: background-color, color; transition-duration: 200ms; transition-timing-function: ease-in-out;}.btn-loader{background:#3a55af url(\'data:image/gif; base64,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\') no-repeat center !important;}.social-icons{text-align: center;}.social-icons img{display: inline-block;}h3.social-heading{color: #616161 !important; font-size: 1.35em !important; margin-top: .5em !important; font-family: \'Open Sans\', sans-serif !important; font-weight: bold; padding: 20px 0 10px 0 !important; display: block !important;}</style> <div id="udc-card"> <header> <h1> Get the inside track from Which? University </h1> </header> <div class="cf"> <div id="udc-screen-start"> <div id="left"> <h2> Receive our free guides and tips straight to your inbox: </h2> <div class="students"> <ul> <li> <strong> Students </strong> : step-by-step help with applying to uni, from personal statements to top student bank accounts and gadgets </li><li> <strong> Parents </strong> : your free <em> Which? Parents\' Guide to University </em> , plus practical help with finance, accommodation, products and more </li><li> <strong> Teachers </strong> : timely application tips and materials to use in the classroom, including free downloadable graphics and guides </li></ul> </div></div><div id="right"> <form id="udc-form" action="#"> <div class="udc-frm-row"> <label for="custom-3634"> I am a... </label> <select id="custom-3634" name="custom-3634" > <option selected="true" disabled="disabled"> Please select </option> <option value="Student"> Student </option> <option value="Parent"> Parent </option> <option value="Teacher"> Teacher </option> </select> </div><div id="step-2"> <div class="udc-frm-row fname "> <label for="firstname"> First name </label> <input type="text" id="firstname" name="firstname"> </div><div class="udc-frm-row lname "> <label for="lastname"> Last name </label> <input type="text" id="lastname" name="lastname"> </div><div class="udc-frm-row email "> <label for="email"> Email address </label> <input type="email" id="email" name="email"> </div><div class="udc-frm-row "> <small> In pressing the button below you agree that we can keep you informed by email about Which? University and other products and services from the Which? Group. Your data will be processed in accordance with our <a href="http://www.which.co.uk/privacy-policy/which-privacy-policy/"> privacy policy </a> . </small> </div><div class="udc-frm-row"> <button type="submit" id="udc-btn-1"> Sign me up </button> </div></div></form> </div></div><div id="udc-screen-confirm"> <h1> Thank you! </h1> <h2> You\'re all signed up. Look out for your welcome email from us shortly. </h2> <h3 class="social-heading"> Follow Which? University </h3> <div class="social-icons"> <a href="https://www.facebook.com/WhichUniversity/" id="facebook"> <img src="https://s.bsd.net/whichcouk/cai/page/-/i-facebook.png" alt="Facebook"> </a> <a href="https://twitter.com/WhichuniUK" id="twitter"> <img src="https://s.bsd.net/whichcouk/cai/page/-/i-twitter.png" alt="Twitter"> </a> <a href="https://www.youtube.com/channel/UCE4wTl717NEgaY-nyHVE6dw" id="youtube"> <img src="https://s.bsd.net/whichcouk/cai/page/-/i-youtube.png" alt="YouTube"> </a> </div><button id="btn-close"> Close this box </button> </div><div id="udc-screen-error"> <h1> Oh, no! </h1> <h2> Sorry, there\'s been an error... </h2> <button id="btn-reload"> Try again </button> <p> <small> If you experience persistent problems, please contact us at whichuniversity@which.co.uk <br><a href="#" class="lnk-close"> ...or close this box </a> </small> </p></div></div></div></div>');

        $('#custom-3634').change(function() {
            $('#step-2').slideDown();
            $('html, body').animate({
                scrollTop: $("#right").offset().top - 30
            }, 1000);
        });

        $('#btn-close, .lnk-close').click(function(event) {
            event.preventDefault();
            $('#udc-container').fadeOut('slow');
        });

        $('#btn-reload').click(function() {
            location.reload(true);
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
                $('#firstname, #lastname, #email, #custom-3634, #udc-btn-1').addClass('disabled');
                $('#udc-btn-1').val('').empty().addClass('btn-loader');     

                // Post the form data using the new BSD signup API
                // http://tools.bluestatedigital.com/kb/entry/new-signup-api/
                // curl 'https://cai-whichcouk.bsd.net/page/sapi/uni-data-capture' -H 'Content-Type: application/x-www-form-urlencoded' --data 'custom-3634=students&firstname=Damien&lastname=Test&email=test%40test.com'
                var data_step_1 = $('#udc-form').serialize();

                var url_step_1 = 'https://cai-whichcouk.bsd.net/page/sapi/uni-data-capture';
                // alert(data_step_1);
                var jqxhr = $.post(url_step_1, data_step_1)
                            .done(function() {
                                $('#udc-screen-start').hide();
                                $('#udc-screen-confirm').fadeIn('fast');
                                $('html, body').animate({scrollTop: $('#udc-container').offset().top -50 }, 500);
                            })
                            .fail(function() {
                                $('#udc-screen-start').hide();
                                $('#udc-screen-error').fadeIn('fast');
                                $('html, body').animate({scrollTop: $('#udc-container').offset().top -50 }, 500);
                                // $('html, body').scrollTo('#udc-form');
                            });

            }
            
        }); 
    });
}

})(); // We call our anonymous function immediately
