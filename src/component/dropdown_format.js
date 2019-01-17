import Dropdown from './dropdown';
import { h } from './element';
import { baseFormats } from '../format';

export default class DropdownFormat extends Dropdown {
  constructor() {
    let nformats = baseFormats.slice(0);
    nformats.splice(2, 0, { key: 'divider' });
    nformats.splice(6, 0, { key: 'divider' });
    nformats = nformats.map((it) => {
      const item = h('div', 'xss-item');
      if (it.key === 'divider') {
        item.addClass('divider');
      } else {
        item.child(it.title)
          .on('click', () => {
            this.setTitle(it.title);
          });
        if (it.label) item.child(h('div', 'label').html(it.label));
      }
      return item;
    });
    super('Normal', '220px', true, ...nformats);
  }
}