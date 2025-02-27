let lastScroll = 0;
const defaultOffset = 50;
const header = document.querySelector("header");
const containBg = () => header.classList.contains("bg-header");
const scrollPosition = () => document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containBg() &&
    scrollPosition() > defaultOffset
  ) {
    header.classList.add("bg-header");
  } else if (scrollPosition() <= 50) {
    header.classList.remove("bg-header");
  }
  
  lastScroll = scrollPosition();
});