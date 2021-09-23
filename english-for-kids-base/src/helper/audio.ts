export function audioAdd() {
  let note;
  const cardList = document.getElementById('grid-container');
  cardList?.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement) {
      if (event.target.classList.contains('setActiv')) {
        note = event.target.dataset.note;
        const src = `audio/${note}.mp3`;
        playAudio(src);
      }
    }
  });
}
export function playAudio(src: string) {
  const audio = <HTMLVideoElement>document.querySelector('.audio');
  if (!audio) console.error('not');
  audio.src = src;
  audio.play();
}
