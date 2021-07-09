"use strict";
const headerCityButton = document.querySelector(".header__city-button");

headerCityButton.textContent =
  localStorage.getItem("lomoda-location") || "Вашь город?";

headerCityButton.addEventListener("click", () => {
  const city = prompt("Укажите вашь город");
  headerCityButton.textContent = city;
  localStorage.setItem("lomoda-localtion", city);
});

//Блокировка скролла

const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;
  document.body.dbScrollY = window.scrollY;
  document.body.style.cssText = `
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  overflow: hidden;
  top: ${-window.scrollY}px;
  padding-right: ${widthScroll}px;
  `;
};

const enableScroll = () => {
  document.body.style.cssText = "";
  window.scroll({
    top: document.body.dbScrollY,
  });
};

//Модальное окно

const subheaderСart = document.querySelector(".subheader__cart");
const cartOverlay = document.querySelector(".cart-overlay");

const cartModalOpen = () => {
  cartOverlay.classList.add("cart-overlay-open");
  disableScroll();
};

const cartModalClose = () => {
  cartOverlay.classList.remove("cart-overlay-open");
  enableScroll();
};

subheaderСart.addEventListener("click", cartModalOpen);

cartOverlay.addEventListener("click", (event) => {
  const target = event.target;

  if (target.matches(".cart__btn-close") || target.matches(".cart-overlay")) {
    cartModalClose();
  }
});
