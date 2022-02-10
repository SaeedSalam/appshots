function openPopup(e) {
  var popupId = e.target.dataset.popup;
  document.getElementById(popupId).classList.add("aps-show");
  document.body.classList.add("aps-popup-showing");
}
function closePopup(e) {
  var currentPopup = e.target.closest(".aps-popup");
  currentPopup.classList.remove("aps-show");
  document.body.classList.remove("aps-popup-showing");
  Array.from(document.querySelectorAll(".aps-form-item .form-ip")).forEach(
    (element) => {
      element.value = "";
    }
  );
  Array.from(document.querySelectorAll(".aps-form-item .text-counter")).forEach(
    (element) => {
      element.innerHTML = element.dataset.maxcount;
    }
  );
}

Array.from(document.querySelectorAll(".aps-form-item .form-ip")).forEach(
  (element) => {
    var getInput = element;
    var getCounter = element
      .closest(".aps-form-item")
      .querySelectorAll(".text-counter")[0];

    let maxLength = parseInt(getCounter.dataset.maxcount);
    getInput.addEventListener(
      "input",
      function () {
        let remLength = 0;
        remLength = maxLength - parseInt(getInput.value.length);
        if (remLength < 0) {
          getInput.value = getInput.value.substring(0, maxLength);
          return false;
        }
        getCounter.innerHTML = remLength;
      },
      true
    );
  }
);

// txtBoxRef.addEventListener(
//   "input",
//   function () {
//     var remLength = 0;
//     remLength = 64 - parseInt(txtBoxRef.value.length);
//     if (remLength < 0) {
//       txtBoxRef.value = txtBoxRef.value.substring(0, 64);
//       return false;
//     }
//     counterRef.innerHTML = remLength;
//   },
//   true
// );
