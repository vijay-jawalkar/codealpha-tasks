var scrollUp = document.getElementById("scroll-up");

scrollUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});
