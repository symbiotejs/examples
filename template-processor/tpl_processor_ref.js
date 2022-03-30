import { BaseComponent } from '../submodules/symbiote/core/BaseComponent.js';
import { applyStyles } from '../submodules/symbiote/utils/dom-helpers.js';

class StyledComponent extends BaseComponent {
  /**
   * 
   * @param {Object<string, Object<string, string>>} stylesObj 
   */
  static addStyles(stylesObj) {
    this.__stylesObj = stylesObj;
  }

  constructor() {
    super(); 
    this.styles = this.constructor['__stylesObj'];
    this.addTemplateProcessor((fr) => {
      /** @type {HTMLElement[]} */
      // @ts-ignore
      let cssElArr = [...fr.querySelectorAll('[css]')];
      cssElArr.forEach((el) => {
        let cssName = el.getAttribute('css');
        applyStyles(el, this.styles[cssName]);
      });
    });
    applyStyles(this, this.styles.host);
  }
}

// Usage:

class MyApp extends StyledComponent {}

MyApp.template = /*html*/ `
<div css="first_name">{{firstName}}</div>
<div css="second_name">{{secondName}}</div>
`;

MyApp.addStyles({
  host: {
    'display': 'inline-block',
    'padding': '20px',
    'border': '1px solid currentColor',
  },
  first_name: {
    'color': '#f00',
    'font-size': '20px',
  },
  second_name: {
    'color': '#00f',
    'font-size': '18px',
  },
});

MyApp.bindAttributes({
  'first-name': 'firstName',
  'second-name': 'secondName',
});

MyApp.reg('my-app');