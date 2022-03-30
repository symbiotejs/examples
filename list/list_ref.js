import { BaseComponent } from '../submodules/symbiote/core/BaseComponent.js';

//// Item element:
class ListItem extends BaseComponent {

  init$ = {
    text: '',
    remove: () => {
      this.remove();
    },
  };

  get checked() {
    return this.ref.checkbox.checked;
  }

  clear = () => {
    this.$.text = '';
  };

  initCallback() {
    this.ref.edit.focus();
  }

}

ListItem.template = /* html */ `
  <input ref="checkbox" type="checkbox">
  <div ref="edit" contenteditable="true" set="textContent: text"></div>
  <button set="onclick: remove">Remove Item</button>
`;
ListItem.reg('list-item');

//// Application element:
class MyApp extends BaseComponent {

  get items() {
    return [...this.ref.list_wrapper.children];
  }

  init$ = {
    heading: 'List heading:',
    addItem: () => {
      this.ref.list_wrapper.appendChild(new ListItem());
    },
    clearChecked: () => {
      this.items.forEach((item) => {
        if (item.checked) {
          item.clear();
        }
      });
    },
    removeChecked: () => {
      this.items.forEach((item) => {
        if (item.checked) {
          item.remove();
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