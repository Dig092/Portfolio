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

