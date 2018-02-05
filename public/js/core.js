 $(document).ready(function(){
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.first-header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  $('#nav-icon1').on('click', function(){
    $("html, body").animate(
        {
          scrollTop: 0
        },
    0);
    $('body').toggleClass('open-navbar').toggleClass('special');
    $('.vertical-navbar-open').addClass('open-navbar-wrap');
  });

  $('.button-close-navbar-vertical').on('click', function(){
    $('body').removeClass('open-navbar').removeClass('special');
  });

  $('.dropdown-vertical-nav').on('click', function(e){
    $(jQuery(this).children("ul")).slideToggle("slow", function(){
      //prepare for tomorrow
    });
  });
  
  $(".navbar-vertical nav ul li a").click(function(){
    $('body').removeClass('open-navbar').removeClass('special');
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();
      var offsetTop = $('.first-header').offset().top;
      if(Math.abs(lastScrollTop - st) <= delta){
          return;
      }

      if (st > lastScrollTop && st > navbarHeight){
          $('.first-header').removeClass('nav-down').addClass('nav-up');
      } else {
          if(st + $(window).height() < $(document).height()) {
              $('.first-header').removeClass('nav-up').addClass('nav-down');
          }
      }
      lastScrollTop = st;
  }

  $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    })

      $('#streamingToggle').on('click', function(e){
      if($(this).text() === "LIVE STREAMING"){
        $(this).delay("100").text("COMING SOON");
      } else {
        $(this).delay("100").text("LIVE STREAMING");
      }
      //$('.foot-container').toggleClass('foot-fill');
      //$(".live-streaming").slideToggle();
   });

  // $("#slide-to-join").on("click", function(){
  //   $('html, body').animate({
  //       scrollTop: $("#join-us").offset().top
  //   }, 2000);
  // });
});
