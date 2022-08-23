// $("a").on("click", function(e) {
//   e.preventDefault();
// })

let mobileNav = window.matchMedia('screen and (max-width: 1500px)')
let pcNav = window.matchMedia('screen and (min-width: 1501px)')
let state = 1;
let resNav = function() {
  if ( mobileNav.matches ) {
    $("#gnbList > li > a").off()
    $("#header").off();
    if( state == 1 ) {
      $(".navBtn").toggle(function() {
        state = 0;
        $("#headerWrap").stop().animate({ height: 850 }, 300);
        $(".navBtn").css({ backgroundImage: "url(images/navBtnX.png)" });
      }, function() {
        state = 1;
        $("#headerWrap").stop().animate({ height: 100 }, 300);
        $(".navBtn").css({ backgroundImage: "url(images/navBtn.png)" });
      })
    }
  }
  else {
    state = 1;
    $(".navBtn").css({ backgroundImage: "url(images/navBtn.png)" });
    $("#headerWrap").css({ height: 100 });
    $("#gnbList > li > a").on("mouseenter", function() {
      $("#headerWrap").stop().animate({ height: 500 }, 300);
    })
    $("#header").on("mouseleave", function() {
      $("#headerWrap").stop().animate({ height: 100 }, 300);
    })
  }
}
resNav();
$(window).on('resize', function() {
  resNav();
})

let n = 0;
let eduSld = $("#educationObj li").length;
let eduSliderAuto = function() {
  n++;
  if( n == eduSld ) {
    n = 0;
    $("#educationObj").animate({ marginLeft: 0 });
  } else {
    $("#educationObj").animate({ marginLeft: "-=100%" });
  }
}
setInterval(eduSliderAuto, 5000);

$(".cBtn").on("click", function(e) {
  e.preventDefault();
  let cBtn = $(this, "a").text();
  $(".cBtn").removeClass("on");
  $(this).addClass("on");
  $(".writer").removeClass("on");
  $(`#intro${cBtn}`).addClass("on");
})

// $("#introList").slick(); // ??

$(".pageBtn a").on("click", function(e) {
  e.preventDefault();
})
$(".next").on("click", function() {
  $(".writer").removeClass("on");
  $("#introList").append($("#introList li:first"));
  $(".writer:eq(0)").addClass("on");
})
$(".prev").on("click", function() {
  $(".writer").removeClass("on");
  $("#introList").prepend($("#introList li:last"));
  $(".writer:eq(0)").addClass("on");
})

let mainChange = function() {
  $("#mainBgList li:last").addClass("active")
                          .css({ opacity: 0 }).animate({ opacity: 1 }, 1000, function() {
                              $("#mainBgList").append($("#mainBgList li:first"));
                              $("#mainBgList li:last").removeClass("active")
                                                      .css({ opacity: 0 });
                            });
}
setInterval(mainChange, 7000);
