
const API_URL = "https://app.ing.ro";

// -- TODO: to be switched to @lion/ajax
const request = async () => { 
    return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000)
        })
    .then(() => console.info('All ok'))
    .catch(err => console.error('Nok'))
}

// -- Implement API methods
export const api = {
    login: function(data) {
        console.log('Do login')
        return request({method: 'POST', url: `${API_URL}/login`, data: data}).then(() => fakeServerLoginReponse)
    }
}

// -- simulate a server response
const fakeServerLoginReponse = {
    status: "logginSucces",
    token: "asdas7d9as86da66asd86"
}