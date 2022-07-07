import { html, css, LitElement } from "lit";

export default class Input extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        height: 3rem;
        background: #ffffff;
        border: 1px solid #808080;
        border-radius: 70px;
        position: relative;
        padding: 0.5rem 1rem;
        margin-top: 10px;
        width: 50%;
        transition: 0.5s;
      }
      :host(:hover) {
        border-color: #141414;
      }
      :host(:focus-within) {
        border-color: #00a0da;
      }
      input {
        font-family: inherit;
        width: 100%;
        border: 0;
        outline: 0;
        font-size: 1.3rem;
        padding: 7px 0;
        background: transparent;
        transition: 0.5s;
      }
      input::placeholder {
        color: transparent;
      }
      input:placeholder-shown ~ label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
      }
      input:focus {
        padding-bottom: 6px;
        border-width: 3px;
        ~ label {
          position: absolute;
          top: 0;
          display: block;
          transition: 0.2s;
          font-size: 1rem;
        }
      }
      label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
      }
    `;
  }

  static get properties() {
    return {
      type: { type: String },
      placeholder: { type: String },
      controlName: { type: String },
    };
  }
  render() {
    return html`
      <input
        type=${this.type}
        id=${this.controlName}
        placeholder=${this.placeholder}
        controlName=${this.controlName}
        @input=${this._inputChange}
      />
      <label for=${this.controlName}>${this.placeholder}</label>
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
