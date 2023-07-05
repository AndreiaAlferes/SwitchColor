// eslint-disable-next-line import/no-extraneous-dependencies
import { html, LitElement } from 'lit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { customElement, property } from 'lit/decorators.js';

import { style } from './styles.js';

@customElement('switch-color')
export class SwitchColor extends LitElement {
  @property({ type: String })
  private currentColor: string = this.getRandomColor();

  static styles = style;

  //

  // eslint-disable-next-line class-methods-use-this
  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  private changeColor(): void {
    this.currentColor = this.getRandomColor();
  }

  render() {
    return html`
      <div class="container">
        <div id="color-box" style="background-color:${this.currentColor}">
          <div id="box-color">Background Color: ${this.currentColor}</div>
          <button @click=${this.changeColor}>Switch Color</button>
        </div>
      </div>
    `;
  }
}
