'use strict';

(() => {
  const accordion = document.querySelector('.accordion');
  if (accordion) {
    const isAccordionFaq = accordion.classList.contains('faq__list');

    let openedTab;

    const closeTab = () => {
      openedTab.classList.remove('accordion__tab--open');
      openedTab = null;
    };

    accordion.classList.add('accordion--js');
    accordion.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains('accordion__button')) {
        if (isAccordionFaq && openedTab && target.parentElement !== openedTab) {
          closeTab();
        }
        target.parentElement.classList.toggle('accordion__tab--open');
        openedTab = target.parentElement;
      }
    });
  }
})();

'use strict';

(() => {
  const page = document.querySelector('.page');
  const btnCall = document.querySelector('.header__login');
  const btnCallMobile = document.querySelector('.user-menu__modal-login');
  const overlayCall = document.querySelector('.overlay');
  const popupModal = document.querySelector('.modal-login');
  const btnCloseCall = popupModal.querySelector('.modal-login__close');
  const name = document.querySelector('#login-email');
  const login = document.querySelector('#login');
  const  focusableElements =
    'button, [href], input, [tabindex]:not([tabindex="-1"])';
  const firstFocusableElement = login.querySelectorAll(focusableElements)[0];
  const focusableContent = login.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1];

  page.classList.remove('page--nojs');

  const onPopupEscPress = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup(evt);
    }
  };

  const openPopup = (evt) => {
    evt.preventDefault();
    page.classList.add('page--js');
    popupModal.classList.add('modal-login--active');
    overlayCall.classList.add('overlay--active');
    btnCloseCall.addEventListener('click', closePopup);
    document.addEventListener('keydown', onPopupEscPress);
    overlayCall.addEventListener('click', closePopup);
    name.focus();
  };

  const closePopup = (evt) => {
    evt.preventDefault();
    page.classList.remove('page--js');
    popupModal.classList.remove('modal-login--active');
    overlayCall.classList.remove('overlay--active');
    btnCloseCall.removeEventListener('click', closePopup);
    document.removeEventListener('keydown', onPopupEscPress);
    overlayCall.removeEventListener('click', closePopup);
  };

document.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab' || e.key === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) {
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus();
      e.preventDefault();
    }
  } else {
    if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus();
      e.preventDefault();
    }
  }
});

firstFocusableElement.focus();
btnCall.addEventListener('click', openPopup);
btnCallMobile.addEventListener('click', openPopup);

})();

'use strict';

(() => {
  const form = document.querySelector('.modal-login__form');
  const emailInputCall = document.querySelector('#login-email');

  let storageEmail = '',
    isStorageSupport = true;

  try {
    storageEmail = localStorage.getItem('npx');
  } catch (err) {
    isStorageSupport = false;
  }

  if (storageEmail) {
    emailInputCall.value = storageEmail;
  }

  form.addEventListener('submit', () => {
    if (isStorageSupport) {
      localStorage.setItem('email', emailInputCall.value);
    }
  });

})();

'use strict';

(() => {
  const header = document.querySelector('.header');
  const headerContainer = header.querySelector('.header__container');
  const headerToggle = header.querySelector('.header__burger-btn');
  const listItems = header.querySelectorAll('.nav-list__link');
  const page = document.querySelector('.page');
  const btnCall = document.querySelector('.header__login');
  const btnCallMobile = document.querySelector('.user-menu__modal-login');

  page.classList.remove('page--nojs');
  header.classList.remove('header--nojs');
  headerContainer.classList.remove('header__container--nojs');

  const onMenuClick = function () {
    header.classList.toggle('header--js');
    page.classList.toggle('page--js');
    headerContainer.classList.toggle('header__container--js');
  };

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', onMenuClick);
  }
  btnCall.addEventListener('click', onMenuClick);
  btnCallMobile.addEventListener('click', onMenuClick);
  headerToggle.addEventListener('click', onMenuClick);

})();

'use strict';

(() => {
  const page = document.querySelector('.page');
  const main = page.querySelector('.main');
  const catalogFilter = document.querySelector('.catalog__filter');
  const filterCall = document.querySelector('.catalog__filter-button');
  const filterClose = document.querySelector('.filter__close');

  page.classList.remove('page--nojs');

  if (main.classList.contains('main--catalog')) {
    catalogFilter.classList.remove('catalog__filter--nojs');

    const onPopupEscPress = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        closeFilter(evt);
      }
    };

    const openFilter = (evt) => {
      evt.preventDefault();
      page.classList.add('page--js');
      catalogFilter.classList.add('catalog__filter--js');
      filterClose.addEventListener('click', closeFilter);
      document.addEventListener('keydown', onPopupEscPress);
    };

    const closeFilter = (evt) => {
      evt.preventDefault();
      page.classList.remove('page--js');
      catalogFilter.classList.remove('catalog__filter--js');
      filterClose.removeEventListener('click', closeFilter);
    };

    filterCall.addEventListener('click', openFilter);
  }
})();

'use strict';

(() => {
  const range = document.querySelector('.range');
  if (range) {
    const onRangeInput = (e) => {
      let target = e.target;
      target.parentNode.style.setProperty('--' + target.id, +target.value);
    };

    range.addEventListener('input', onRangeInput, false);
  }
})();

'use strict';

(() => {
  const page = document.querySelector('.page');
  const main = page.querySelector('.main');
  const newInSlider = document.querySelector('.new-in__slider');

  page.classList.remove('.page--nojs');

  if (main.classList.contains('main--main')) {
    newInSlider.classList.remove('new-in__slider--nojs');
  }

  new Swiper('.new-in__slider', {
    navigation: {
      nextEl: '.new-in__slider-btn--next',
      prevEl: '.new-in__slider-btn--prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: false,
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
          },
        },
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      }
    },
    simulateTouch: false,
    spaceBetween: 30,
    watchOverflow: true,
    loop: true,
    speed: 800,
  });
})();
