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
  responsive: {
    0: {
      items: 1,
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

(function continueCustomization() {
  let close = document.getElementsByClassName(
    'continue__modal__content__close'
  )[0];
  let modal = document.getElementById('continue-modal');
  let customizeBtn = document.getElementById('customize-btn');
  customizeBtn.onclick = function () {
    modal.style.display = 'flex';
    // console.log(customizeBtn);
  };
  close.onclick = function () {
    modal.style.display = 'none';
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
})();

(function instruction() {
  let close = document.getElementsByClassName('note__modal__content__close')[0];
  let modal = document.getElementById('add-note-modal');
  let addNoteBtn = document.getElementById('note-btn');
  addNoteBtn.onclick = function () {
    modal.style.display = 'flex';
  };
  close.onclick = function () {
    modal.style.display = 'none';
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
})();

(function upload() {
  let close = document.getElementsByClassName(
    'upload__modal__content__close'
  )[0];
  let modal = document.getElementById('upload-modal');
  let uploadBtn = document.getElementById('upload-btn');
  uploadBtn.onclick = function () {
    modal.style.display = 'flex';
  };
  close.onclick = function () {
    modal.style.display = 'none';
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
})();
