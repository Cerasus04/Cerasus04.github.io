// $(function () {

// // tab
// const tab = function () {
//   let tabNav = document.querySelectorAll('.tabs-nav__item'),
//       tabContent = document.querySelectorAll('.tab'),
//       tabName;

//   tabNav.forEach(item => {
//       item.addEventListener('click', selectTabNav);
//   })

//   function selectTabNav() {
//       tabNav.forEach(item => {
//           item.classList.remove('is-active');
//       });
//       this.classList.add('is-active');

//       tabName = this.getAttribute('data-tab-name');
//       selectTabContent(tabName);
//   }

//   function selectTabContent(tabName) {
//       tabContent.forEach(item => {
//           item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
//       })
//   }
// };

// tab();

// modal in portfolio

const modal = function () {
  let btnPortfolio = document.querySelectorAll('.portfolio__link-btn'),
      closeBtnPortfolio = document.querySelectorAll('.close'),
      overflowPortfolio = document.querySelectorAll('.overflow');

  btnPortfolio.forEach(item => {
      item.addEventListener('click', (e) => {
          e.preventDefault();
          item.parentElement.parentElement.nextElementSibling.classList.add('modal-active');
      })
  })

  closeBtnPortfolio.forEach(item => {
      item.addEventListener('click', (e) => {
          item.parentElement.parentElement.classList.remove('modal-active');
      })
  })

  overflowPortfolio.forEach(item => {
      item.addEventListener('click', (e) => {
          item.parentElement.classList.remove('modal-active');
      })
  })
}

modal();

// slide sections

const pageSlide = function () {
  let nav = document.querySelectorAll('.menu__list-item'),
      section = document.querySelectorAll('.section'),
      nav3 = document.querySelector('.nav-3'),
      port = document.querySelector('.tab'),
      navName;

  nav.forEach(item => {
      item.addEventListener('click', selectSection);
  })

  function selectSection() {
      nav.forEach(item => {
          item.classList.remove('menu__list-item_active');
      });
      this.classList.add('menu__list-item_active');

      navName = this.getAttribute('data-nav-name');
      selectTabContent(navName);
      porttab();    
  }

  function selectTabContent(navName) {
      section.forEach(item => {
          item.classList.contains(navName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      })
  }


  function porttab() {
    if (nav3.classList.contains('is-active')) {
      port.classList.add('is-active');
    } else {
      port.classList.remove('is-active');
    }
  }
};

pageSlide();

// burger-menu

const burgerMenu = function () {
  let mediaBtn = document.querySelector('.media-header__btn'),
      mediaHeaderActive = document.querySelector('header');

  mediaBtn.addEventListener('click', () => {
      mediaBtn.classList.toggle('media-header__btn_active');
      mediaHeaderActive.classList.toggle('media-header_active');
  })

  if (window.innerWidth < 1024) {
      let navItemClick = document.querySelectorAll('.menu__list-item');

      for (let elem of navItemClick) {
          elem.addEventListener('click', navHover);

          function navHover() {
              mediaBtn.classList.toggle('media-header__btn_active');
              mediaHeaderActive.classList.toggle('media-header_active');
          }
      }
  }
};

burgerMenu();

// print 
// const print = function () {
//   let printBtn = document.querySelector('.action-print');

//   printBtn.addEventListener('click', () => {
//       window.print();
//       return false;
//   });
// }

// print();

// });
const accordion = () => {
    const accordion = document.querySelector('.accordion');
    if (accordion) {
      const isAccordionFaq = accordion.classList.contains('list');
  
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
    console.log('ya');
  }
  
  accordion();