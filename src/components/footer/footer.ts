import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { style } from './footerStyle.js';

@customElement('footer-element')
export class FooterElement extends LitElement {
  static styles = style;

  render() {
    return html`
      <footer class="footer">
        <p>Made by meee....with a lot of color. Copyright &copy</p>
      </footer>
    `;
  }
}
