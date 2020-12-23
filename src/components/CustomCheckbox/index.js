import { html, css } from "lit-element";
import { LionCheckbox } from '@lion/checkbox-group';
import { styles } from '../../root/styles';

export class CustomLionCheckbox extends LionCheckbox {
    static get properties() {
        return {
          label: { type: String },
          name: { type: String },
          action: { type: Object }
        }
      }

    static get styles() {
        return css`
            ${styles}
            label {
                width: 40%;
            }   

            input {
                visibility: hidden;
                display:none;
             }

            .checkmark::before {
                content: "";
                color: var(--white);
                width: 1.2em;
                height: 1.2em;
                margin-right: .5em;
                vertical-align: middle;
                display: inline-block;
                text-align: center;
                line-height: 1.2em;
                border-radius: .25em;
                margin-left:0;
                background-color: var(--ultra-light-grey);
            }

            input:checked + .checkmark::before {
                content: '✔';
                background-color: var(--lion-orange);
            }
        `
    }
  
    render() {
        const {label, name, action} = this;

        return html`<lion-checkbox class="d-flex align-items-center mb-2" name=${name} @input=${evt => action(name, evt.target.checked)}>
            <label class="checkbox-label light-grey text-right mr-4 no-wrap" slot="label">
                <input type="checkbox" slot="input" />      
                <span class="checkmark fs-small">${label}</span>
            </label>
        </lion-checkbox>`;
    }
  }

customElements.define("lion-checkbox", LionCheckbox)