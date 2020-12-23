import { css } from 'lit-element';

export const styles =
    css`
        :host { 
            display: flex;
            align-self: center;
            flex-direction: row;
            align-items: center;
        }

        /* not small screen */
        @media only screen and (min-width: 30em) {
            :host {
                /* width: 90%; */
            }
        }

        /* medium screen */
        @media only screen and (min-width: 30em) and (max-width: 60em) {
            :host {
                /* width: 85%; */
            }
        }

        /* large screen */
        @media only screen and (min-width: 60em) {
            :host {
                /* width: 35%; */
            }
        }
    `