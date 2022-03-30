import { BaseComponent } from '../submodules/symbiote/core/BaseComponent.js';

const itemSet = new Set();

function remove(item) {
  itemSet.delete(item);
  item.remove();
};

//// Item element:
class ListItem extends BaseComponent {

  init$ = {
    text: 'Initial text...',
    remove: () => {
      remove(this);
    },
  };

  get checked() {
    return this.ref.checkbox.checked;
  }

  clear = () => {
    this.$.text = '';
  };

}

ListItem.template = /* html */ `
  <input ref="checkbox" type="checkbox">
  <div contenteditable="true">{{text}}</div>
  <button set="onclick: remove">X</button>
`;
ListItem.reg('list-item');

//// Application element:
class MyApp extends BaseComponent {

  sync = () => {
    itemSet.forEach((item) => {
      this.ref.list_wrapper.appendChild(item);
    });
  };

  init$ = {
    heading: 'List heading:',
    addItem: () => {
      itemSet.add(new ListItem());
      this.sync();
    },
    clearChecked: () => {
      itemSet.forEach((item) => {
        if (item.checked) {
          item.clear();
        }
      });
    },
    removeChecked: () => {
      itemSet.forEach((item) => {
        if (item.checked) {
          remove(item);
        }
      });
    },
  }

  initCallback() {
    // Add first item:
    this.$.addItem();
  }
}

MyApp.template = /*html*/ `
  <h2>{{heading}}</h2>
  <div ref="list_wrapper"></div>
  <div class="toolbar">
    <button set="onclick: addItem">Add Item</button>
    <button set="onclick: clearChecked">Clear Checked</button>
    <button set="onclick: removeChecked">Remove Checked</button>
  </div>
`;
MyApp.reg('my-app');