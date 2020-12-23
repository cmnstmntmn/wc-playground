import { html } from "lit-element";

const menuItems = [
    {
        name: 'Persoane fizice', 
        path: '/persoane-fizice'
    },
    {
        name: 'Companii', 
        path: '/companii'
    },
    {
        name: 'Amsterdam Broker de Asigurare', 
        path: '/amsterdam-broker-de-asigurare'
    },
    {
        name: 'ING Tech', 
        path: '/ing-tech'
    }
]

export const Header = ({actions}) => html`
    <header>
        <nav class="container center d-flex ns:flex-wrap justify-items-between">
            <ol class="m-0 p-0">
                <li class="d-inline-block mr-2">
                    <a class="grey hover:underline no-underline fw-light" 
                        href="tel:+40314062464" 
                        title="Call us" 
                        @click=${(e) => actions.navTo(e, path)}>
                        *2ING sau +40314062464</a>
                </li>
                <li class="d-inline-block mr-2">
                    <a class="grey hover:underline no-underline fw-light" 
                    href="/starea-serviciilor" 
                    title="Starea serviciilor"
                    @click=${(e) => actions.navTo(e, path)}>
                    Starea serviciilor</a>
                </li>
            </ol>
            <ol class="m-0 p-0">
                ${menuItems.map(({name, path}, idx) => html`
                    <li class="d-inline-block mr-2">
                        <a class="grey hover:orange no-underline fw-light" 
                            href=${path} title=${name}                     
                            @click=${(e) => actions.navTo(e, path)}>
                            ${name}</a>
                    </li>
                `)}
            </ol>
        </nav>
</header>
`