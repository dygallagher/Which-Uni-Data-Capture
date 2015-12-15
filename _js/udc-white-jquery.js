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
        $('h2:nth-of-type(4)').before('<div id="udc-container"> <style type="text/css" scoped> .cf:before, .cf:after{content: " "; /* 1 */ display: table; /* 2 */}.cf:after{clear: both;}.cf{*zoom: 1;}#udc-card{width: 100%; background-color: #fff; text-align: center; margin: 60px 0 30px 0; color: #05171d; box-shadow: 0 0 20px -2px rgba(43, 50, 57, 0.18); box-sizing: border-box; border: 1px solid #e0e0e0; position: relative; max-width: 615px;}#udc-card h1{font-size: 36px; line-height: 42px; margin-top: 42px; margin-bottom: 24px; font-family: StagSansWeb-Medium, Helvetica, Arial, sans-serif; padding: 0 2%;}#udc-card h2{font-size: 18px; line-height: 30px; font-family: StagSansWeb-Book, Helvetica, Arial, sans-serif !important; padding: 0 12%; color: #d81b60;}#udc-card h3{font-size: 24px; line-height: 36px; font-family: StagSansWeb-Book, Helvetica, Arial, sans-serif !important; padding: 12px 0;}#udc-form{padding-top: 30px;}#udc-card select, #udc-card input[type="email"], #udc-card input[type="text"]{height: 48px !important; font-family: "Open Sans", sans-serif; padding-left: 18px; border: 2px solid #e0e0e0; color: #212121; width: 100% !important; max-width: 400px;}#udc-card select:focus, #udc-card select:active, #udc-card input:focus, #udc-card input:active{border: 2px solid #2196f3;}#udc-card select:hover, #udc-card input:hover{border: 2px solid #616161;}.udc-frm-row{margin-bottom: 24px;}#udc-card label{font-family: "StagSansWeb-Medium", "Helvetica Neue", Helvetica, Arial, sans-serif; display: block;}#udc-card label#udc-opt-in-lbl{font-size: 14px; display: block; padding-left: 36px; margin-top: -25px; font-family: "Open Sans", sans-serif;}#udc-card .row-1{margin-bottom: 54px; padding: 0 20px;}#udc-card #step-2{background-color: #f5f5f5; padding: 24px 20px 0px 20px; text-align: left; position: relative; display: none;}#udc-card #left, #udc-card #right{padding: 0 15%;}#udc-card button{-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; background: #d32f2f; color: #fff; font-family: StagSansWeb-Book, Helvetica, Arial, sans-serif; font-size: 18px; width: 100%; height: 54px; text-align: center; transition: background .25s ease-in-out; -moz-transition: background .25s ease-in-out; -webkit-transition: background .25s ease-in-out; padding: 0 30px;}#udc-card button:hover{background: #b71c1c;}#udc-card ul{margin-bottom: 36px;}#udc-card ul li{list-style-type: none; list-style: none; background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAQCAYAAAD9L+QYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRDMyNEQ3OTkwNkQxMUU1QTY5ODgxMkM4OTE0QTJENSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRDMyNEQ3QTkwNkQxMUU1QTY5ODgxMkM4OTE0QTJENSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVEMzI0RDc3OTA2RDExRTVBNjk4ODEyQzg5MTRBMkQ1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVEMzI0RDc4OTA2RDExRTVBNjk4ODEyQzg5MTRBMkQ1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LhWTUgAAAUxJREFUeNqs1M8rBHEYx/EZJqs9uKBIcZNSioOUwlX+AUeOrpRfRdqQpNZtOYmkPXCU3CgcXMnBbU8c9qCUKOH91GdqaLbd9Z1vvZp2Z76ffeZ5ZtZPTVx5Lut9b/DX5/rJ6yYO8zgMvASXgtfRgvEgweBWDqtoxh3WgoSC2xTcqOAM7frwXXvO6rAq0YBbbBD8aSdcK+/EsoJvsBUGu4ZbcAZpXCJL8Ff0ghqdHINfRXCPWmF7z+OCw8pX0IV27OC7THAfFlGHM9tDcOweq/wAbxjFtL4rtfqxpOAT5EoFh+H3GsorhvV2xc1iCAuoRR775XoXVvmoW33BgKpLRa4bwYyC7U6PKhlMtAUFzKGIXs0iHWmXDXwXx5VO/W9/nzCLZ3RjG1Macg6n1TyrccMr6gcK+gOy4KyeDM813FPvbQYP2MTFf96yHwEGAJeMUPM2DY1VAAAAAElFTkSuQmCC") no-repeat 0px 20px; padding-left: 36px; font-family: "Open Sans", sans-serif; font-size: 18px; line-height: 36px; margin-left: 4px;}#hide{width: 100%; text-align: center; font-size: 14px; margin-bottom: 6px;}#hide a{font-family: "Open Sans", sans-serif;}#udc-loading, #udc-confirm, #udc-error{display: none;}#udc-error, #udc-confirm{padding-bottom: 30px;}#udc-loading{position: absolute; height: 100%; width: 100%; top: 0; background-color: #fff; padding-top: 60px;}#btn-close, #btn-reload{max-width: 300px; margin: 24px 0 18px 0;}#udc-form p small, #udc-error p small{padding: 0 20px;}#udc-form .udc-frm-row.error input{border-color: #f18289 !important;}#udc-form .udc-frm-row.error label{color: #ff2a56 !important;}#udc-form .frm-err-lbl{font-size: 14px; color: #ff2a56;}.disabled{background-color: #e0e0e0 !important; transition-property: background-color, color; transition-duration: 200ms; transition-timing-function: ease-in-out;}.btn-loader{background: #d32f2f url("data:image/gif;base64,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") no-repeat center !important;}.social-icons{text-align: center;}.social-icons img{display: inline-block;}@media screen and (max-width: 1249px){#udc-card #left, #udc-card #right{float: none; width: 100%; padding: 0 8%;}#udc-card #step-2{padding: 24px 20px 0px 20px;}}@media screen and (max-width: 767px){#udc-card h2{padding: 0 20px !important;}#udc-form{padding-top: 18px;}}@media screen and (max-width: 370px){#udc-card select{white-space: nowrap; padding-right: 34px;}}</style> <div id="udc-card"> <div id="udc-screen-1"> <h1>Get the inside track from <br>Which? University</h1> <h2>Receive our free guides and tips straight to your inbox</h2> <form id="udc-form" action="#" method="post"> <div class="udc-frm-row row-1"> <label for="custom-3634">I am a...</label> <select id="custom-3634" name="custom-3634" required> <option value="" selected disabled>Student, Parent or Teacher</option> <option value="Student">Student</option> <option value="Parent">Parent</option> <option value="Teacher">Teacher</option> </select> </div><div id="step-2" class="cf"> <h3>You"ll receive:</h3> <div class="Parent"> <ul> <li>The <em>Which? Parents" Guide to University</em></li><li>What parents need to know about student finance </li><li>Help them with bills, budgets and money matters</li><li>Packing, preparing and products they should take</li></ul> </div><div class="Student"> <ul> <li>The complete <em>Getting Into Uni Guide</em></li><li>Insider tips from students and universities on applications</li><li>Expert advice on writing your personal statement</li><li>Best student bank accounts, gadgets and what to take</li></ul> </div><div class="Teacher"> <ul> <li>Timely tips and materials to use in the classroom</li><li>Graphics, guides and posters to download for free</li><li>Be the first to receive brand-new resources</li><li>Practical pointers to help your students succeed</li></ul> </div><div class="udc-frm-row fname"> <label for="firstname">First name</label> <input type="text" id="firstname" name="firstname"> </div><div class="udc-frm-row lname"> <label for="lastname">Last name</label> <input type="text" id="lastname" name="lastname"> </div><div class="udc-frm-row email"> <label for="email">Email address</label> <input type="email" id="email" name="email"> </div><div class="udc-frm-row chkbox"> <small>In pressing the button below you agree that we can keep you informed by email about Which? University and other products and services from the Which? Group. Your data will be processed in accordance with our <a href="http://university.which.co.uk/about/privacy-policy">privacy policy</a> and will not be shared with third parties.</small></div><div class="udc-frm-row"> <button type="submit" id="udc-btn-1">Sign me up</button> </div><div id="hide"><a href="#" id="">Hide this</a></div></div></form> </div><div id="udc-confirm"> <h1>Thank you!</h1> <h2>You"re all signed up. Look out for your welcome email from us shortly.</h2> <h3 class="heading">Follow Which? University</h3> <div class="social-icons"> <a href="https://www.facebook.com/WhichUniversity/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAIAAADY27xgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExODIyQUQ5ODFEQzIzMzZCRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QkI1RUQ3QTlBQUExMUU1QkUyOTk0NTM4MzBCQTAxOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QkI1RUQ3OTlBQUExMUU1QkUyOTk0NTM4MzBCQTAxOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Rjc3RjExNzQwNzIwNjgxMTgyMkFEOTgxREMyMzM2QkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMTgyMkFEOTgxREMyMzM2QkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4niHpHAAAEM0lEQVR42syZX0hTcRTH773b3abb1Q3dnG0LnQ1mgko9zJIMGj31UvRQL0b24KAHK7AyiiAiEOohqLToqdCyhwohECIfCopamdVMTdNK88+2arr/f5y3c7e1zbrm7vVu83An19+8v312zvn9zvn+REmSRNaGoSxQvk7PD4zYBkdsLm/I4wu43EEYJCQCSa4gnxDqtYoKnbxElZ9GlM8Tv3pffLF8siEI6fWFEDTyOEImzQUv6nexSICQZKW+aMdW7Yb1Mi5RZuyeWw/6p+0el8dPPZPyFyXEQpWCOLCnSimXcIDSfvfNxxGb1x9inQQ5Qn6lXmnav5k9isPpa7nUGwqFOclKoYDf2mzMJ0SMUQZG7Vc7XgWDYQ7XCI7zjtQbNurktO9itKNjE462ztfccoCBg690mMcn51L1CvijrdPsDyykaf+ASDXVG8o3FK7gFcgPiEv6OMACwYXLt1863YEVvGI6+4irPF3RN+3ndi3rlbY7rzPDEfXN9a4+ehTYxwZH7asqIijCw7DolcrfW4at1p9umgBdaH8GC4fNEuVju3eWl2sLVUoC5/Oig4dOdafyrL608ERjbfSe/6e+OGw/vSw4MAw7fbhufXE+O0dO21ywtrUaaSJAvS/GnZ4Ai7kM1SrWHGDwoU/NX5d4JVJv2Zi+pCB+H14k3w3OOlw+RjP0D8427P2DAv0H1H2UFUpyTRmb+HWt08x0hnB48fusS60kqACtpvDyeInFQjUxzM0XCFlGbbFcARQWU5SqpVqNLDcHj4+Ic3AYgatULWM01VAEhQoQ9IWRfohZZ3mysVaA85NHdCUFZw7XwY3bG2w635P6VPORIoBFnvSTCJfN9pzTz2wdJVA8IYRTY4ri9gQTi5mF9TwbwzB0S7WqUCaOjlh/eMyWKbiZnJlnMSGFIhHjcy7G+1v3k2H4qVXL4igzdtfDx0MsICRiQSxAoF/QrOqyPIkwhiLNEyFoNlGkkX2SQtFr5dkVqxt1ihhKhU5B6bksWY4Qr4j0uRQKpW+zJ+J5PFStzEs0CaBvs4WyqaJ4SUNprC0jcoWZ54AP3W4oWYJSppGqiojMo2jW5ZWqpH+32aD3IYMymrAi/MDuSnoddKPr7av3kxlDMVSrTfs20+sg0/5NoJQytoaTOWiEamuzEfR+ujlAo7QeN66gmaFXPVJvSKtvBDjvWEMNIRamdL4y/n3u4s3noCXTwdFi2kZ7aEivKLVqaVO9gfNIQVyOHqxZ7vDyfwdg0OedvPiEK99AnkJ+/BuXlFBiK/xe34chK0iE1ewfVfqixn2rOBaMG+j9W/ffT9nc0cNSBvu6WKQpJmAfUxRwcViayOVJx1PzN9CVoOf+7ySIBdRbqHNQX+L7OpcocQNdaRmxDn22g36BfIr269CfQl8I/Rj0QdB/ROs+s+OZtfPvht8CDABYV7LrDDyEowAAAABJRU5ErkJggg==" alt="Facebook"></a> <a href="https://twitter.com/WhichuniUK"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAIAAADY27xgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExODIyQUQ5ODFEQzIzMzZCRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QkI1RUQ3RTlBQUExMUU1QkUyOTk0NTM4MzBCQTAxOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QkI1RUQ3RDlBQUExMUU1QkUyOTk0NTM4MzBCQTAxOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Rjc3RjExNzQwNzIwNjgxMTgyMkFEOTgxREMyMzM2QkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMTgyMkFEOTgxREMyMzM2QkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7hrbxAAAAE90lEQVR42sxYS28bVRSee+fhGb/yqqOmTZyqbQpNGiUIWkqJKrFg0S1UAtGKBbS7IlXsULf0B7BCSAhogQWCBQskhISEVCXiFUKThjRJUyUxSZ00dpz4NZ6ZO/dy7IxM4tqe68QOHNkLX93H53O+e853LmKMCf8Pk3axZinFZuNkOkazFksTljEoDPo8OCAjn4JOtIo9bbgrgGvdFvF7ZT5JRxat+zEbCSxLEBMYKuxQnAAjWwNeEQZZb0h6sUs+0oTrCWU1K3wzZaxm7LTJCme7L2EIALOAgg/68MWTSrsP1QHK55PG9Jqtk91TShOFkyHlcr+8eyhJg70/ohO7PrxWJHTjnBbwoJqhzMTtT8YNy67n/ZJEdGVAPdFWnj3lRxeT7NZEnXGAgYM/HdcjScbrFfAH4MiRRuUbiNTbA2pPK3bxCvAD4tI4HGAmYR/fzaVM5gIFeFr3uDxpcMTNEb0alNv3csTepzoAvvninlEeCuSxmRjdz6IDiXtNLwflq0lDJ/taGuG4r//KlUJZSLKYbu9/NV7JsMUk3QFleNFMm/+BWkib9Jcla4dIgLDx1DmMBFp5iiahC8eV4y3YIwmRTfbjvLmcorDp023S/TiptGpyjb5WhAL6A20V+aoGQuTlY/Ktu0baKjMTisu7Z7xNqvOzRRX62rWZmN3djH94aAnxittSyqJp1uFH+QCBDsoSd2cebRGPNYvXz6qH/WXKxStPeYo4HIcjoS8kJnTWGRDDQVyFvNMx4nAF9BjjkCDZgjNaVfzOGW3woFQSuN6QWHbV4SBeStmRZLU08WCdOlDgDMRBsbl154opovBmv+faafW5DkkqAGj2YLnC3x5eJCN/W27kZQ5XUhbl4eyjNB2NEjjeiVezCJ/XBU9cZxvZin96TXdPm0mTOlCyjkx0saEuOWsJWcK8Etqel0IaCmlipVUbWcZxpVlFvVLWUiY9H5a24+CxeI63mOSheBWu3SdWbYhRTTjWdLaScV/iLwDIQwnImOcGwYyPxnILmzXUhz8eWTzTggp2oPg9vD5PGWzqsR3Z5PINocLvy1y4A0UokEYZNwFUCYX5uqzvH5oJgwv0lvDOf6Gv9Im8WL6bM+9ECHWL5/yG/dMCV3Sgcv0LpdDfsnw/x2ffzhg3h/WxaMViEU3T2xMG78XBqKNQSZx8Bf3taJTwrJSwEA6KF3pkqEdlJ8zG7c/Gczlucve34x0iYSisTMfsjMWqIHi2Q37piHzAiyoxJZGjELs7EYv/ncQvo7Odyg4o3UHwkjiXIFWuw6/L1oN1+3xY7m7CIS/yyvmAggRd11k8Q/9cJWMr7hwqsUMBKRxApS3Z4wz74DedX95C2vVIaCNHdy3+NBlff16FulEqs9t9CBjDvxEUo8QecOQJegAVcZTWoEunFKXGErP7lw4JXTqlVusOb5zTJLHhaGSM3hvSXBpVkKhXBtSG+gay/NVnVL+MuN5XIkn24ahuNKBplUXh2mlvVwDxvq+Eg+itQVWud6QgLlcHtbI4XB7AUma+3zfr1L0CT4EfT8alhmfBLyeNqT0+C8q4L4Tf6PPs9YWyIMYE6LOhv02btak4v4IP+cVXe+Xt+WNPUBwub9Kfly3oK6Gfq+4kiAXUW6hzL3QqlZixJyjbNACbiZHZdQpKHfqGLb0O+hR0IegxEB/w6fA38mG90faPAAMAuZNMEpQ14ioAAAAASUVORK5CYII=" alt="Twitter"></a> <a href="https://www.youtube.com/channel/UCE4wTl717NEgaY-nyHVE6dw"><img src="data:image/png;base64,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" alt="YouTube"></a> </div><button id="btn-close">Close this box</button> </div><div id="udc-error"> <h1>Oh, no!</h1> <h2>Sorry, there"s been an error...</h2> <button id="btn-reload">Try again</button> <p><small>If you experience persistent problems, please contact us at whichuniversity@which.co.uk<br><a href="#" class="lnk-close">...or close this box</a></small></p><div id="hide"></div></div></div></div>');

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
		        scrollTop: $("#udc-card").offset().top
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
				// curl 'https://whichcouk.bsd.net/page/sapi/nuisance-call-sign-up-to-tps' -H 'Content-Type: application/x-www-form-urlencoded' --data 'email=damien%40betenoir.net&firstname=steve&lastname=gallagher&custom-2019=07812043315'
				var data_step_1 = $('#udc-form').serialize();

				var url_step_1 = 'https://cai-whichcouk.bsd.net/page/sapi/uni-data-capture';
				// alert(data_step_1);
				var jqxhr = $.post(url_step_1, data_step_1)
							.done(function() {
								$('#udc-screen-1').hide();
								$('#udc-confirm').fadeIn('fast');
								$('html, body').animate({scrollTop: $('#udc-container').offset().top -50 }, 500);
							})
							.fail(function() {
								$('#udc-screen-1').hide();
								$('#udc-error').fadeIn('fast');
								$('html, body').animate({scrollTop: $('#udc-container').offset().top -50 }, 500);
							});

		    }
		    
		}); 
    });
}

})(); // We call our anonymous function immediately
