let menuButton = document.querySelector('.navbar__mobile__menu');
let navItems = document.querySelector('.navbar__nav');
let navBar = document.querySelector('.navbar');
let barRight = document.querySelector(
  '.navbar__mobile__menu__bar:nth-child(1)'
);
let barLeft = document.querySelector('.navbar__mobile__menu__bar:nth-child(2)');
let barHide = document.querySelector('.navbar__mobile__menu__bar:nth-child(3)');
let navBarMenu = document.querySelector('.container-navbar');

menuButton.onclick = openMenu;

function openMenu() {
  navItems.classList.toggle('navbar__nav__toggle');
  barHide.classList.toggle('navbar__mobile__menu__bar__hide');
  barLeft.classList.toggle('navbar__mobile__menu__bar__across');
  barRight.classList.toggle('navbar__mobile__menu__bar__cross');
  navBarMenu.classList.toggle('nav-menu');
  let nav = document.querySelector('.navbar__nav__toggle');
  let navMenu = document.querySelector('.nav-menu');

  if (nav) {
    navBar.style.display = 'block';
    navBar.style.height = '100vh';
    navBar.style.overflow = 'hidden';
    navMenu.style.backgroundColor =
      'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.5 + ')';
    barRight.style.backgroundColor = 'white';
    barLeft.style.backgroundColor = 'white';
  } else {
    navBar.style.height = 'auto';
    navBar.style.display = 'none';
    barRight.style.backgroundColor = 'black';
    barLeft.style.backgroundColor = 'black';
  }
}

$('.header__carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$('.trusted__carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$('.testimonial__carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
