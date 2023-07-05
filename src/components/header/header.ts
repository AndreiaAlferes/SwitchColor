import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { style } from './headerStyle.js';

@customElement('header-element')
export class HeaderElement extends LitElement {
  static styles = style;

  render() {
    return html`
      <header class="header">
        <div class="container">
          <h1>This is a great SwITch CoLoR....</h1>
        </div>
      </header>
    `;
  }
}
