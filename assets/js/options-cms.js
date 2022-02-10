function removeActiveCardsClass() {
  var elList = document.querySelectorAll(".card-box");
  elList.forEach((el) => el.classList.remove("active"));
}

function optionsDropdown(e) {
  removeActiveCardsClass();
  e.closest(".card-box").classList.toggle("active");
}
var cardsWrap = document.querySelectorAll(".cards-wrap")[0];
if (cardsWrap) {
  document.addEventListener("click", function (event) {
    var isClickOnScreenItem = cardsWrap.contains(event.target);
    if (!isClickOnScreenItem) {
      // the click was outside the cardsWrap
      removeActiveCardsClass();
    }
  });
}
