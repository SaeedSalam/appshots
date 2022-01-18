function appScreenToggle() {
  var appScreenItem = document.querySelectorAll(".images-type span");
  var appScreenTabContent = document.querySelectorAll(
    ".tab-content-wrap .tab-content .tab-section"
  );
  var i;
  for (i = 0; i < appScreenItem.length; i++) {
    appScreenItem[i].classList.toggle("active");
  }
  var j;
  for (j = 0; j < appScreenTabContent.length; j++) {
    appScreenTabContent[j].classList.toggle("tab-section-active");
  }
}
