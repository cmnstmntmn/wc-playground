import { html, css } from "lit-element";
import { LionInput } from '@lion/input';
import { styles } from '../../root/styles';

export class CustomLionInput extends LionInput {
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
                color: var(--gray);
                box-shadow: inset 0px 0px 1px rgba(0,0,0,0.4);
                padding: .7em;
                width: 60%;
                color: var(--light-grey);
             }

            input:focus {
                outline: var(--lion-orange) auto 1px;
            }            
        `
    }
  
    render() {
        const {label, name, action} = this;

        return html`<lion-input class="d-flex align-items-center mb-2">
                <label class="light-grey text-right mr-4 no-wrap" slot="label">${label}</label>
                <input class="input-reset ba b-ultra-light-grey br2" slot="input" @input=${evt => action(name, evt.target.value)} />
        </lion-input>`;
    }
  }

customElements.define("lion-input", LionInput)