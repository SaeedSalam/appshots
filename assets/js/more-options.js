function removeActiveScreenClass() {
  var elList = document.querySelectorAll(".screen-item");
  elList.forEach((el) => el.classList.remove("active"));
}

function moreDropdown(e) {
  removeActiveScreenClass();
  e.closest(".screen-item").classList.toggle("active");
}
var screenWrap = document.querySelectorAll(".screens-wrap")[0];
if (screenWrap) {
  document.addEventListener("click", function (event) {
    var isClickOnScreenItem = screenWrap.contains(event.target);
    if (!isClickOnScreenItem) {
      // the click was outside the screenwrap
      removeActiveScreenClass();
    }
  });
}
