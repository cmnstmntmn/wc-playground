import { LitElement, html, css } from "lit-element";
import {styles} from "./styles.js";
import {Login} from "../pages/login.js"
import {Header} from "../components/header.js"
import {Footer} from "../components/footer.js"

export const Root = ({ initial, actions }) =>
  class extends LitElement {
    static get properties() {
      return {
        title: { type: String },          
        state: { type: Object },
        actions: { type: Object }
      }
    }

    constructor() {
      super()
      this.state = initial
    }

    static get styles() {
        return css`
          ${styles}

          :host {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;
            padding:0;
        }          
      `
    }

    render() {
      const { state, title } = this

      return html`
        ${Header({actions})}
        <main>
            <!-- TODO: implement a routing mechanism -->
            <wc-login .state=${state} .actions=${actions}></wc-login>
        </main>
        ${Footer({actions})}
      `
    }
}

customElements.define("wc-login", Login)