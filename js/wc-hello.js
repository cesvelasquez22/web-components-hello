import { html, css, LitElement } from 'lit';

export default class WcHello extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--wc-hello-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <link rel="stylesheet" href="../css/main.css" />
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button class="yc-btn yc-btn-primary" @click=${this.__increment}>increment</button>
    `;
  }
}

window.customElements.define('wc-hello', WcHello);