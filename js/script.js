const navbar = document.querySelector(".navbar");
const activeSticky = document.querySelector(".active-sticky");
const navHeight = navbar.getBoundingClientRect().height;

const sticky = function (entries) {
  const [entry] = entries;
  !entry.isIntersecting
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

const stickyNavObserver = new IntersectionObserver(sticky, {
  root: null,
  threshold: 1,
  rootMargin: `-${navHeight}px`,
});

stickyNavObserver.observe(activeSticky);
