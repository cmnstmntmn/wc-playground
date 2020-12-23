import { LitElement, html, css } from "lit-element";
import {nothing} from 'lit-html';
import { LionForm } from '@lion/form';
import { LionFieldset } from '@lion/fieldset';
import { LionCheckboxGroup } from '@lion/checkbox-group';
import { CustomLionInput } from "../../components/CustomInput"
import { CustomLionCheckbox } from "../../components/CustomCheckbox"
import { LionButton} from '@lion/button';
import { styles as generalStyles} from '../../root/styles';
import { styles } from "./styles";

export class Login extends LitElement {
    static get properties() {
        return {
          state: { type: Object },
          actions: { type: Object }
        }
      }

    static get styles() {
        return css`
            ${generalStyles}
            ${styles} 
        `
    }

    render() {
      const { state, actions, title } = this

      return html`
        <lion-form @submit=${ev => {
            ev.preventDefault();
            actions.doLogin(state.login)
        }}
        class="flex-grow">
            <form>
                <img style="margin-left:40%; padding-left:1em; width: 145px; margin-bottom:1.5em;" src="https://ing.ro/dam/jcr:6da2cd76-932f-4693-b237-623618e09b4d/logo.svg" alt="ING Bank" />
                <lion-fieldset name="loginForm" class="mb-3">   
                    <custom-lion-input class="mb-3" name="OrangeBankID" label="Orange BankID" .action=${actions.setLogin}></custom-lion-input>   
                    <custom-lion-input class="mb-3" name="CardNumber" label="Card Number" .action=${actions.setLogin}></custom-lion-input>   
                    <lion-checkbox-group class="ml-3" style="padding-left:40%" name="SaveCredentials">
                        <custom-lion-checkbox label="Save Credentials" .action=${actions.setLogin}></custom-lion-checkbox>   
                    </lion-checkbox-group>
                </lion-fieldset>

                <div class="ml-3 d-flex" style="padding-left:40%">
                    <lion-button ?disabled=${state.login.loading} type="submit" class="fs-large link br2 ph3 pv2 mb2 d-inline-block white ${state.login.loading ? 'bg-light-grey' : 'bg-orange dim'}">
                      ${!state.login.loading ? 'Login' : 'Loading...'}
                    </lion-button>
                </div>
            </form>

            <button type="button" class="b-none bg-none" @click=${() => actions.setSettings('showDebug', !state.settings.showDebug)}>&#128027;</button>

            ${state.settings.showDebug 
                ? html`<pre>${JSON.stringify(state, null, 2)}</pre>` 
                : nothing
            }
        </lion-form>
      `
    }
  }

customElements.define("custom-lion-input", CustomLionInput)
customElements.define("custom-lion-checkbox", CustomLionCheckbox)
customElements.define("lion-form", LionForm)
customElements.define("lion-fieldset", LionFieldset)
customElements.define("lion-checkbox-group", LionCheckboxGroup)
customElements.define("lion-button", LionButton)