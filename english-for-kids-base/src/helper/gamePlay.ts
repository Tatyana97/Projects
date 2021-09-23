import { playAudio } from './audio';
import { addGameOver } from './creatStar';

export let item: string;
export const randomItemNoRepeat = (array: string[]) => {
  const copyArray = [...array];

  return () => {
    if (copyArray.length < 1) {
      const win: any = document.querySelectorAll('.starWin');
      const lozer: any = document.querySelectorAll('.starLoozer');
      if (win.length > 1 && lozer.length < 1) {
        const mainPage: any = document.getElementsByClassName('main');
        mainPage[0].style.display = 'none';
        addGameOver('game-over');
        const soundGameOver = 'audio/success.mp3';
        setTimeout(() => { playAudio(soundGameOver); }, 800);
        setTimeout(() => {
          window.location.href = '#/';
        }, 5 * 1000);
      } else {
        const mainPage: any = document.getElementsByClassName('main');
        mainPage[0].style.display = 'none';
        addGameOver('failure');
        const soundFailure = 'audio/failure.mp3';
        setTimeout(() => { playAudio(soundFailure); }, 800);
        setTimeout(() => {
          window.location.href = '#/';
        }, 5 * 1000);
      }
    }

    const idx = Math.floor(Math.random() * copyArray.length);
    item = copyArray[idx];
    copyArray.splice(idx, 1);

    return playAudio(item);
  };
};
