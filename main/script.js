var button = document.getElementById("theme-switcher");
var toggler = document.getElementById("toggler")
button.onclick = function () {
  toggler.style.transform = "translate( 80px)";
}
button.ondblclick = function () {
  toggler.style.transform = "translate( -2px)";
};

const menubtn = document.querySelector('.menu');
const dropmenu = document.querySelector('.drop-menu');

menubtn.onclick = function () {
  dropmenu.style.display = (dropmenu.style.display === "none") ? "block" : "none";
}

const profile = document.getElementById("profile");
const sup = document.getElementById("sup");


function resetElement() {
  sup.style.transform = 'none';
  sup.style.opacity = '1';
}

function translateAndFade() {
  sup.style.transform = "translateY(70px)";
  sup.style.opacity = '0';
}
profile.onclick = translateAndFade();

sup.addEventListener('transitionend', resetElement);

setTimeout(translateAndFade, 1000);

$(document).ready(function() {
  var lastScrollTop = 0;
  var scale = 1.5;

  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // Scrolling down
      scale += 0.01; // Increase the scale gradually
      $("#expand").css({
        transform: "scale3d(" + scale + ", " + scale + ", 1)", // Apply the new scale
        opacity: "-=0.04" // Decrease opacity by 0.01
      });
    } else {
      // Scrolling up
      scale -= 0.02; // Decrease the scale gradually
      $("#expand").css({
        transform: "scale3d(" + scale + ", " + scale + ", 1)", // Apply the new scale
        opacity: "+=0.04" // Increase opacity by 0.01
      });
    }
    lastScrollTop = st;
  });
});



