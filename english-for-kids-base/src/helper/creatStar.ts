export function createStar(className: string) {
  const starContainer = document.createElement('div');
  starContainer.className = className;
  return starContainer;
}
export function addStar(className: string) {
  const rating = document.querySelector('.rating');
  rating?.append(createStar(className));
}

export function addGameOver(className: string) {
  const imgGameOver = document.querySelector('.gameOver');
  imgGameOver?.append(createStar(className));
}
