export const Actions = update => ({
    setSettings: (id, value) => update({settings: {[id]: value}}),
    navTo: (evt, location) => {
        evt.preventDefault();
        console.warn(`Navigate to ${location} / Not implemented!`)
    }
})