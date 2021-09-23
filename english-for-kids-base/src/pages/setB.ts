import { actionB } from '../cards';
import { buttonBurderSwitch } from '../components/header-menu/header-menu';
import { audioAdd, playAudio } from '../helper/audio';
import { addStar } from '../helper/creatStar';
import { flipCards } from '../helper/flipCards';
import { item, randomItemNoRepeat } from '../helper/gamePlay';
import { startAddPlay } from '../helper/startAddPlay';

export const setB = () => {
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
  actionB.forEach(((actionB: { word: string; image: string; audioSrc: string; translation: string; }) => {
    out += `<li>
       <div class="card">

       <div class="front">
       <span>
       <img class ="img" data-img="${actionB.word}" src= "${actionB.image}">
       <div class="container">
       <div class ="setActiv" data-note="${actionB.word}">${actionB.word}
       <audio class = "audio" data-note="${actionB.word}" src="${actionB.audioSrc}"></audio>
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
       <img src= "${actionB.image}">
       <div class="container">
       <div class ="setActiv">${actionB.translation}
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
          console.log(image);
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

  const getRandomItem = randomItemNoRepeat(['audio/open.mp3', 'audio/play.mp3', 'audio/point.mp3', 'audio/ride.mp3', 'audio/run.mp3', 'audio/sing.mp3', 'audio/skip.mp3', 'audio/swim.mp3']);
};
