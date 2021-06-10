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

// Modal
var modal = document.getElementById('add-note-modal');

// Get the button that opens the modal
var addNoteBtn = document.getElementById('note-btn');

// Get the <span> element that closes the modal
var close = document.getElementsByClassName('modal__content__close')[0];

// When the user clicks the button, open the modal
addNoteBtn.onclick = function () {
  modal.style.display = 'flex';
};

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
