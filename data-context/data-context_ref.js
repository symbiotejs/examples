import { BaseComponent } from '../submodules/symbiote/core/BaseComponent.js';
import { applyStyles } from '../submodules/symbiote/utils/dom-helpers.js';

const css = {
  display: 'inline-block',
  border: '1px solid #00f',
  padding: '20px',
  userSelect: 'none',
};

class CtxEl extends BaseComponent {
  init$ = {
    '*time': 'Click me!',
  };
  initCallback() {
    applyStyles(this, css);
    this.onclick = () => {
      this.$['*time'] = Date.now();
    };
  }
}
CtxEl.template = /*html*/ `<span set="textContent: *time"></span><slot></slot>`;
CtxEl.reg('ctx-el');
