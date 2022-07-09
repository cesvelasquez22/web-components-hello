import { html, LitElement } from "lit";
import { inputStyles } from "./input.styles.js";

export class Input extends LitElement {
  static styles = [inputStyles];

  static get properties() {
    return {
      type: { type: String },
      placeholder: { type: String },
      id: { type: String },
    };
  }
  render() {
    return html`
      <!-- <div class="yc-input"> -->
        <input type=${this.type} id=${this.id} placeholder=${this.placeholder} autocomplete="off" @input=${this._inputChange} />
        <label for=${this.id}>${this.placeholder}</label>
      <!-- </div> -->
    `;
  }

  _inputChange(e) {
    console.log(inputStyles.styleSheet);
  }
}

window.customElements.define("wc-input", Input);
