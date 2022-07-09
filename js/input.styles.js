import { css } from "lit";
export const inputStyles = css`
  :host {
    margin-top: 10px;
    position: relative;
    display: flex;
    background-color: var(--white);
    transition: 0.5s;
    font-family: var(--yc-body-font-family);
    height: 3rem;
  }

  :host > input {
    width: 100%;
    border: 0;
    outline: 0;
    color: var(--gray-900);
    background: transparent;
    transition: 0.5s;
    box-shadow: 0px 0px 0px 1px var(--gray-400);
    border-radius: 70px;
    padding: 12px 24px;
  }

  :host > input:hover {
    box-shadow: 0px 0px 0px 1px var(--gray-900);
  }

  :host > input:focus {
    box-shadow: 0px 0px 0px 1px var(--blue-500);
  }

  :host > input::placeholder {
    color: transparent;
  }

  :host > label {
    position: absolute;
    top: -10px;
    left: 20px;
    display: block;
    transition: 0.2s;
    color: #a9a9a9;
    background-color: var(--white);
    padding: 0px 8px;
  }

  :host > input:placeholder-shown ~ label {
    cursor: text;
    top: 12px;
    color: #898989;

    /* Letra */
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 24px;
  }

  :host > input:focus ~ label {
    position: absolute;
    top: -10px;
    display: block;
    color: var(--blue-500);

    /* Letra */
    font-size: 12px;
    letter-spacing: 0.2px;
    line-height: 16px;
  }

  .yc-error {
    position: fixed;
    color: var(--error);
    margin: 4px 24px;
  }

  :host-error {
    box-shadow: 0px 0px 0px 1px var(--error) !important;
  }

  .yc-label-error {
    color: var(--error) !important;
  }
`;
