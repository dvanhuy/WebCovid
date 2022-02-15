$(document).ready(function(){ 
  backtotop();
  scrolltomenu();
  navfixed();
});
function backtotop(){
  $(window).scroll(function(){ 
    if ($(this).scrollTop() > 200) { 
        $('.button-totop').show(); 
    } else { 
        $('.button-totop').hide(); 
    } 
  }); 
  $('.button-totop').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
  }); 
};
function scrolltomenu(){
  // Add smooth scrolling to all links
	$("a.nav-a").on('click', function(event) {
  
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 500, function(){
	 
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  } // End if
	});
}
/* var location=0; */
function navfixed(){
  var location=0;
  $(window).scroll(function(){
    var locationnow= $(window).scrollTop();
      if (locationnow <= location) {
        if (locationnow > 200) {
          $('nav ul').addClass('navmove');
        }
        else {
          $('nav ul').removeClass('navmove');
        }
        location=locationnow;
      } else {
        $('nav ul').removeClass('navmove'); 
        location=locationnow;
      }       
    });
}
var messhide=1;
function messtome(){
    if (messhide == 1) { 
      $('.b-mess').addClass('b-mess2'); 
      messhide=2;
      $('.mess-box').delay(150)
      $('.mess-box').fadeIn();
    } else { 
      $('.b-mess').removeClass('b-mess2'); 
      messhide=1;
      $('.mess-box').hide();
    } 
};



