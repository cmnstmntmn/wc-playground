export const Initial = async () => {
    const initial = {
      token: null,
      settings: {
        showDebug: true
      }
    }

    return getUserToken()
        .then((USER_TOKEN) => {
            // -- push to state
            return {...initial, token: USER_TOKEN}
        })
        .catch(_err => initial)
  }

// -- simulate a user token fetch from local storage
const getUserToken = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 1500)
    })
    .then(() => "USER_TOKEN_1234")
