import { createApp } from "./app"
import { Loading } from "./components/loading"

const update = flyd;
const merge = mergerino;

// -- show an app splash/loading screen
customElements.define("wc-loading", Loading);

// main app
createApp()
    .then(app => {
        const componentElemName = "wc-playground";

        const {states, actions} = Meiosis.mergerino.setup({
            stream: update,
            merge,
            app,
        });

        // -- init app
        customElements.define(componentElemName, app.view({ initial: app.initial, actions }));

        states.map(state => {
            document.querySelector(componentElemName).state = state;
        });

        console.info(`Hooray, ${componentElemName} is ready!`)
    })
    .then(_ => {
        // -- remove the loading screen
        document.querySelector('wc-loading').remove()
    })
    .catch(err => console.error('App could not be inited.', err))