import { BaseComponent } from 'https://esm.sh/@symbiotejs/symbiote';

class MyComponent extends BaseComponent {
  init$ = {
    count: 0,
    increment: () => {
      this.$.count++;
    },
  }
}

MyComponent.template = /*html*/ `
  <h2>{{count}}</h2>
  <button set="onclick: increment">Click me!</button>
`;

MyComponent.reg('my-component');