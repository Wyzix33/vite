export default class {
 constructor(pages) {
  this.pages_ = pages;
  window.addEventListener('hashchange', this.navigate_.bind(this));
  this.navigate_();
 }
 navigate_() {
  const lochash = window.location.hash.split('/');
  const url = lochash[0].substring(1) || 'index';
  const args = lochash.slice(1);
  if (this.hash_ === url && !args) return;
  this.hash_ = url;
  if (this.page_) this.page_.destroy();
  const [Class, titlu = 'Pagina nu exista'] = this.pages_[this.hash_] || this.pages_.Nopage;
  document.title = titlu;
  this.page_ = new Class(...args);
 }
}
