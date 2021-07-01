$(document).ready(function () {
  // choses-slider

  AOS.init();

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("right", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  $(window).scroll(() => {
    if ($(this).scrollTop() > 20) {
      $(".mynavbar").addClass("fixed-navbar");
      $("#floating").css("opacity", "1");
    } else {
      $(".mynavbar").removeClass("fixed-navbar");
      $("#floating").css("opacity", "0");
    }
  });

  $("#floating").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      50
    );
  });

  if ($(".langSelect").length) {
    $(".langSelect").niceSelect();
  }

  if ($(".counter").length) {
    $(".counter").counterUp({
      time: 1000,
    });
  }


  
  var currentDir = $("a").css("direction");
  console.log(currentDir);


  if($('.services-slider').length){
    $(".services-slider").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      rtl: currentDir == "rtl" ? true : false,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1026,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }


  // if($('.nextPervious').length){
  //   $('.cardNews').hover(function(){
  //     bg = $(this).attr('data-next');
  //     console.log(bg);
  //     $(this).css('background-image', bg);
  //   }, function () {
  //     Nbg = $(this).attr('data-original');
  //     console.log(Nbg)
  //     $(this).css('background-image', Nbg);
  //   })
  // }


  var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

  function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    //  translate = 'translateX(' + x + 'px, ' + y + 'px)';
    translate = "translateX(" + x + "px) translateY(" + y + "px)";

    $(".bgMove").css({
      "-webit-transform": translate,
      "-moz-transform": translate,
      transform: translate,
    });

    window.requestAnimationFrame(moveBackground);
  }

  $('.bgMoveParent').on("mousemove click", function (e) {
    var isHovered = $(".bgMove:hover").length > 0;
    console.log(isHovered);

    //if(!$(e.target).hasClass('animate-this')) {
    if (!isHovered) {
      var lMouseX = Math.max(
          -100,
          Math.min(100, $(window).width() / 2 - e.clientX)
        ),
        lMouseY = Math.max(
          -100,
          Math.min(100, $(window).height() / 2 - e.clientY)
        );

      lFollowX = (20 * lMouseX) / 100;
      lFollowY = (10 * lMouseY) / 100;
    }
  });

  moveBackground();
});

function openNav() {
  document.getElementById("mySidenav").style.right = "0";
  document.querySelector(".bg-sidenavOpen").style.display = "block";
  document.body.classList.add("openMenuActive");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.right = "-400px";
  document.querySelector(".bg-sidenavOpen").style.display = "none";
  document.body.classList.remove("openMenuActive");
}

const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("displayNone");
  });
});
