import { vegetable } from '../cards';
import { buttonBurderSwitch } from '../components/header-menu/header-menu';
import { audioAdd, playAudio } from '../helper/audio';
import { addStar } from '../helper/creatStar';
import { flipCards } from '../helper/flipCards';
import { item, randomItemNoRepeat } from '../helper/gamePlay';
import { startAddPlay } from '../helper/startAddPlay';

export const vegetables = () => {
  document.body.innerHTML = '';
  buttonBurderSwitch();
  const html = `
  <div class = "main">
  <ul id='grid-container'>
  </ul>
</div>
`;

  const main = document.createElement('main');
  main.innerHTML = html;
  document.body.appendChild(main);

  let out = '';
  vegetable.forEach(((vegetable: { word: string; image: string; audioSrc: string; translation: string; }) => {
    out += `<li>
       <div class="card">

       <div class="front">
       <span>
       <img class ="img" data-img="${vegetable.word}" src= "${vegetable.image}">
       <div class="container">
       <div class ="setActiv" data-note="${vegetable.word}">${vegetable.word}
       <audio class = "audio" data-note="${vegetable.word}" src="${vegetable.audioSrc}"></audio>
       </div>
       <div class="wrap">
       <button name="toggle" class="clicker">click</button>
       <div class="circle angled second"></div>
       </div>
       </div>
       </span>
       </div>

       <div class="back">
       <span>
       <img src= "${vegetable.image}">
       <div class="container">
       <div class ="setActiv">${vegetable.translation}
       </div>
       </div>
       </span>
       </div>

      </div>
    </li>`;
  }));
  const grid = document.getElementById('grid-container');
  if (!grid) throw new Error('not');

  grid.innerHTML = out;

  flipCards();
  audioAdd();
  startAddPlay();

  const startBtn = document.getElementById('startBtn');
  if (!startBtn) throw new Error('not');
  let srcInImg: any;

  startBtn.onclick = function () {
    let image;
    const cardList = document.getElementById('grid-container');
    cardList?.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement) {
        if (event.target.classList.contains('img')) {
          image = event.target.dataset.img;
          srcInImg = `audio/${image}.mp3`;
          console.log(srcInImg);
          if (item.includes(srcInImg)) {
            event.target.classList.add('img-filter');
            const soundRight = 'audio/correct.mp3';
            addStar('starWin');

            playAudio(soundRight);
            setTimeout(() => { getRandomItem(); }, 800);
          } else {
            const soundError = 'audio/error.mp3';
            addStar('starLoozer');
            playAudio(soundError);
          }
        }
      }
    });
    getRandomItem();
  };

  const getRandomItem = randomItemNoRepeat(['audio/carrot.mp3', 'audio/potato.mp3', 'audio/bean.mp3', 'audio/pepper.mp3', 'audio/cabbage.mp3', 'audio/cucumber.mp3', 'audio/tomato.mp3', 'audio/pumpkin.mp3']);
};
