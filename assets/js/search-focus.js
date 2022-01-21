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
      // do key up stuff here
      if (e.keyCode === 27) {
        document.activeElement.blur();
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
