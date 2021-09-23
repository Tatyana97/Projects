/* eslint-disable eqeqeq */
import './buttonPlayTrain.scss';
import './startGame.scss';
import './login.scss';

const burgerMenu: any = (root: any) => {
  const menuHeader = `
  <div class = "header">
  <div class="burger">
  <input type="checkbox" id="hmt" class="hidden-menu-ticker">
  <label class="btn-menu" for="hmt">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </label>
  <ul class="hidden-menu">
    <li><a href="#/" data-link>Main page</a></li>
    <li><a href="#/setA" data-link>Action (set A)</a></li>
    <li><a href="#/setB" data-link>Action (set B)</a></li>
    <li><a href="#/animal" data-link>Animal (set C)</a></li>
    <li><a href="#/zverushka" data-link>Animal (set D)</a></li>
    <li><a href="#/clothes" data-link>Clothes</a></li>
    <li><a href="#/emotions" data-link>Emotions</a></li>
    <li><a href="#/fruits" data-link>Fruits</a></li>
    <li><a href="#/vegetables" data-link>Vegetables</a></li>

    <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>

    <div id="id01" class="modal">
      <form class="modal-content animate" action="/action_page.php" method="post">
        <div class="container1">
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required>
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required>
          <button type="submit">Login</button>
        </div>
        <div class="container1" style="background-color:#f1f1f1">
          <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
        </div>
      </form>
    </div>
  </ul>
  </div>

  <div class="two"><h1>English-for-kids-base</h1></div>
    <div class = "switch">
    <form class="tabber">
    <label id="train" for="t1">Train</label>
    <input id="t1" name="food" type="radio" checked>
    <label id ="play" for="t2">Play</label>
    <input id="t2" name="food" type="radio">
    <div class="blob"></div>
  </form>
  </div>
  </div>
  `;
  root.innerHTML = menuHeader;
  return root;
};

export const buttonBurderSwitch = () => {
  const html = `<div class="btn-container">
    <button class="start-btn" id="startBtn">Start Game</button>
    <button class="repeat-btn"></button>
    </div>
    <div class="rating"></div>
    <div class="gameOver"></div>`;
  const root = document.createElement('header');
  burgerMenu(root).innerHTML += html;
  document.body.appendChild(root);
};

const modal: any = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
