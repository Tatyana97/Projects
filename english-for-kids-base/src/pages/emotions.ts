import { emotion } from '../cards';
import { buttonBurderSwitch } from '../components/header-menu/header-menu';
import { audioAdd, playAudio } from '../helper/audio';
import { addStar } from '../helper/creatStar';
import { flipCards } from '../helper/flipCards';
import { item, randomItemNoRepeat } from '../helper/gamePlay';
import { startAddPlay } from '../helper/startAddPlay';

export const emotions = () => {
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
  emotion.forEach(((emotion: { word: string; image: string; audioSrc: string; translation: string; }) => {
    out += `<li>
    <div class="card">

    <div class="front">
    <span>
    <img class ="img" data-img="${emotion.word}" src= "${emotion.image}">
    <div class="container">
    <div class ="setActiv" data-note="${emotion.word}">${emotion.word}
    <audio class = "audio" data-note="${emotion.word}" src="${emotion.audioSrc}"></audio>
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
    <img src= "${emotion.image}">
    <div class="container">
    <div class ="setActiv">${emotion.translation}
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

  const getRandomItem = randomItemNoRepeat(['audio/sad.mp3', 'audio/angry.mp3', 'audio/happy.mp3', 'audio/tired.mp3', 'audio/surprised.mp3', 'audio/scared.mp3', 'audio/smile.mp3', 'audio/laugh.mp3']);
};
