import { html } from "lit-element";

const menuItems = [
    {
        name: 'Rate și dobânzi', 
        path: '/rate-si-dobanzi'
    },
    {
        name: 'Relații cu media', 
        path: '/relatii-cu-media'
    },
    {
        name: 'Termeni și condiții', 
        path: '/termeni-si-conditii'
    },
    {
        name: 'Protecția consumatorilor A.N.P.C', 
        path: 'https://anpc.ro/'
    },
    {
        name: 'Protecția datelor personale', 
        path: '/protectia-datelor-personale'
    },
    {
        name: 'MiFID', 
        path: '/mifid'
    },
    {
        name: 'PSD2',
        path: '/psd2'
    }
]

export const Footer = ({actions}) => html`
    <footer>
        <nav class="container center">
            <ol class="m-0 p-0">
                ${menuItems.map(({name, path}, idx) => html`
                    <li class="d-inline-block mr-2 lh-solid ${idx !== 0 ? 'b-l-light-grey pl-2' : ''}">
                        <a class="grey hover:orange fs-small fw-light no-underline v-mid" 
                            href=${path} 
                            target=${path.indexOf("http") == 0 ? "_blank" : "_self"} 
                            @click=${(e) => actions.navTo(e, path)}
                            title=${name}>${name}</a>
                    </li>
                `)}
            </ol>
        </nav>
    </footer>
`