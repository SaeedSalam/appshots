function outsideClick(event, notelem) {
  var clickedOut = true,
    i,
    len = notelem.length;
  for (i = 0; i < len; i++) {
    if (event.target == notelem[i] || notelem[i].contains(event.target)) {
      clickedOut = false;
    }
  }
  if (clickedOut) return true;
  else return false;
}

function removeOtherClass() {
  var elList = document.querySelectorAll(".card-head-more:not(.active)");
  elList.forEach((el) => el.classList.remove("active"));
}

function moreDropdown(e) {
  removeOtherClass();
  e.classList.toggle("active");
}

function removeActiveClass() {
  var elList = document.querySelectorAll(".card-head-more");
  elList.forEach((el) => el.classList.remove("active"));
}

var moreItem = document.querySelectorAll(".card-head-more");
window.addEventListener("click", function (e) {
  if (outsideClick(e, moreItem)) {
    removeActiveClass();
  }
});
