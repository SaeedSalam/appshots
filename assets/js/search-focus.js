// check we have a mac system or not
// to show cmd or ctrl icon in search bar
function getOS() {
  let userAgent = window.navigator.userAgent.toLowerCase(),
    macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i,
    os = null;

  if (macosPlatforms.test(userAgent)) {
    os = "macos";
  } else {
    os = "nonmac";
  }
  return os;
}
document.getElementById("keysearch").classList.add(getOS());

// Search Results div
var searchWrap = document.querySelectorAll(".search-wrap")[0];
var suggestedFilters = document.getElementById("suggestedFilters");
var searchBar = document.getElementById("main-search");

// display search result on search focus
function showSearchResults() {
  document.body.classList.add("search-active");
  searchWrap.classList.add("show-search-results");
}

// search close function
function hideSearchResults() {
  document.body.classList.remove("search-active");
  searchWrap.classList.remove("show-search-results");
}

//reset search
function resetSearch() {
  document
    .querySelectorAll(".search-results-filter")[0]
    .classList.remove("show-children", "show-results");
  suggestedFilters.classList.remove("hide");
  searchBar.value = "";
  searchWrap.classList.remove("show-reset-search");
}

//remove active from current item
function removeActiveClass() {
  var elList = document.querySelectorAll("li.search-filter-category");
  elList.forEach((el) => el.classList.remove("active"));
  elList.forEach((el) => el.parentNode.classList.remove("active"));
}

// search result top level click
function showChildren(e) {
  e.closest(".search-results-filter").classList.add("show-children");
  removeActiveClass();
  e.classList.add("active");
  e.parentNode.classList.add("active");
  searchWrap.classList.add("show-reset-search");
}

// get related content on mouseover
// for items that have a parent category/folder (app categories)
var elList = document.querySelectorAll(
  "li.search-filter-category.top-level li"
);
var searchRightSection = document.querySelectorAll(".search-right-section")[0];
elList.forEach((el) =>
  el.addEventListener(
    "mouseenter",
    function (event) {
      searchRightSection.innerHTML = "";
      var getRightSection =
        event.target.querySelector(".search-item-right").outerHTML;
      searchRightSection.innerHTML = getRightSection;
    },
    false
  )
);

// for normal items (apps)
var elListSingleLevel = document.querySelectorAll(
  "li.search-filter-category:not(.top-level)"
);
elListSingleLevel.forEach((el) =>
  el.addEventListener(
    "mouseenter",
    function (event) {
      searchRightSection.innerHTML = "";
      var getRightSection =
        event.target.querySelector(".search-item-right").outerHTML;
      searchRightSection.innerHTML = getRightSection;
    },
    false
  )
);

// search focus on keyboard press - cmd + K or ctrl + k
document.onkeydown = overrideKeyboardEvent;
document.onkeyup = overrideKeyboardEvent;
var keyIsDown = {};

function overrideKeyboardEvent(e) {
  switch (e.type) {
    case "keydown":
      if (!keyIsDown[e.keyCode]) {
        keyIsDown[e.keyCode] = true;
        // do key down stuff here
        if (
          (e.ctrlKey && e.keyCode === 75) ||
          (e.metaKey && e.keyCode === 75)
        ) {
          searchBar.focus();
          disabledEventPropagation(e);
          e.preventDefault();
          return false;
        }
      }
      break;
    case "keyup":
      delete keyIsDown[e.keyCode];
      // do key up stuff here for esc key
      if (e.keyCode === 27) {
        document.activeElement.blur();
        hideSearchResults();
        removeActiveClass();
        searchRightSection.innerHTML = "";
      }
      break;
  }
}

function disabledEventPropagation(e) {
  if (e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else if (window.event) {
      window.event.cancelBubble = true;
    }
  }
}

// search close function on mobile
function closeSearch() {
  hideSearchResults();
  document
    .querySelectorAll(".search-results-filter")[0]
    .classList.remove("show-children", "show-results");
  removeActiveClass();
  searchBar.value = "";
  suggestedFilters.classList.remove("hide");
  searchRightSection.innerHTML = "";
  searchWrap.classList.remove("show-reset-search");
}

// search box close on outside click
if (searchWrap) {
  document.addEventListener("click", function (event) {
    var isClickInside = searchWrap.contains(event.target);

    if (!isClickInside) {
      // the click was outside the searchResults
      hideSearchResults();
      document
        .querySelectorAll(".search-results-filter")[0]
        .classList.remove("show-children", "show-results");
      searchWrap.classList.remove("show-reset-search");
      removeActiveClass();
      searchBar.value = "";
      suggestedFilters.classList.remove("hide");
      searchRightSection.innerHTML = "";
    }
  });
}

// dummysearch - showing dummy results & clearing it when input value is empty
function dummySearch() {
  searchRightSection.innerHTML = "";
  if (searchBar.value === "") {
    resetSearch();
  } else {
    document
      .querySelectorAll(".search-results-filter")[0]
      .classList.add("show-children", "show-results");
    searchWrap.classList.add("show-reset-search");
    document.body.classList.add("search-active");
    suggestedFilters.classList.add("hide");
  }
}
