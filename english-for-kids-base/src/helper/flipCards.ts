export function flipCards() {
  const cardList = document.getElementById('grid-container');
  const card = document.querySelectorAll('.card');
  cardList?.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement) {
      if (event.target.className === 'clicker') {
        event.target.closest('.card')?.classList.add('rotate-card');
      }
    }
  });
  card?.forEach((e: Element) => e.addEventListener('mouseleave', () => {
    e.classList.remove('rotate-card');
  }));
}
