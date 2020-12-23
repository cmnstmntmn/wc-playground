import { LitElement, html } from "lit-element";
import { css } from '@lion/core';
import { LionProgressIndicator } from '@lion/progress-indicator';


class CustomProgressIndicator extends LionProgressIndicator {
    static get styles() {
      return [
        css`
          :host {
              height: 48px; 
              width: 48px
          }

          svg {
            animation: spinner-rotate 2s linear infinite;
            display: inline-block;
            height: 48px;
            width: 48px;
          }
  
          circle {
            fill: none;
            stroke-width: 3.6;
            stroke: var(--lion-orange);
            stroke-dasharray: 100, 28;
          }
  
          @keyframes spinner-rotate {
            to {
              transform: rotate(360deg);
            }
          }
        `,
      ];
    }
  
    _graphicTemplate() {
      return html`<svg viewBox="22 22 44 44">
        <circle cx="44" cy="44" r="20.2" />
      </svg>`;
    }
  }

export class Loading extends LitElement {
    static get properties() {
      return {
        label: { type: String },
      }
    }

    static get styles() {
        return [
          css`
            :host {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                text-align: center;
            }

            main {
                flex-grow: 1;
            }

            strong {
                display: block;
                margin-top: 1em;
                color: var(--light-grey);
                font-weight: 300;
            }
          `,
        ];
      }    

    constructor() {
      super()
      this.label = "Loading..."
    }

    render() {
      const {label} = this;

      return html`
        <custom-progress-indicator></custom-progress-indicator>
        <strong>${label}</strong>
        `
    }
}

customElements.define("custom-progress-indicator", CustomProgressIndicator)