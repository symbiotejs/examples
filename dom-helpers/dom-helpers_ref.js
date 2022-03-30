import { create } from '../submodules/symbiote/utils/dom-helpers.js';
import { Data } from '../submodules/symbiote/core/Data.js';

let state = new Data({
  schema: {
    time: Date.now(),
  },
});

window.setInterval(() => {
  state.pub('time', Date.now());
}, 1000);

function listItem(text) {
  return {
    tag: 'li',
    properties: {
      textContent: text,
    },
  };
};

let app = create({
  tag: 'div',
  styles: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    'font-size': '20px',
  },
  attributes: {
    contenteditable: true,
  },
  properties: {
    onclick: (e) => {
      e.target.innerHTML = '';
    },
  },
  children: [
    {
      processors: [
        (el) => {
          state.sub('time', (val) => {
            el.textContent = val;
          });
        },
      ],
    },
    {
      tag: 'ul',
      children: [
        listItem('Item 1'),
        listItem('Item 2'),
        listItem('Item 3'),
        listItem('Item 4'),
      ],
    },
  ],
});

document.body.appendChild(app);