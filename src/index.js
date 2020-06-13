import menu from './menu.json';
import postTemp from './template/menu.hbs';
import './styles.css';


const refs = {
  menuList: document.querySelector('.js-menu'),
  input: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
}
buildPostTemp(menu);

function buildPostTemp(menu) {
  const item = menu.map(men => postTemp(men)).join('');

  refs.menuList.insertAdjacentHTML('beforeend', item);
}

const switchTheme = e => {
  if (e.target.checked === true) {
    localStorage.setItem('theme', 'dark-theme');
    refs.body.classList.remove('light-theme');
    refs.body.classList.add('dark-theme');
  } else {
    localStorage.setItem('theme', 'light-theme');
    refs.body.classList.remove('dark-theme');
    refs.body.classList.add('light-theme');
  }
}

refs.input.addEventListener('click', switchTheme);

const memory = localStorage.getItem('theme');
if (memory === 'dark-theme') {
  refs.body.classList.add(memory);
  refs.input.checked = true;
}
