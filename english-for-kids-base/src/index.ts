import './style.scss';
import { buttonBurderSwitch } from './components/header-menu/header-menu';
import { mainPage } from './pages/main/main';
import Router from './Router';
import { setA } from './pages/setA';
import { setB } from './pages/setB';
import { animals } from './pages/animal';
import { zverushka } from './pages/zverushka';
import { clothes } from './pages/clothes';
import { emotions } from './pages/emotions';
import { fruits } from './pages/fruits';
import { vegetables } from './pages/vegetables';

buttonBurderSwitch();
mainPage();

const router = new Router({
  mode: 'hash',
  root: '/',
});

router
  .add('/', () => {
    document.body.innerHTML = '';
    buttonBurderSwitch();
    mainPage();
  })
  .add('/setA/', () => {
    setA();
    console.log('setA');
  })
  .add('/setB/', () => {
    setB();
    console.log('setB');
  })
  .add('/clothes/', () => {
    clothes();
    console.log('clothes');
  })
  .add('/emotions/', () => {
    emotions();
    console.log('emotions');
  })
  .add('/animal/', () => {
    animals();
    console.log('animal');
  })
  .add('/zverushka/', () => {
    zverushka();
    console.log('zverushka');
  })
  .add('/fruits/', () => {
    fruits();
    console.log('fruits');
  })
  .add('/vegetables/', () => {
    vegetables();
    console.log('vegetables');
  });
router.listen();

// const express = require('express');
// const path = require('path');
// const exphbs = require('express-handlebars');

// const app = express();

// const hbs = exphbs.create({
//   defaultLayout: 'main',
//   extname: 'hbs',
// });

// app.engine('hbs', hbs.engine);
// app.set('view engine', 'hbs');
// app.set('views', 'pages');

// app.get('/', (req: any, res: any) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
