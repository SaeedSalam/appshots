function openPopup(e) {
  var popupId = event.target.dataset.popup;
  document.getElementById(popupId).classList.add("aps-show");
}
function closePopup(e) {
  var currentPopup = event.target.closest(".aps-popup");
  currentPopup.classList.remove("aps-show");
}
