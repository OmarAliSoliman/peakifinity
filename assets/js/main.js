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
      $(".customNavbar").addClass("fixed-navbar");
      $("#floating").css("opacity", "1");
    } else {
      $(".customNavbar").removeClass("fixed-navbar");
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

  // if ($(".services-slider").length) {
  //   $(".services-slider").slick({
  //     dots: true,
  //     infinite: false,
  //     speed: 300,
  //     slidesToShow: 3,
  //     rtl: currentDir == "rtl" ? true : false,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     arrows: true,
  //     loop: true,
  //     infinite: true,
  //     responsive: [
  //       {
  //         breakpoint: 1026,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //           infinite: true,
  //         },
  //       },
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //         },
  //       },
  //       {
  //         breakpoint: 524,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   });
  // }

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

  $(".bgMoveParent").on("mousemove click", function (e) {
    var isHovered = $(".bgMove:hover").length > 0;
    // console.log(isHovered);

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

  var typed = new Typed(".element", {
    // Waits 1000ms after typing "First"
    strings: [
      "First ^1000 sentence.",
      " Peakfinity is uniquely positioned to help customers with the most challenging and complex requirements to accelerate innovation of their IT environment and make the most of their investment in Oracle, Microsoft, AWS, Google, VMware DELL, IBM,& SAP technologies.",
    ],
    typeSpeed: 80,
  });

  $(".siteFooter").on("mousemove", function (e) {
    $(".lichtCircle").css({
      top: e.clientY - $(".lichtCircle").height() * 0.5,
      left: e.clientX - $(".lichtCircle").width() * 0.5,
    });
  });


  if($(".newservices-slider").length){
    $(".newservices-slider").slick({
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
      // speed: 2000,
      arrows: true,
    })
  }

  // $(".siteFooter").mousefollower({
  //   followerSelector: ".lichtCircle",
  // });
});

const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("displayNone");
    document.body.classList.remove("overoading");
  }, 2500);
});

function openNav() {
  // document.getElementById("mySidenav").style.top = "0";
  document.body.classList.add("openMenuActive");
  var sideLinks = document.querySelectorAll(".sidenav .links .sideLink");
  setTimeout(() => {
    document
    .querySelector(".sidenav .links")
    .classList.add("activeSideNavLinks");
    
    document.querySelector(".sidenav .closebtn").classList.add("closeBtnActive");
    document.querySelector(".sidenav .logo").classList.add("logoActive");
    document.querySelector(".sidenav").classList.add("sidenavActive");
  }, 400);

  setTimeout(() => {
    document.querySelector(".sidenav").classList.add("sidenavActive");
    document.querySelector(".bg-sidenavOpen").style.display = "block";

  }, 80);
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  // document.getElementById("mySidenav").style.top = "-100%";
  document.querySelector(".bg-sidenavOpen").style.display = "none";
  document.body.classList.remove("openMenuActive");
  var sideLinks = document.querySelectorAll(".sidenav .links .sideLink");
  document
    .querySelector(".sidenav .links")
    .classList.remove("activeSideNavLinks");
  // document.querySelector(".sidenav").classList.remove("sidenavActive");
  document.querySelector(".sidenav .closebtn").classList.remove("closeBtnActive");
  document.querySelector(".sidenav .logo").classList.remove("logoActive");
  setTimeout(() => {
    document.querySelector(".sidenav").classList.remove("sidenavActive");

  }, 80);
}


function id(el) {
    return document.getElementById(el);
}

var canvas = id('canvas');
var c = canvas.getContext('2d');

var screen = {
    width: 1536,
    height: 722
}
canvas.width = screen.width;
canvas.height = screen.height;
var colors = ['white'];

function Rain(x, y, w, h, fall_speed, color) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.fall_speed = fall_speed;
    this.color = color;
    this.draw = function() {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.w, this.h);

    }
    this.update = function() {
        // this.x += this.dx;
        this.y += this.fall_speed;

        if (this.y >= screen.height) {
            this.y = -this.h;
            this.x = Math.floor(Math.random() * screen.width);
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        // this.y = screen.floor - this.h;

        this.draw();

    }

}


var w = 1;
var h = 100;
var fall_speed = 30;
var rains = [

];

for (var i = 0; i < 30; i++) {
    var x = Math.floor(Math.random() * screen.width);
    var y = Math.floor(Math.random() * screen.height);
    rains.push(new Rain(x, y, w, h, fall_speed, colors[Math.floor(Math.random() * colors.length)]));
}
var lastFrame = 0;

function render(time) {
    var FPS = Math.floor(1000 / (time - lastFrame));
    lastFrame = time;

    requestAnimationFrame(render);
    c.clearRect(0, 0, screen.width, screen.height);
    c.font = '20px Verdana';
    c.fillStyle = 'white';
    c.fillText(FPS + ' FPS', 10, 50);
    for (var i = 0; i < rains.length; i++) {
        rains[i].update();
    }
}
render();