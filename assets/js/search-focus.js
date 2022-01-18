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
        if (e.ctrlKey && e.keyCode === 75) {
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
