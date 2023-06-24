var button = document.getElementById("theme-switcher");
toggler = document.getElementById("toggler");
button.onclick = function () {
  toggler.style.transform = "translate(80px)";
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