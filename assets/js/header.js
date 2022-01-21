function menuToggle(e) {
  e.preventDefault();
  document.body.classList.toggle("showNav");
}
function userDropdownToggle(e) {
  e.preventDefault();
  var dropToggler = document.querySelectorAll(".dropdown-box")[0];
  dropToggler.classList.toggle("showDropdown");
}
