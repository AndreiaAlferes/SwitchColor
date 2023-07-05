import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/main/switchcolor.js';
import '../components/header/header.js';

import '../components/footer/footer.js';

@customElement('color-switch')
export class ColorSwitch extends LitElement {
  render() {
    return html`
      <header-element></header-element>
      <switch-color></switch-color>
      <footer-element></footer-element>
    `;
  }
}
