import { BaseComponent } from 'https://esm.sh/@symbiotejs/symbiote@1.11.7';

class MyApp extends BaseComponent {}

MyApp.template = /*html*/ `
<header>
  <slot name="header"></slot>
</header>
<main>
  <slot></slot>
</main>
<footer>
  <slot name="footer"></slot>
</footer>
`;
MyApp.reg('my-app');

class MyBlock extends BaseComponent {}
MyBlock.template = /*html*/ `<slot></slot>`;
MyBlock.reg('my-block');
