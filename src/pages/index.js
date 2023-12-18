import html from './index.html?raw';

export default class {
 constructor() {
  document.getElementById('main').innerHTML = html;
 }
 destroy() {}
}
