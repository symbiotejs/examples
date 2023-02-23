import { BaseComponent } from 'https://esm.sh/@symbiotejs/symbiote';

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