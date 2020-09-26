$(document).ready(function () {

  $(".features").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  }, {
    offset: "90px"
  })
});

$('.btn-full').click(function () {
  $('html, body').animate({
    scrollTop: $('.plans').offset().top
  }, 1000);
});

$('.btn-ghost').click(function () {
  $('html, body').animate({
    scrollTop: $('.features').offset().top
  }, 1000);
});
$('.a').click(function () {
  $('html, body').animate({
    scrollTop: $('.features').offset().top
  }, 1000);
});

$('.b').click(function () {
  $('html, body').animate({
    scrollTop: $('.steps').offset().top
  }, 1000);
});
$('.c').click(function () {
  $('html, body').animate({
    scrollTop: $('.cities').offset().top
  }, 1000);
});

$('.d').click(function () {
  $('html, body').animate({
    scrollTop: $('.form').offset().top
  }, 1000);
});

let btnFull = document.querySelector(".btn-full");
let btnGhost = document.querySelector(".btn-ghost");

btnGhost.addEventListener("mouseover", function () {
  btnGhost.style.backgroundColor = "#e67e22";
  btnGhost.style.color = "white";
  btnFull.style.backgroundColor = "transparent";
  btnGhost.style.transition = "background-color 0.3s,border 0.3s,color 0.3s,margin 0.3s";
});
btnGhost.addEventListener("mouseout", function () {
  btnGhost.style.backgroundColor = "transparent";
  btnFull.style.backgroundColor = "#e67e22";
  btnFull.style.transition = "background-color 0.3s,border 0.3s,margin 0.3s";
});

$('.js--wp-1').waypoint(function (direction) {
  $('.js--wp-1').addClass('animated fadeIn');
}, {
  offset: '50%'
});

$('.app-screen').waypoint(function (direction) {
  $('.app-screen').addClass('animated fadeInUp');
}, {
  offset: '50%'
});

$('.cities-box').waypoint(function (direction) {
  $('.cities-box').addClass('animated fadeIn');
}, {
  offset: '50%'
});

$('.pulse').waypoint(function (direction) {
  $('.plan-box').addClass('animated pulse');
}, {
  offset: '50%'
});

let hum=document.querySelector(".hum");
let nav=document.querySelector(".nav-items");
let sh=true;

hum.addEventListener("click", function () {
  if(sh){
    nav.style.display="block";
    hum.src="icons/cancel.svg";
    sh=false;
  }
  else{
    nav.style.display="none";
    sh=true;
    hum.src="icons/meat.svg";
  }
});