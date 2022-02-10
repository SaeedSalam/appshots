function cmsTabToggle() {
  var osTabItem = document.querySelectorAll(".os-tab-cms span");
  var osTabContent = document.querySelectorAll(".cms-tab");
  var i;
  for (i = 0; i < osTabItem.length; i++) {
    osTabItem[i].classList.toggle("active");
  }
  var j;
  for (j = 0; j < osTabContent.length; j++) {
    osTabContent[j].classList.toggle("cms-tab-active");
  }
}
