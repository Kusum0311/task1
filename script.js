// Change navbar style on scroll
window.onscroll = function() {
  let navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
