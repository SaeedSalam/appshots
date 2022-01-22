// check we have a mac system or not
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

// display search result on search focus
function showSearchResults() {
  searchWrap.classList.add("show-search-results");
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
}

// get related content on mouseover
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
var searchBar = document.getElementById("main-search");

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
        searchWrap.classList.remove("show-search-results");
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
var suggestedFilters = document.getElementById("suggestedFilters");

// search box close on outside click
document.addEventListener("click", function (event) {
  var isClickInside = searchWrap.contains(event.target);

  if (!isClickInside) {
    // the click was outside the searchResults
    searchWrap.classList.remove("show-search-results");
    document
      .querySelectorAll(".search-results-filter")[0]
      .classList.remove("show-children", "show-results");
    removeActiveClass();
    searchBar.value = "";
    suggestedFilters.classList.remove("hide");
    searchRightSection.innerHTML = "";
  }
});

function dummySearch() {
  searchRightSection.innerHTML = "";
  if (searchBar.value === "") {
    document
      .querySelectorAll(".search-results-filter")[0]
      .classList.remove("show-children", "show-results");

    suggestedFilters.classList.remove("hide");
  } else {
    document
      .querySelectorAll(".search-results-filter")[0]
      .classList.add("show-children", "show-results");

    suggestedFilters.classList.add("hide");
  }
}
