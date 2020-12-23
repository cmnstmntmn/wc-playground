import {api} from '../../util.js';

export const Actions = update => ({
    setLogin: (id, value) => update({ login: { [id]: value } }),
    doLogin: (data) => {
        console.table(data);

        // -- set loading to true and reset past errors (if any)
        update({ login: { loading: true, errors: null }, token: null})

        // -- touch the server
        api.login(data)
        .then(res => {
            update({ login: { loading: false }, token: res.token }) // -- set new auth token
        })
        .catch(errors => update({ login: { loading: false, errors: errors }})) // -- set errors
    }
})