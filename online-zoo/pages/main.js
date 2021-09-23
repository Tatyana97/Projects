// var Menu = {
  
//     el: {
//       ham: ('.menu'),
//       menuTop: ('.menu-top'),
//       menuMiddle: ('.menu-middle'),
//       menuBottom: ('.menu-bottom')
//     },
    
//     init: function() {
//       Menu.bindUIactions();
//     },
    
//     bindUIactions: function() {
//       Menu.el.ham
//           .on(
//             'click',
//           function(event) {
//           Menu.activateMenu(event);
//           event.preventDefault();
//         }
//       );
//     },
    
//     activateMenu: function() {
//       Menu.el.menuTop.toggleClass('menu-top-click');
//       Menu.el.menuMiddle.toggleClass('menu-middle-click');
//       Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
//     }
//   };
  
//   Menu.init();

  // karusel

  const state = {};
const carouselList = document.querySelector('.how-it-works-block-image-list');
const carouselItems = document.querySelectorAll('.carousel__item');
console.log(carouselItems)
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(newActive);

});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;
  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });

};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}

/* popap */

const coverElem = document.getElementById('cover');
const donateBlock = document.getElementById('donate-block'); 
const donateButton = document.getElementById('donate');
const close = document.getElementById('closeButton');
const close2 = document.getElementById('closeButton2');
const close3 = document.getElementById('closeButton3');

const buttonNext = document.getElementById('buttonNext');
const numberDonateBblock = document.getElementById('number');
const textDonateBlock = document.getElementById('text-donate-block');

const cardBlock = document.getElementById('card-block');
const buttonDonateInCard = document.getElementById('buttonDonate');

const feedbackButton = document.getElementById('feedback-button');
const feedback = document.getElementById('feedback');

donateButton.addEventListener('click', () =>{
  document.body.classList.add('notSctollable');
  coverElem.classList.remove('hidden');
  donateBlock.classList.remove('hidden');
})

feedbackButton.addEventListener('click', () =>{
  document.body.classList.add('notSctollable');
  coverElem.classList.remove('hidden');
  feedback.classList.remove('hidden');
})

close.addEventListener('click', () =>{
  document.body.classList.remove('notSctollable');
  coverElem.classList.add('hidden');
  donateBlock.classList.add('hidden');
})
close2.addEventListener('click', () =>{
  document.body.classList.remove('notSctollable');
  coverElem.classList.add('hidden');
  cardBlock.classList.add('hidden');
})
close3.addEventListener('click', () =>{
  document.body.classList.remove('notSctollable');
  coverElem.classList.add('hidden');
  feedback.classList.add('hidden');
})

coverElem.addEventListener('click', () =>{
  document.body.classList.remove('notSctollable');
  coverElem.classList.add('hidden');
  donateBlock.classList.add('hidden');
  cardBlock.classList.add('hidden');
  feedback.classList.add('hidden');
})

buttonNext.addEventListener('click', () =>{
  if (buttonNext.classList.contains('invalid')) return
  document.body.classList.remove('notSctollable');
  coverElem.classList.remove('hidden');
  donateBlock.classList.add('hidden');
  cardBlock.classList.remove('hidden');
})
buttonDonateInCard.addEventListener('click', () =>{
  alert("Thank you for your donation");
})


//validator
const validate = () =>{
  if (
    numberDonateBblock.validity.valid 
    ) {
      buttonNext.classList.remove('invalid');
  } else{
    buttonNext.classList.add('invalid');
  }
}

numberDonateBblock.addEventListener('input', () =>{
  validate()
})


// carousel
var slideIndex = 1;
showSlides(slideIndex);
 
 
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}
 
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}
 
/* Устанавливает текущий слайд */
function currentxSlide(n) {
    showSlides(slideIndex = n);
}
 
/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("pets-in-zoo-container");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "grid";
    
}

