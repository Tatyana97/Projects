export function startAddPlay() {
  const play = document.getElementById('play');
  const container = document.querySelectorAll('.container') as unknown as HTMLCollectionOf<HTMLElement>;
  const startBtn = document.querySelectorAll('.start-btn') as unknown as HTMLCollectionOf<HTMLElement>;
  const btnTrain = document.getElementById('train');
  if (!play) console.error('not');
  if (!btnTrain) throw new Error('not');
  play?.addEventListener('click', () => {
    startBtn[0].style.display = 'block';
    for (let i = 0; i < container.length; i++) {
      container[i].style.display = 'none';
    }
  });
  btnTrain.addEventListener('click', () => {
    startBtn[0].style.display = 'none';
    for (let i = 0; i < container.length; i++) {
      container[i].style.display = 'flex';
    }
  });
}
