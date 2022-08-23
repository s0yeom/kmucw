$(window).on("scroll", function() {
  if( $(window).scrollTop() >= 100 ) {
    $("#eduObj img").animate({ opacity: 1 }, 1000);
  }
})
$(window).on("scroll", function() {
  if( $(window).scrollTop() >= 200 ) {
    $("#eduInfo h3").animate({ opacity: 1 }, 1000);
    $(".info").delay(500).animate({ opacity: 1 }, 1000);
  }
})

let pcEdu = window.matchMedia('screen and (min-width: 1201px)');
let mobileEdu = window.matchMedia('screen and (max-width: 1200px)');

let eduSub = function() {
  if( mobileEdu.matches ) {
    $(window).on("scroll", function() {
      if( $(window).scrollTop() >= 500 ) {
        $(".circle").delay(200).animate({ opacity: 1 }, 1000);
      }
    })
  }
  else {
    $(window).on("scroll", function() {
      if( $(window).scrollTop() >= 400 ) {
        $(".circle").delay(200).animate({ opacity: 1 }, 1000);
      }
    })
  }
}
eduSub();
