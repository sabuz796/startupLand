// count up js

const counterUp = window.counterUp.default;

const callback = (entries) => {
  entries.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains("is-visible")) {
      counterUp(el, {
        duration: 2000,
        delay: 16,
      });
      el.classList.add("is-visible");
    }
  });
};

const IO = new IntersectionObserver(callback, { threshold: 1 });

// Select all elements with the "counter" class
const counterElements = document.querySelectorAll(".counter");

// Observe each counter element
counterElements.forEach((el) => {
  IO.observe(el);
});

// nav bar
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navContainer = document.querySelector(".nav-list-container");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("ph-x");
  navContainer.classList.toggle("menu-show");
});

// clicked and checked amount

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((otherBox) => {
      otherBox.classList.remove("checked-amount");
    });
    box.classList.add("checked-amount");
  });
});
