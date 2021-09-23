import './main.scss';
import './card.scss';

const img_1 = require('../../assets/img/dance.jpg');
const img_2 = require('../../assets/img/open.jpg');
const img_3 = require('../../assets/img/cat.jpg');
const img_4 = require('../../assets/img/bird.jpg');
const img_5 = require('../../assets/img/skirt.jpg');
const img_6 = require('../../assets/img/sad.jpg');
const img_7 = require('../../assets/img/food.jpg');
const img_8 = require('../../assets/img/vegetables.jpg');

interface Item {
  imgLink: any;
  href: string;
  title: string;
}

const itemsDataSet: Item[] = [
  {
    imgLink: img_1,
    href: '#/setA',
    title: 'Action (set A)',
  },
  {
    imgLink: img_2,
    href: '#/setB',
    title: 'Action (set B)',
  },
  {
    imgLink: img_3,
    href: '#/animal',
    title: 'Animal (set C)',
  },
  {
    imgLink: img_4,
    href: '#/zverushka',
    title: 'Animal (set D)',
  },
  {
    imgLink: img_5,
    href: '#/clothes',
    title: 'Clothes',
  },
  {
    imgLink: img_6,
    href: '#/emotions',
    title: 'Emotions',
  },
  {
    imgLink: img_7,
    href: '#/fruits',
    title: 'Fruits',
  },
  {
    imgLink: img_8,
    href: '#/vegetables',
    title: 'Vegetables',
  },
];

const renderListItem = (imgLink: any, href: string, title: string) => `<li><a href="${href}"><div class="mainBlock">${title}</div><img class="fit-picture"src="${imgLink}"></a></li>`;

export const mainPage = () => {
  const items: string[] = itemsDataSet.map((item: Item) => renderListItem(item.imgLink, item.href, item.title));

  const html = `
  <div class = "main">
  <ul id='grid-container'>
  ${items.join('')}
   </ul>
	</div>
  `;

  const main = document.createElement('main');
  main.innerHTML = html;
  document.body.appendChild(main);
};
