'use strict';

(function () {
  const header = document.querySelector('.header');
  const headerNav = header.querySelector('.header__nav');
  const headerToggle = header.querySelector('.header__toggle');
  const promoBlock = document.querySelector('.promo');
  const listItems = header.querySelectorAll('.header__link');
  const page = document.querySelector('.page');

  header.classList.remove('header--nojs');
  headerNav.classList.remove('header__nav--nojs');
  headerNav.classList.add('header__nav--closed');
  promoBlock.classList.remove('promo--nojs');

  const onMenuClick = function () {
    if (headerNav.classList.contains('header__nav--closed')) {
      headerNav.classList.remove('header__nav--closed');
      headerNav.classList.add('header__nav--opened');
      page.classList.add('page--js');
    } else {
      headerNav.classList.add('header__nav--closed');
      headerNav.classList.remove('header__nav--opened');
      page.classList.remove('page--js');
    }
  };

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', onMenuClick);
  }

  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  headerToggle.addEventListener('click', onMenuClick);

})();
