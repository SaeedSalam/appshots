function collectionTabToggle() {
  var collectionTabItem = document.querySelectorAll(
    ".collections-tab-items .tab-link"
  );
  var collectionTabContent = document.querySelectorAll(
    ".collections-tab-content .tab-item"
  );
  var i;
  for (i = 0; i < collectionTabItem.length; i++) {
    collectionTabItem[i].classList.toggle("active");
  }
  var j;
  for (j = 0; j < collectionTabContent.length; j++) {
    collectionTabContent[j].classList.toggle("active-tab");
  }
}
