var shareBox = document.querySelectorAll(".share-box");
var rightButtons = document.querySelectorAll(".right-buttons");

function shareBoxToggle(e) {
  e.target.nextElementSibling.classList.toggle("show-share-box");
  e.target.closest(".right-buttons").classList.toggle("rb-active");
}

var activeRightButtons = document.getElementsByClassName("rb-active");

document.addEventListener("click", function (event) {
  if (activeRightButtons.length > 0) {
    var isClickInsideRightButtons = document
      .querySelectorAll(".rb-active")[0]
      .contains(event.target);
    if (!isClickInsideRightButtons) {
      [].forEach.call(shareBox, function (el) {
        el.classList.remove("show-share-box");
      });
      [].forEach.call(rightButtons, function (el) {
        el.classList.remove("rb-active");
      });
    }
  }
});

var copyText = document.querySelectorAll(".share-url")[0];
var copiedDiv = document.querySelectorAll(".share-copied")[0];
var copyTimer = setTimeout(function () {
  copiedDiv.classList.remove("show-copied");
}, 800);
function copyLink() {
  var copiedContent = copyText.textContent.replace(/\s+/g, " ").trim();

  navigator.clipboard.writeText(copiedContent);
  clearTimeout(copyTimer);
  copiedDiv.classList.add("show-copied");
  copyTimer = setTimeout(function () {
    copiedDiv.classList.remove("show-copied");
  }, 800);
}
