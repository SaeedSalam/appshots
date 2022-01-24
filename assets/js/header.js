function menuToggle(e) {
  e.preventDefault();
  document.body.classList.toggle("showNav");
}
function userDropdownToggle(e) {
  e.preventDefault();
  var dropToggler = document.querySelectorAll(".dropdown-box")[0];
  dropToggler.classList.toggle("showDropdown");
}
document.addEventListener("click", function (event) {
  var dropMenuItem = document.querySelectorAll(".user-dropdown")[0];
  var dropToggler = document.querySelectorAll(".dropdown-box")[0];
  var isClickInsideMenu = dropMenuItem.contains(event.target);
  if (!isClickInsideMenu) {
    dropToggler.classList.remove("showDropdown");
  }
});
