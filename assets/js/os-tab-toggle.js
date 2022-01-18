function osTabToggle() {
  var osTabItem = document.querySelectorAll(".os-tab span");
  var osTabContent = document.querySelectorAll(
    ".tab-content-wrap .tab-content"
  );
  var i;
  for (i = 0; i < osTabItem.length; i++) {
    osTabItem[i].classList.toggle("active");
  }
  var j;
  for (j = 0; j < osTabContent.length; j++) {
    osTabContent[j].classList.toggle("tab-active");
  }
}
