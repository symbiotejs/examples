import { BaseComponent } from 'https://symbiotejs.github.io/symbiote.js/core/BaseComponent.js';

// Direct template rendering form a string:

const HTML = /*html*/ `<div set="textContent: text"></div>`;

class MyApp extends BaseComponent {

  init$ = {
    text: 'Hello world!',
  }

  initCallback() {
    this.render(HTML, true);
  }

}

MyApp.reg('my-app');