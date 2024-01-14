// Открытие модального окна

var salesBtn = document.querySelectorAll(".btn-js");
var modalOverlay = document.querySelector(".modal-overlay");
var modalBlock = document.querySelector(".modal-block");
var modalForm = document.querySelector(".modal-block__form");

function show() {
  modalOverlay.classList.add("modal-overlay--opened");
  modalBlock.classList.add("modal-block--opened");
}

function hide() {
  if (modalOverlay.classList.contains("modal-overlay--opened")
    && modalBlock.classList.contains("modal-block--opened")) {
    modalOverlay.classList.remove("modal-overlay--opened");
    modalBlock.classList.remove("modal-block--opened");
  }
}

for (let i = 0; i < salesBtn.length; i++) {
  salesBtn[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    show();
  });
}

window.addEventListener("keydown", function () {
  if (event.keyCode === 27) {
    hide();
  }
});

modalOverlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  hide();
});

//Открытие меню

var pageNav = document.querySelector(".page-header__nav");
pageNav.classList.remove("page-header__nav--nojs");
pageNav.classList.add("page-header__nav--closed");

var navToggle = document.querySelector(".page-header__toggle");

navToggle.addEventListener("click", function () {
  if (pageNav.classList.contains("page-header__nav--closed")) {
    pageNav.classList.remove("page-header__nav--closed");
    pageNav.classList.add("page-header__nav--opened");
  } else {
    pageNav.classList.add("page-header__nav--closed");
    pageNav.classList.remove("page-header__nav--opened");
  }
});
