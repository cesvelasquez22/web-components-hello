import { html, LitElement } from "lit";

export class Input extends LitElement {
  static get properties() {
    return {
      type: { type: String },
      placeholder: { type: String },
      controlName: { type: String },
    };
  }
  render() {
    return html`
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/wc-hello@1.3.0/dist/yalo.min.css" />
      <div class="yc-input">
          <input
            type=${this.type}
            id=${this.controlName}
            placeholder=${this.placeholder}
            controlName=${this.controlName}
            @input=${this._inputChange}
          />
          <label for=${this.controlName}>${this.placeholder}</label>
      </div>
    `;
  }

  _inputChange(event) {
    const value = event.target.value.trim();
    if (value) {
      this.dispatchEvent(
        new CustomEvent("onInputChange", {
          detail: { controlName: this.controlName, value },
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}

window.customElements.define("wc-input", Input);
