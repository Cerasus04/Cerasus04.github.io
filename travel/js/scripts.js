'use strict'

//Открытие меню
const pageNav = document.querySelector(".header__nav");
pageNav.classList.remove("header__nav--nojs");
pageNav.classList.add("header__nav--closed");
const navToggle = document.querySelector(".header__toggle");

navToggle.addEventListener("click", function () {
  if (pageNav.classList.contains("header__nav--closed")) {
    pageNav.classList.remove("header__nav--closed");
    pageNav.classList.add("header__nav--opened");
  } else {
    pageNav.classList.add("header__nav--closed");
    pageNav.classList.remove("header__nav--opened");
  }
});

const btns = document.querySelectorAll(`.modal-js`);
const modal = document.querySelector(`.pay-modal`);
const btnClose = document.querySelector(`.pay-modal__btn-close`);
const overlay = document.querySelector(`.pay-modal-overlay`);
const closeModalBtn = () => {
  modal.classList.remove(`pay-modal--active`);
  overlay.classList.remove(`pay-modal-overlay--active`);
  btnClose.removeEventListener(`click`, closeModalBtn);
  overlay.removeEventListener(`click`, closeModalBtn);
};
const closeModalEsc = (evt) => {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    modal.classList.remove(`pay-modal--active`);
    overlay.classList.remove(`pay-modal-overlay--active`);
  }
  window.removeEventListener(`keydown`, closeModalEsc);
};
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener(`click`, (evt) => {
    evt.preventDefault();
    modal.classList.add(`pay-modal--active`);
    overlay.classList.add(`pay-modal-overlay--active`);
    btnClose.addEventListener(`click`, closeModalBtn);
    window.addEventListener(`keydown`, closeModalEsc);
    overlay.addEventListener(`click`, closeModalBtn);
  });
}

const tabs = document.querySelectorAll(`.tabs__item`); 
const item = document.querySelectorAll(`.list__item`); 

tabs.forEach(tab => tab.addEventListener('click', tabClick));

function tabClick(evt) {
  const tabId = evt.target.dataset.id;

  tabs.forEach((tab, i) => {
    tab.classList.remove(`tabs__item--active`);
    item[i].classList.remove(`active`);
  })

  tabs[tabId - 1].classList.add(`tabs__item--active`);
  item[tabId - 1].classList.add(`active`);
}