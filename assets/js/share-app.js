var rightButtons = document.querySelectorAll(".right-buttons")[0];
var shareBox = document.querySelectorAll(".share-box")[0];
function shareBoxToggle() {
  shareBox.classList.toggle("show-share-box");
}
if (shareBox) {
  document.addEventListener("click", function (event) {
    var isClickInsideRightButtons = rightButtons.contains(event.target);
    if (!isClickInsideRightButtons) {
      shareBox.classList.remove("show-share-box");
    }
  });
}

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
